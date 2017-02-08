

const path = require('path')
const fs = require('fs')
const proc = require('child_process')
const DEFAULT_MODELS_DIR = './models'

module.exports = { split, merge }

function split (models, dir) {
  dir = path.resolve(dir || DEFAULT_MODELS_DIR)
  models.forEach(function (m) {
    const fname = toFilePath(dir, m.id)
    fs.writeFile(path.resolve(fname), JSON.stringify(m, null, 2))
  })
}

function merge (modelsDir, outFilePath) {
  if (typeof outFilePath === 'undefined') {
    outFilePath = modelsDir
    modelsDir = null
  }

  modelsDir = path.resolve(modelsDir || DEFAULT_MODELS_DIR)
  proc.exec(`git ls-files "${modelsDir}/*.json"`, function (err, result) {
    if (err) throw err

    const models = result.trim().split('\n')
      .map(p => `\nrequire('./${p}')`)
      .join(',')

    const contents =
`const models = module.exports = [${models}]
models.forEach(function (m) {
  models[m.id] = m
})
`

    fs.writeFile(path.resolve(outFilePath), contents)
  })
}

function toFilePath (dir, id) {
  return path.join(dir, id + '.json')
}
