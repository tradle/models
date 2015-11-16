#!/usr/bin/env node

var splitMerge = require('./split-merge')
splitMerge.merge(process.argv[2], process.argv[3], true)
