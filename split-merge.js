
var path = require('path')
var fs = require('fs')
var DEFAULT_MODELS_DIR = './models'

module.exports = {
  split: split,
  merge: merge
}

function split (models, dir) {
  dir = path.resolve(dir || DEFAULT_MODELS_DIR)
  models.forEach(function (m) {
    var fname = toFilePath(dir, m.id)
    fs.writeFile(path.resolve(fname), JSON.stringify(m, null, 2))
  })
}

function merge (modelsDir, outFilePath) {
  if (typeof outFilePath === 'undefined') {
    outFilePath = modelsDir
    modelsDir = null
  }

  modelsDir = path.resolve(modelsDir || DEFAULT_MODELS_DIR)
  var models = fs.readdirSync(modelsDir)
    .filter(function (fname) {
      var idx = fname.indexOf('.json')
      return idx !== -1  &&  idx + 5 === fname.length
    })
    .map(fname => `\nrequire('./models/${fname}')`)
    .join(',')

  var contents =
`var models = module.exports = [${models}]
models.forEach(function (m) {
  models[m.id] = m
})
`

  fs.writeFile(path.resolve(outFilePath), contents)
}

function toFilePath (dir, id) {
  return path.join(dir, id + '.json')
}
