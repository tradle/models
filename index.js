exports = models.exports = require('./models')
exports.dictionaries = (lang) => {
  try {
    return require('dictionary_' + lang)
  } catch ((err) => null)
}