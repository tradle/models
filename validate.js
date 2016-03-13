#!/usr/bin/env node
'use strict'

var fs = require('fs')
var path = require('path')
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

var Validator = require('./validator')
var models
var modelsO = {}
if (argv.file) {
  var model = require(path.resolve(argv.file))
  var validator = new Validator(model)
  if (Array.isArray(model)) {
    validator.validateReferences()
  }
}
else if (argv.model) {
  Validator.validate(JSON.parse(argv.model))
}
else if (argv.references) {
  models = JSON.parse(argv.references)
  models.forEach(function(m) {
    modelsO[m.id] = m
  })
  Validator.validateReferences(models)
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
