exports = module.exports = require('./models')
exports.dictionaries = (lang) => {
  try {
    return require('./dictionary_' + lang + '.json')
  } catch (err) {
    return require('./dictionary_en.json')
  }
}

exports.dict = {
  en: require('./dictionary_en.json'),
  nl: require('./dictionary_nl.json')
}
exports.formDefaults = require('./data/formDefaults.json')
exports.data = require('./data/data')

exports.Validator = require('./validator')
