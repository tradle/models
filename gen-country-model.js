const fs = require('fs')
const countries = require('world-countries')
const propMap = {
  cca2: 'id',
  cca3: 'cca3',
  'name.common': 'title',
}

const getPropAtPath = (obj, path) => path.split('.').reduce((val, pathPart) => {
  return val[pathPart]
}, obj)

const model = {
  id: 'tradle.Country',
  subClassOf: 'tradle.Enum',
  title: 'Country',
  sort: 'country',
  type: 'tradle.Model',
  properties: {
    country: {
      displayName: true,
      type: 'string'
    }
  },
  enum: []
}

model.enum = countries.map(country => {
  const enumVal = {}
  for (let prop in propMap) {
    let tradleProp = propMap[prop]
    let val = getPropAtPath(country, prop)
    enumVal[tradleProp] = val
  }

  return enumVal
})

fs.writeFileSync('./models/tradle.Country.json', JSON.stringify(model, null, 2))
