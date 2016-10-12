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
exports.currencies = require('./data/tradle.Currency.json')
exports.nationalities = require('./data/tradle.Nationality.json')
exports.countries = require('./data/tradle.Country.json')

exports.Validator = require('./validator')
