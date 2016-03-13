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
  let err = []
  // _t
  if (!json.type) {
    err.push('the required property type "tradle.Model" is missing')
    first = true
  }
  else if (json.type !== 'tradle.Model') {
    err.push('the required property  "type" can have only "tradle.Model" value')
    first = true
  }
  // id
  if (!json.id)
    err.push('the required property "id" is missing. It should have value like "tradle.[modelName]" like for example "tradle.Mortgage"')
  else if (typeof json.id !== 'string')
    err.push('the required property "id" should be of type string. It should have value like "tradle.[modelName]" like for example "tradle.Mortgage"')

  // subClassOf
  if (json.subClassOf) {
    let isFinancialProduct = json.subClassOf === 'tradle.FinancialProduct'
    // if (!models[json.subClassOf])
    //   err.push('there is no model with the "id" ' + json.subClassOf)
    // else
    if (isFinancialProduct) {
      if (!json.forms)
        err.push('the model that is a subClassOf "tradle.FinancialProduct" should have property "forms" as an array of models that have subClassOf "tradle.Form" property')
      else if (json.forms.constructor === Array)
        err.push('"forms" property of the models that is subClassOf "tradle.FinancialProduct" should be an array of valid models that are subClassOf "tradle.Form"')
    }
    if (json.interfaces  &&  !json.interfaces[0]) {
      err.push('the model that is a subClassOf "tradle.FinancialProduct" should have property "forms" as an array of models that have subClassOf "tradle.Form" property')
    }
  }

  // required
  // if (!json.required)
  //   err.push('property "required" should be defined in model and the value for it should be an array of property names')
  // else
  if (json.required  &&  (json.required.constructor !== Array))
    err.push('the required property required should be of type Array')

  // properties
  if (!json.properties)
    err.push('the required property "properties" is missing')
  else if (typeof json.properties !== 'object')
    err.push('the required property "properties" should be a valid json object')
  else
    err.push.apply(err, this.validateProperties(json))

  return err
}

proto.validateReferences = function (models) {
  models = models || this._models

  const err = []
  const modelsO = this._byId
  models.forEach(function(m) {
    if (m.subClassOf) {
      if (!modelsO[m.subClassOf])
        err.push('model "'+ m.id + '" has subClassOf that does not correspond to any model')
      else {
        let isFinancialProduct = m.subClassOf === 'tradle.FinancialProduct'
        if (isFinancialProduct) {
          if (!m.forms)
            err.push('model "'+ m.id + '" has subClassOf "tradle.FinancialProduct". Being that it has to have property "forms"')

          else {
            m.forms.forEach(function(f) {
              if (!modelsO[f])
                err.push('there is no model with id "' + f + '"')
              else if (!modelsO[f].subClassOf)
                err.push('forms list for "' + m.id + '" contains "' + f +'" that is not subClassOf "tradle.Form"')
            })
          }
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
                rProps += '' + r
            })
            if (rProps.length)
              err.push('  ' + m.id + ' implements interface "' + i + '". This interface requires implementing properties: ' + rProps.substring(2))
          }
        }
      })
    }

    err.push.apply(err, this.validateProperties(m, true))
  }, this)

  return err
}

proto.validateProperties = function (m, checkRefs) {
// backlink
// ref
// array
// items or ref
  const properties = m.properties
  const modelsO = this._byId
  const err = []
  for (let p in properties) {
    let prop = properties[p]
    if (prop.readOnly) {
      if (prop.readOnly !== true && prop.readOnly !== false)
        err.push('"' + m.id + '" property "' + p + '" defined as readOnly. readOnly can have only true/false values')
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
