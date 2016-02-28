exports = module.exports = require('./models')
exports.dictionaries = (lang) => {
  try {
    return require('./dictionary_' + lang + '.json')
  } catch (err) {
    return require('./dictionary_en.json')
  }
}