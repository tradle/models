const staticData = [
  require('./tradle.EducationDegree.json'),
  // require('./tradle.Country.json'),
  require('./tradle.Nationality.json'),
  // require('./tradle.Currency.json'),
  // require('./tradle.Major.json'),
  require('./tradle.InvestingType.json')
  // require('./tradle.WealthItemType.json')
]
const resources = [
]

const data = {
  getResources() {
    staticData.forEach(data =>  data.forEach(r => resources.push(r)))
    return resources;
  }
}
module.exports = data;
