'use strict'

var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    m: 'model',
    h: 'help',
    f: 'file',
    r: 'references'
  }
})

if (argv.help) {
  printUsage()
  process.exit(0)
}
var models
var modelsO = {}
if (argv.file) {
  fs.readFile(argv.model, function(error, data) {
    checkModel(JSON.parse(data))
  })
}
else if (argv.model)
  checkModel(JSON.parse(argv.model))
else if (argv.references) {
  models = JSON.parse(argv.references)
  models.forEach(function(m) {
    modelsO[m.id] = m
  })
  checkReferences(models)
}

function checkModel(json) {
  let err = ''
  // _t
  if (!json.type) {
    err += 'the required property type "tradle.Model" is missing'
    first = true
  }
  else if (json.type !== 'tradle.Model') {
    err += 'the required property  "type" can have only "tradle.Model" value'
    first = true
  }
  // id
  if (!json.id)
    err += '\n the required property "id" is missing. It should have value like "tradle.[modelName]" like for example "tradle.Mortgage"'
  else if (typeof json.id !== 'string')
    err += '\n the required property "id" should be of type string. It should have value like "tradle.[modelName]" like for example "tradle.Mortgage"'

  // subClassOf
  if (json.subClassOf) {
    let isFinancialProduct = json.subClassOf === 'tradle.FinancialProduct'
    // if (!models[json.subClassOf])
    //   err += '\n there is no model with the "id" ' + json.subClassOf
    // else
    if (isFinancialProduct) {
      if (!json.forms)
        err += '\n the model that is a subClassOf "tradle.FinancialProduct" should have property "forms" as an array of models that have subClassOf "tradle.Form" property'
      else if (json.forms.constructor === Array)
        err += '\n "forms" property of the models that is subClassOf "tradle.FinancialProduct" should be an array of valid models that are subClassOf "tradle.Form"'
    }
    if (json.interfaces  &&  !json.interfaces[0]) {
      err += '\n the model that is a subClassOf "tradle.FinancialProduct" should have property "forms" as an array of models that have subClassOf "tradle.Form" property'
    }
  }

  // required
  // if (!json.required)
  //   err += '\n property "required" should be defined in model and the value for it should be an array of property names'
  // else
  if (json.required  &&  (json.required.constructor !== Array))
    err += '\n the required property required should be of type Array'

  // properties
  if (!json.properties)
    err += '\n the required property "properties" is missing'
  else if (typeof json.properties !== 'object')
    err += '\n the required property "properties" should be a valid json object'
  else
    err += checkProperties(json.properties, json)
  console.log(err  ||  'Validation was successful')
}


function checkReferences(models) {
  let err = ''
  models.forEach(function(m) {
    if (m.subClassOf) {
      if (!modelsO[m.subClassOf])
        err += '\n model "'+ m.id + '" has subClassOf that does not correspond to any model'
      else {
        let isFinancialProduct = m.subClassOf === 'tradle.FinancialProduct'
        if (isFinancialProduct) {
          if (!m.forms)
            err += '\n model "'+ m.id + '" has subClassOf "tradle.FinancialProduct". Being that it has to have property "forms"'

          else {
            m.forms.forEach(function(f) {
              if (!modelsO[f])
                err += '\n there is no model with id "' + f + '"'
              else if (!modelsO[f].subClassOf)
                err += '\n forms list for "' + m.id + '" contains "' + f +'" that is not subClassOf "tradle.Form"'
            })
          }
        }
        else if (m.subClassOf === 'tradle.Form') {
          if (!m.interfaces)
            err += '\n ' + m.id + ' is a subClassOf "tradle.Form". It should also implement interface "tradle.Message" and it\'s properties "from" and "to"'
          else if (m.interfaces.constructor !== Array)
            err += '\n ' + m.id + ' has property interfaces that should be an array'
          else if (m.interfaces.indexOf('tradle.Message') === -1)
            err += '\n ' + m.id + ' is a subClassOf "tradle.Form". It should also implement interface "tradle.Message" and it\'s properties "from" and "to"'
        }
      }
    }
    if (m.interfaces) {
      if (m.interfaces.constructor !== Array)
        err += '\n ' + m.id + ' has property interfaces that should be an array'
      m.interfaces.forEach(function(i) {
        if (!modelsO[i])
          err += '\n ' + m.id + ' has property interfaces that lists model "' + i + '". This interface does not correspond to any model'
        else if (!modelsO[i].isInterface)
          err += '\n ' + m.id + ' has property interfaces that lists model "' + i + '". This interface model does not have a property "isInterface" that identifies it as interface'
        else {
          var req = modelsO[i].required
          if (req) {
            let rProps = ''
            req.forEach(function(r) {
              if (!m.properties[r])
                rProps += '\n ' + r
            })
            if (rProps.length)
              err += '\n   ' + m.id + ' implements interface "' + i + '". This interface requires implementing properties: ' + rProps.substring(2)
          }
        }
      })
    }
    err += checkProperties(m.properties, m)
  })

  if (err.length)
    console.log(err)
  else
    console.log('All the references are valid.')
}
function checkProperties(properties, m) {
// backlink
// ref
// array
// items or ref
  let err = ''
  let checkingRefs = argv.references
  for (let p in properties) {
    let prop = properties[p]
    if (prop.readOnly) {
      if (prop.readOnly !== true && prop.readOnly !== false)
        err += '\n "' + m.id + '" property "' + p + '" defined as readOnly. readOnly can have only true/false values'
    }
    if (prop.type === 'object') {
      if (!prop.ref)
          err += '\n "' + m.id + '" property "' + p + '" has a type "object". It has to have "ref" property that defines a type of this property'
      if (prop.ref) {
        if (checkingRefs  &&  !modelsO[prop.ref])
          err += '\n "' + m.id + '" property "' + p + '" has invalid "ref" value'
      }
    }
    else if (prop.type === 'array') {
      if (!prop.items)
        err += '\n "' + m.id + '" property "' + p + '" is of array type. It has to have property "items" that will define the properties or the array item'
      else if (prop.items.backlink) {
        if (!prop.items.ref)
          err += '\n "' + m.id + '" property "' + p + '" has a backlink "' + prop.items.backlink + '", it can be valid only if the "ref" property is defined and has the same value as the property in "backlink"'
        else if (checkingRefs) {
          if  (!modelsO[prop.items.ref])
            err += '\n "' + m.id + '" property "' + p + '.items" has invalid "ref"'
          else if (!modelsO[prop.items.ref].properties[prop.items.backlink])
            err += '\n "' + m.id + '" property "' + p + '" has a backlink "' + prop.items.backlink + '" that does not corresponds to any property in the model'
        }
      }
      else if (!prop.items.backlink)
        checkProperties(prop.items.properties, true)
      else if (isCheckingRefs) {
        if (!models[prop.items.ref])
          err += '\n "' + m.id + '" property "' + p + '" has a ref "' + prop.items.ref + '" that does not corresponds to any model'
        else if (!modelsO[prop.items.ref][backlink])
          err += '\n "' + m.id + '" property "' + p + '" has a backlink "' + backlink + '" for its "items" property that was not found in ' + prop.items.ref
      }
    }
    else if (prop.units) {
      if (prop.type !== 'number'  &&  prop.ref !== 'tradle.Money')
        err += '\n "' + m.id + '" property "' + p + '" has a units. It is allowed only for properties of type "number" or if the type of the property is "object" then it should have "ref" to "tradle.Money"'
    }
  }
  return err
}
function printUsage () {
  console.log(function () {
  /*
  Usage:
  Options:
      -h, --help              print usage
      -f, --file              file path where the model resides
      -m, --model             model json object. Verifies everyhing except references
      -r, --references        the array of models for which to check the references
  */
  }.toString().split(/\n/).slice(2, -2).join('\n'))
  process.exit(0)
}
