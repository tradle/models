#!/usr/bin/env node

var path = require('path')
var splitMerge = require('./split-merge')
var models = require(path.resolve(process.argv[2]))
splitMerge.split(models)
