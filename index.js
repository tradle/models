exports = models.exports = require('./models')
export.dictionaries = (lang) => {
  try {
    return require('dictionary_' + lang)
  } catch ((err) => null)
}