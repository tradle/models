'use strict'
exports.models = require('./models.json')
exports.dictionaries = {
  get en() { return require('./dictionary_en.json') },
  get nl() { return require('./dictionary_nl.json') },
}
// exports.formDefaults = require('./data/formDefaults.json')
exports.data = require('./data/data')
exports.currencies = require('./data/tradle.Currency.json')
exports.nationalities = require('./data/tradle.Nationality.json')
// exports.countries = require('./data/tradle.Country.json')
