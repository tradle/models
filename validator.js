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
// backlink
// ref
// array
// items or ref
  // properties
  let err = []
  if (!m.properties) {
    err.push('the required property "properties" is missing')
    return err
  }
  else if (typeof m.properties !== 'object') {
    err.push('the required property "properties" should be a valid json object')
    return err
  }
  const properties = m.properties
  const modelsO = this._byId
  for (let p in properties) {
    let prop = properties[p]
    if (prop.readOnly) {
      if (prop.readOnly !== true && prop.readOnly !== false)
        err.push('\n "' + m.id + '" property "' + p + '" defined as readOnly. readOnly can have only true/false values')
    }
    if (prop.type === 'object') {
      if (!prop.ref)
          err.push('"' + m.id + '" property "' + p + '" has a type "object". It has to have "ref" property that defines a type of this property')
      if (prop.ref) {
        if (checkRefs  &&  !modelsO[prop.ref])
          err.push('"' + m.id + '" property "' + p + '" has invalid "ref" value')
      }
    }
    else if (prop.type === 'array') {
      if (!prop.items)
        err.push('"' + m.id + '" property "' + p + '" is of array type. It has to have property "items" that will define the properties or the array item')
      else if (prop.items.backlink) {
        if (!prop.items.ref)
          err.push('"' + m.id + '" property "' + p + '" has a backlink "' + prop.items.backlink + '", it can be valid only if the "ref" property is defined and has the same value as the property in "backlink"')
        else if (checkRefs) {
          if  (!modelsO[prop.items.ref])
            err.push('"' + m.id + '" property "' + p + '.items" has invalid "ref"')
          else if (!modelsO[prop.items.ref].properties[prop.items.backlink])
            err.push('"' + m.id + '" property "' + p + '" has a backlink "' + prop.items.backlink + '" that does not corresponds to any property in the model')
        }
      }
      else if (!prop.items.backlink)
        this.validateProperties(prop.items, checkRefs)
      else if (checkRefs) {
        if (!models[prop.items.ref])
          err.push('"' + m.id + '" property "' + p + '" has a ref "' + prop.items.ref + '" that does not corresponds to any model')
        else if (!modelsO[prop.items.ref][backlink])
          err.push('"' + m.id + '" property "' + p + '" has a backlink "' + backlink + '" for its "items" property that was not found in ' + prop.items.ref)
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
        err.push(m.id + ' is a subClassOf "tradle.FinancialProduct" should also implement "tradle.Message" interface to allow resources of this type show up in chat')
      }
      else if (m.subClassOf === 'tradle.Form') {
        if (!m.interfaces)
          err.push('' + m.id + ' is a subClassOf "tradle.Form". It should also implement interface "tradle.Message" and it\'s properties "from" and "to"')
        else if (m.interfaces.constructor !== Array)
          err.push('' + m.id + ' has property interfaces that should be an array')
        else if (m.interfaces.indexOf('tradle.Message') === -1)
          err.push('' + m.id + ' is a subClassOf "tradle.Form". It should also implement interface "tradle.Message" and it\'s properties "from" and "to"')
      }
    }
  }

  if (m.interfaces) {
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
    }
  }
  if (m.required  &&  (m.required.constructor !== Array))
    err.push('the required property required should be of type Array')

  return err
}
