const staticData = [
  require('./tradle.EducationDegree.json'),
  require('./tradle.Country.json'),
  require('./tradle.Nationality.json'),
  require('./tradle.Currency.json'),
  require('./tradle.Major.json'),
  require('./tradle.InvestingType.json'),
  require('./tradle.WealthItemType.json')
]
const resources = [
{
  _t: 'tradle.ResidentialStatus',
  status: 'Home owner (with mortgage)'
},
{
  _t: 'tradle.ResidentialStatus',
  status: 'Home owner (without mortgage)',
},
{
  _t: 'tradle.ResidentialStatus',
  status: 'Tenant (private)',
},
{
  _t: 'tradle.ResidentialStatus',
  status: 'Tenant (counsel)',
},
{
  _t: 'tradle.ResidentialStatus',
  status: 'Living with parents'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Employed'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Self-Employed'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Alimony'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Income Out Of Renting Or Leasing'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Pension'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Pre-Pension'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Old age benefits'
},
{
  _t: 'tradle.SourceOfIncome',
  sourceOfIncome: 'Insurance Policy / Pension (Out Of Insurance)'
},
{
  _t: 'tradle.KindOfEngagement',
  kindOfEngagement: 'Fulltime Employee'
},
{
  _t: 'tradle.KindOfEngagement',
  kindOfEngagement: 'Temporary Employment'
},
{
  _t: 'tradle.KindOfEngagement',
  kindOfEngagement: 'Flex Encome'
},
{
  _t: "tradle.KindOfConstruction",
  kindOfConstruction: "Existing house"
},
{
  _t: "tradle.KindOfConstruction",
  kindOfConstruction: "New house"
},
{
  _t: "tradle.KindOfConstruction",
  kindOfConstruction: "Build it your self"
},
{
  _t: "tradle.KindOfHouse",
  kindOfHouse: "Detached"
},
{
  _t: "tradle.KindOfHouse",
  kindOfHouse: "Semi-Detached"
},
{
  _t: "tradle.KindOfHouse",
  kindOfHouse: "Terraced house"
},
{
  _t: "tradle.KindOfHouse",
  kindOfHouse: "Appartment"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Partner alimony"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Revolving Credit"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Personal Loan"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Overdraw"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Credit card"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Partner alimony"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Shopping credit"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Private Loan"
},
{
  _t: "tradle.KindOfObligation",
  kindOfObligation: "Study Loan"
},
{
  _t: "tradle.PaymentPeriod",
  paymentPeriod: "Monthly"
},
{
  _t: "tradle.PaymentPeriod",
  paymentPeriod: "Quarterly"
},
{
  _t: "tradle.PaymentPeriod",
  paymentPeriod: "Half Yearly"
},
{
  _t: "tradle.PaymentPeriod",
  paymentPeriod: "Yearly"
},
{
  _t: "tradle.EnergyLabel",
  energyLabel: "A"
},
{
  _t: "tradle.EnergyLabel",
  energyLabel: "B"
},
{
  _t: "tradle.EnergyLabel",
  energyLabel: "C"
},
{
  _t: "tradle.EnergyLabel",
  energyLabel: "D"
},
{
  _t: "tradle.EnergyLabel",
  energyLabel: "E"
},
{
  _t: "tradle.EnergyLabel",
  energyLabel: "F"
},
{
  _t: "tradle.EnergyLabel",
  energyLabel: "G"
},
{
  _t: "tradle.StatusOfInsurance",
  statusOfInsurance: "Existing Insurance"
},
{
  _t: "tradle.StatusOfInsurance",
  statusOfInsurance: "Temporary Coverage"
},
{
  _t: "tradle.StatusOfInsurance",
  statusOfInsurance: "To Be Arranged"
},
{
  _t: 'tradle.PurposeOfMortgageLoan',
  purpose: 'Buy your first home'
},

{
  _t: 'tradle.PurposeOfMortgageLoan',
  purpose: 'Move home'
},
{
  _t: 'tradle.PurposeOfMortgageLoan',
  purpose: 'Find a new mortgage deal'
},

{
  _t: 'tradle.PurposeOfMortgageLoan',
  purpose: 'Buying to let'
},
{
  _t: 'tradle.PurposeOfMortgageLoan',
  purpose: 'Borrowing more'
},
{
  _t: 'tradle.Language',
  language: 'English',
  code: 'en'
},
{
  _t: 'tradle.Language',
  language: 'Dutch',
  code: 'nl'
},
{
  _t: 'tradle.PhoneTypes',
  phoneType: 'Home'
},
{
  _t: 'tradle.PhoneTypes',
  phoneType: 'Mobile',
},
{
  _t: 'tradle.PhoneTypes',
  phoneType: 'Work',
},
{
  _t: 'tradle.FormationType',
  formationType: 'NGO Charity'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Partnership'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Sole Proprietorship or Individual'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Special Purpose Vehicle'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Trust'
},
{
  _t: 'tradle.Regulator',
  regulator: 'U.S. Securities and Exchange Commission'
},
{
  _t: 'tradle.Exchange',
  exchange: 'U.S. NYSE'
}
]

const data = {
  getResources() {
    staticData.forEach(data =>  data.forEach(r => resources.push(r)))
    return resources;
  }
}
module.exports = data;
