module.exports = (lang) => {
  try {
    return require('dictionary_' + lang)
  } catch ((err) => null)
}