'use strict'

function Validator (models) {
  this._models = [].concat(models) // normalize to array
  this._byId = {}
  this._models.forEach(function(m) {
    this._byId[m.id] = m
  }, this)
}

module.exports = Validator
const proto = Validator.prototype
const IDENTITY = 'tradle.Identity'
const PROFILE = 'tradle.Profile'
const PROPERTY_RANGES = ['json', 'email', 'phone', 'year', 'photo', 'check', 'url'] // year - not yet working :)
const VERIFIABLE = 'tradle.Verifiable'

Validator.validate = function (model) {
  new Validator(model).validate(model)
}

Validator.validateReferences = function (models) {
  new Validator(models).validateReferences()
}

proto.validate = function (json) {
  let errs = []
  errs.push.apply(errs, this.validateModel(json))
  errs.push.apply(errs, this.validateProperties(json))
  return errs
}

proto.validateReferences = function (models) {
  models = models || this._models

  let errs = []
  const modelsO = this._byId
  models.forEach(function(m) {
    errs.push.apply(errs, this.validateModel(m, modelsO))
    errs.push.apply(errs, this.validateProperties(m, true))
  }, this)

  return errs
}

proto.validateProperties = function (m, checkRefs) {
  let err = []
  const properties = m.properties
  if (!properties) {
    err.push('the required property "properties" is missing')
    return err
  }
  if (typeof properties !== 'object') {
    err.push('the required property "properties" should be a valid json object')
    return err
  }
  const modelsO = this._byId
  for (let p in properties) {
    let prop = properties[p]
    if (prop.range  &&  PROPERTY_RANGES.indexOf(prop.range) === -1) {
      err.push('\n "' + m.id + '" property "' + p + '" has unexpected range "' + prop.range + '"')
      continue
    }
    if (prop.readOnly) {
      if (prop.readOnly !== true  &&  prop.readOnly !== false)
        err.push('\n "' + m.id + '" property "' + p + '" defined as readOnly. readOnly can have only true/false values')
    }
    if (prop.displayAs) {
      if (prop.type !== 'string')
        err.push('\n "' + m.id + '" property "' + p + '" defined as displayAs must have type "string"')
      if (!prop.group)
        err.push('\n "' + m.id + '" property "' + p + '" defined as displayAs must have "group"')
      else {
        prop.group.forEach((g) => {
          if (!properties[g])
           err.push('\n "' + m.id + '" property "' + p + '" defined as displayAs. It has imvalid property "' + g + '" listed in "group"')
        })
      }

    }

    if (prop.type === 'object') {
      if (!prop.ref  &&  prop.range !== 'json'  &&  !prop.properties)
        err.push('"' + m.id + '" property "' + p + '" has type "object". It has to have "ref" property that defines a type of this property')
      if (prop.ref) {
        if (checkRefs  &&  !modelsO[prop.ref])
          err.push('"' + m.id + '" property "' + p + '" has invalid "ref" value')
      }
    }

    else if (prop.type === 'array') {
      if (!prop.items) {
        err.push('"' + m.id + '" property "' + p + '" is of array type. It has to have property "items" that will define the properties or the array item')
        continue
      }
      let backlink = prop.items.backlink
      let ref = prop.items.ref
      if (!backlink) {
        this.validateProperties(prop.items, checkRefs)
        continue
      }
      if (!ref) {
        err.push('"' + m.id + '" property "' + p + '" has a backlink "' + backlink + '", it can be valid only if the "ref" property is defined and has the same value as the property in "backlink"')
        continue
      }
      if (checkRefs) {
        if  (!modelsO[ref]) {
          err.push('"' + m.id + '" property "' + p + '.items" has invalid "ref"')
          continue
        }
        else if (modelsO[ref].properties[backlink])
          continue
        let interfaces = modelsO[ref].interfaces
        if (interfaces) {
          let found = interfaces.some((i) => {
            let bm = modelsO[i].properties[backlink]
            if (bm  &&  bm.ref) {
              if (bm.ref === m.id  ||  modelsO[bm.ref].subClassOf === m.id)
                return true
              // HACK for from and to in Message interface
              if ((bm.ref === IDENTITY || bm.ref === PROFILE) &&
                  (m.id === IDENTITY || m.id === PROFILE))
                return true
            }
          })
          if (found)
            continue
        }
        err.push('"' + m.id + '" property "' + p + '" has a backlink "' + backlink + '" that does not corresponds to any property in the model')
      }
    }
    else if (prop.units) {
      if (prop.type !== 'number'  &&  prop.ref !== 'tradle.Money')
        err.push('"' + m.id + '" property "' + p + '" has a units. It is allowed only for properties of type "number" or if the type of the property is "object" then it should have "ref" to "tradle.Money"')
    }
  }

  return err
}
proto.validateModel = function(m, modelsO) {
  let checkRefs = modelsO !== null
  let err = []
  if (!m.type) {
    err.push('the required property type "tradle.Model" is missing')
    first = true
  }
  else if (m.type !== 'tradle.Model') {
    err.push('the required property  "type" can have only "tradle.Model" value')
    first = true
  }
  // id
  if (!m.id)
    err.push('the required property "id" is missing. It should have value like "tradle.[modelName]" like for example "tradle.Mortgage"')
  else if (typeof m.id !== 'string')
    err.push('the required property "id" should be of type string. It should have value like "tradle.[modelName]" like for example "tradle.Mortgage"')
  if (m.subClassOf) {
    if (checkRefs  &&  !modelsO[m.subClassOf])
      err.push('model "'+ m.id + '" has subClassOf that does not correspond to any model')
    else {
      let isFinancialProduct = m.subClassOf === 'tradle.FinancialProduct'
      if (isFinancialProduct) {
        if (!m.forms)
          err.push('model "'+ m.id + '" has subClassOf "tradle.FinancialProduct". Being that it has to have property "forms"')
        else if (checkRefs) {
          m.forms.forEach(function(f) {
            if (!modelsO[f])
              err.push('there is no model with id "' + f + '"')
            else if (!modelsO[f].subClassOf)
              err.push('forms list for "' + m.id + '" contains "' + f +'" that is not subClassOf "tradle.Form"')
          })
        }

        if (m.interfaces.indexOf('tradle.Message') === -1) {
          err.push(m.id + ' is a subClassOf "tradle.FinancialProduct" should also implement "tradle.Message" interface to allow resources of this type show up in chat')
        }
      }
      else if (m.subClassOf === 'tradle.Form') {
        if (!m.interfaces)
          err.push('' + m.id + ' is a subClassOf "tradle.Form". It should also implement interface "tradle.Message"')
        else if (m.interfaces.constructor !== Array)
          err.push('' + m.id + ' has property interfaces that should be an array')
      }
    }
  }
  if (m.interfaces && !m.abstract) {
    if (m.interfaces.constructor !== Array)
      err.push('' + m.id + ' has property interfaces that should be an array')
    if (checkRefs) {
      m.interfaces.forEach(function(i) {
        if (!modelsO[i])
          err.push('' + m.id + ' has property interfaces that lists model "' + i + '". This interface does not correspond to any model')
        else if (!modelsO[i].isInterface)
          err.push('' + m.id + ' has property interfaces that lists model "' + i + '". This interface model does not have a property "isInterface" that identifies it as interface')
        else {
          var req = modelsO[i].required
          if (req) {
            let rProps = ''
            req.forEach(function(r) {
              if (!m.properties[r])
                rProps += '\n ' + r
            })
            if (rProps.length)
              err.push('  ' + m.id + ' implements interface "' + i + '". This interface requires implementing properties: ' + rProps.substring(2))
          }
        }
      })
      if (m.interfaces.indexOf(VERIFIABLE)) {
        if (m.evidentiaryDocuments) {
          m.evidentiaryDocuments.forEach((e) => {
            if (!modelsO[e])
              console.log('  ' + m.id + ' implements interface "' + VERIFIABLE + '". it\'s evidentiaryDocuments lists non-existent type "' +  e + '"')
          })
        }
      }
    }
  }
  if (m.required  &&  !Array.isArray(m.required))
    err.push('the required property required should be of type Array')
  if (m.viewCols  &&  !Array.isArray(m.viewCols))
    err.push('the required property viewCols should be of type Array')
  if (m.editCols  &&  !Array.isArray(m.editCols))
    err.push('the required property editCols should be of type Array')
// Check if implements Verifiable then probably has to have 'verifiableAspects' and/or 'evidentiaryDocuments'
// Check if implements Item should have property that has backlink for this type of items

  return err
}
