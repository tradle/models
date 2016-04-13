'use strict'


var m = require('./models')
var writeFileAtomic = require('write-file-atomic')


var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    m: 'models',
    h: 'help',
    l: 'language'
  }
})

if (argv.help) {
  printUsage()
  process.exit(0)
}
var models
if (argv.models)
  models = JSON.parse(argv.models)
  // throw new Error('There is no models to create a dictionary for')
else
  models = m

var propNames
var modelNames
let lang = argv.language || 'en'
let fn = './dictionary_' + lang + '.json'
// Check if the dictionary exists
try {
  let d = require(fn)
  propNames = d.properties
  modelNames = d.models
} catch (err) {
  debugger
}

if (!propNames)
  propNames = {}
if (!modelNames)
  modelNames = {}

writeDictionary()

function writeDictionary() {
  models.forEach(function(m) {
    modelNames[m.id] = modelNames[m.id]  ||  m.title
    for (let p in m.properties) {
      if (p.charAt(0) === '_')
        continue
      if (!propNames[p]) {
        propNames[p] = {}

        if (m.properties[p].title)
          propNames[p][m.id] = m.properties[p].title
        else {
          let title = makeLabel(p)
          propNames[p]['Default'] = title
        }
        if (m.properties[p].type === 'array'  &&  m.properties[p].items.properties) {
          let props = m.properties[p].items.properties
          propNames[p].items = {}
          for (var pp in props) {
            if (props[pp].title)
              propNames[p].items[pp] = props[pp].title
            else {
              let title = makeLabel(pp)
              propNames[p].items[pp] = title
            }
          }
        }
      }
      else {
        if (m.properties[p].title) {
          if (!propNames[p][m.id])
            propNames[p][m.id] = m.properties[p].title
        }
      }
    }
  })
  let dictionary = {
    properties: propNames,
    models: modelNames
  }

  writeFileAtomic(fn, JSON.stringify(dictionary, 0, 2), (err) => {console.log(err)})
  // console.log(JSON.stringify(propNames, 0, 2))
  // for (let p in propNames) {
  //   console.log(p + ':  ' + JSON.stringify(propNames[p], 0, 2))
  // }
}

function makeLabel(label) {
  return label
        // insert a space before all caps
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
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
