'use strict'
exports.models = require('./models.json')
exports.dictionaries = {
//   get en() { return require('./dictionary_en.json') },
  get nl() { return require('./dictionary_nl.json') },
  get bn() { return require('./dictionary_bn.json') },
  get vi() { return require('./dictionary_vi.json') },
  get fr() { return require('./dictionary_fr.json') },
  get es() { return require('./dictionary_es.json') },
  get fil() { return require('./dictionary_fil.json') },
}
// exports.formDefaults = require('./data/formDefaults.json')
exports.data = require('./data/data')
exports.currencies = require('./data/tradle.Currency.json')
exports.nationalities = require('./data/tradle.Nationality.json')
// exports.countries = require('./data/tradle.Country.json')
