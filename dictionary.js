const m = require('./models')
const writeFileAtomic = require('write-file-atomic')
const stableStringify = require('json-stable-stringify')
const argv = require('minimist')(process.argv.slice(2), {
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

let models
if (argv.models) {
  models = JSON.parse(argv.models)
  // throw new Error('There is no models to create a dictionary for')
} else {
  models = m
}

let propNames
let modelNames
const lang = argv.language || 'en'
const fn = './dictionary_' + lang + '.json'
// Check if the dictionary exists
// try {
//   const d = require(fn)
//   propNames = d.properties
//   modelNames = d.models
// } catch (err) {
//   console.log('dictionary not found')
// }

if (!propNames)
  propNames = {}
if (!modelNames)
  modelNames = {}

writeDictionary()

function writeDictionary() {
  Object.keys(models).forEach(id => {
    const m = models[id]
    modelNames[m.id] = modelNames[m.id]  ||  m.title
    for (let p in m.properties) {
      if (p.charAt(0) === '_')
        continue
      if (propNames[p]) {
        if (m.properties[p].title) {
          if (!propNames[p][m.id])
            propNames[p][m.id] = m.properties[p].title
        }

        continue
      }

      propNames[p] = {}

      if (m.properties[p].title)
        propNames[p][m.id] = m.properties[p].title
      else {
        let title = makeLabel(p)
        propNames[p].Default = title
      }
      if (m.properties[p].type === 'array'  &&  m.properties[p].items.properties) {
        let props = m.properties[p].items.properties
        propNames[p].items = {}
        for (let pp in props) {
          if (props[pp].title)
            propNames[p].items[pp] = props[pp].title
          else {
            let title = makeLabel(pp)
            propNames[p].items[pp] = title
          }
        }
      }
    }
  })
  let dictionary = {
    properties: propNames,
    models: modelNames
  }

  writeFileAtomic(fn, stableStringify(dictionary, { space: '  ' }), console.log)
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
        .replace(/^./, str => str.toUpperCase())
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
  }.toString()
  .split(/\n/)
  .slice(2, -2)
  .join('\n'))

  process.exit(0)
}
