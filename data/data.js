function loadResources () {
  return [
    ...require('./tradle.EducationDegree.json'),
    // ...require('./tradle.Country.json'),
    ...require('./tradle.Nationality.json'),
    // ...require('./tradle.Currency.json'),
    // ...require('./tradle.Major.json'),
    ...require('./tradle.InvestingType.json')
    // ...require('./tradle.WealthItemType.json')
  ]
}
let resources = null

const data = {
  getResources() {
    if (resources === null) {
      resources = loadResources()
    }
    return resources
  }
}
module.exports = data
