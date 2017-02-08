#!/usr/bin/env node

const path = require('path')
const splitMerge = require('./split-merge')
const models = require(path.resolve(process.argv[2]))
splitMerge.split(models)
