/* eslint-disable brace-style */
const models = {
  get models () { return require('./models.js') },
  // Memo: dictionaries: {
  // Memo:   get en() { return require('./dictionary_en.json') },
  // Memo:   get nl() { return require('./dictionary_nl.json') },
  // Memo:   get bn() { return require('./dictionary_bn.json') },
  // Memo:   get vi() { return require('./dictionary_vi.json') },
  // Memo:   get fr() { return require('./dictionary_fr.json') },
  // Memo:   get es() { return require('./dictionary_es.json') },
  // Memo:   get fil() { return require('./dictionary_fil.json') },
  // Memo: },
  // Memo: get formDefaults () { return require('./data/formDefaults.json') },
  get data () { return require('./data/data') },
  get currencies () { return require('./data/tradle.Currency.json') },
  get nationalities () { return require('./data/tradle.Nationality.json') },
  get countries () { return require('./data/tradle.Country.json') }
}
module.exports = models
