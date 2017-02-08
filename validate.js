#!/usr/bin/env node

const path = require('path')
const argv = require('minimist')(process.argv.slice(2), {
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

const validate = require('@tradle/validate').models
// try {
  run()
// } catch (err) {
//   console.log(err.message)
//   console.log(err.stack)
// }

function run () {
  if (argv.file) {
    const model = require(path.resolve(argv.file))
    return validate(model)
  }

  const json = argv.model || argv.references
  if (json) {
    return validate(JSON.parse(json))
  }

  printUsage()
  process.exit(1)
}

function printUsage () {
  console.log(`
    Usage:
    Options:
        -h, --help              print usage
        -f, --file              file path where the model resides
        -m, --model             model json object. Verifies everyhing except references
        -r, --references        the array of models for which to check the references
  `)
  process.exit(0)
}
