#!/usr/bin/env node

var splitMerge = require('./split-merge')
var models = require(process.argv[2])
splitMerge.split(models)
