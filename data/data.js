'use strict'

var resources = [
{
  _t: 'tradle.SecurityCode',
  _z: '04e21cf6dc67f9c5430221031b433e1903ca5975dfd7338f338146a99202c86b',
  code: '1234567',
  organization: {
    id: 'tradle.Organization_71e4b7cd6c11ab7221537275988f113a879029ea',
    title: 'Rabobank'
  }
},
{
  _t: 'tradle.SecurityCode',
  _z: '04e21cf6dc67f9c5430221031b433e1903ca5975dfd7338f338146a99202c87b',
  code: '7654321',
  organization: {
    id: 'tradle.Organization_71e4b7cd6c11ab7221537275988f113a879029ea',
    title: 'Rabobank'
  }
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Benefit Payments'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Bills / Expenses'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Capital Raising ( Scottish Widows Bank )'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Inheritance'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Probate / Executor / Trustee'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Salary / Pension / Other Regular Income'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Savings'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Spending money'
},
{
  _t: 'tradle.PurposeOfTheAccount',
  purpose: 'Student'
},
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
  status:  'Tenant (private)',
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
  _t: 'tradle.MaritalStatus',
  status: 'Single',
},
{
  _t: 'tradle.MaritalStatus',
  status: 'Married',
},
{
  _t: 'tradle.MaritalStatus',
  status:  "Married with prenuptial agreement"
},
{
  _t: 'tradle.MaritalStatus',
  status: 'Civil partnership'
},
{
  _t: 'tradle.MaritalStatus',
  status: 'Living together with agreement'
},
///
{
  _t: 'tradle.EducationNL',
  education: 'Elementary School'
},
{
  _t: 'tradle.EducationNL',
  education: 'High School'
},
{
  _t: 'tradle.EducationNL',
  education: 'Vocational Secondary School (Junior)'  // LBO
},
{
  _t: 'tradle.EducationNL',
  education: 'Vocational Secondary School (Senior)'  // MBO
},
{
  _t: 'tradle.EducationNL',
  education: 'College'                               // HBO
},
{
  _t: 'tradle.EducationNL',
  education: 'University'
},
{
  _t: 'tradle.IDCardType',
  idCardType: 'Passport'
},
{
  _t: 'tradle.IDCardType',
  idCardType: 'ID Card'
},
{
  _t: 'tradle.IDCardType',
  idCardType: 'Driver licence'
},
{
  _t: "tradle.IDCardType",
  idCardType: 'Residence permit'
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
  kindOfHouse:  "Detached"
},
{
  _t: "tradle.KindOfHouse",
  kindOfHouse:  "Semi-Detached"
},
{
  _t: "tradle.KindOfHouse",
  kindOfHouse:  "Terraced house"
},
{
  _t: "tradle.KindOfHouse",
  kindOfHouse:  "Appartment"
},
{ _t: "tradle.MortgageGuarantee",
  mortgageGuarantee: "No"
},
{ _t: "tradle.MortgageGuarantee",
  mortgageGuarantee: "NHG"
},
{ _t: "tradle.MortgageGuarantee",
  mortgageGuarantee: "Gemeente Garantie"
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
  _t: "tradle.TypeOfCoverage",
  typeOfCoverage: "Equal Over Time"
},
{
  _t: "tradle.TypeOfCoverage",
  typeOfCoverage: "Yearly Decreasing"
},
{
  _t: "tradle.TypeOfCoverage",
  typeOfCoverage: "Linearly Decreasing"
},
{
  _t: 'tradle.PropertyType',
  propertyType: 'Freehold'
},
{
  _t: 'tradle.PropertyType',
  propertyType: 'Leasehold'
},
{
  _t: 'tradle.PropertyType',
  propertyType: 'New build or converted properties'
},
{
  _t: 'tradle.PropertyType',
  propertyType: 'Shared equity'
},
{
  _t: 'tradle.PropertyType',
  propertyType: 'Shared ownership'
},
{
  _t: 'tradle.PropertyType',
  propertyType: 'Right to Buy'
},
{
  _t: 'tradle.PropertyType',
  propertyType: 'Buy to let'
},
{
  _t: 'tradle.PropertyTypes',
  propertyType: 'Single Family House'
},
{
  _t: 'tradle.PropertyTypes',
  propertyType: 'Condominium'
},
{
  _t: 'tradle.PropertyTypes',
  propertyType: 'Duplex'
},
{
  _t: 'tradle.PropertyTypes',
  propertyType: 'High Volume Home'
},
{
  _t: 'tradle.PropertyTypes',
  propertyType: 'Vacation Home'
},
{
  _t: 'tradle.PropertyTypes',
  propertyType: 'Farm'
},
{
  _t: 'tradle.PropertyTypes',
  propertyType: 'Land'
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
  _t: 'tradle.HowToFund',
  howToFund: 'Cash',
},
{
  _t: 'tradle.HowToFund',
  howToFund: 'Check',
},
{
  _t: 'tradle.HowToFund',
  howToFund: 'Direct to Bank'
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
  _t: 'tradle.CommercialProduct',
  productType: 'Obvion'
},
{
  _t: 'tradle.CommercialProduct',
  productType: 'Basis'
},
{
  _t: 'tradle.CommercialProduct',
  productType: 'Compact'
},
{
  _t: 'tradle.CommercialProduct',
  productType: 'ABP'
},
{
  _t: 'tradle.RepaymentType',
  repaymentType: 'Annuity'
},
{
  _t: 'tradle.RepaymentType',
  repaymentType: 'Linear'
},
{
  _t: 'tradle.RepaymentType',
  repaymentType: 'Interest Only'
},
{
  _t: 'tradle.LoanTypes',
  loanType: 'New Mortgage'
},
{
  _t: 'tradle.LoanTypes',
  loanType: 'Second Mortgage'
},
{
  _t: 'tradle.LoanTypes',
  loanType: 'Additional Mortgage Within Existing Contract'
},
{
  _t: 'tradle.LoanTypes',
  loanType: 'Coming Form Other Mortgage Supplier'
},
{
  _t: 'tradle.LoanTypes',
  loanType: 'Change Mortgage Construction'
},
{
  _t: 'tradle.InterestType',
  interestType: '30 years fixed'
},
{
  _t: 'tradle.InterestType',
  interestType: '15 years fixed'
},
{
  _t: 'tradle.InterestType',
  interestType: '10 years fixed'
},
{
  _t: 'tradle.InterestType',
  interestType: '5 adjustable'
},
{
  _t: 'tradle.InterestType',
  interestType: 'Variable'
},
{
  _t: 'tradle.ContractType',
  contractType: 'fixed'
},
{
  _t: 'tradle.ContractType',
  contractType: 'self-employed'
},
{
  _t: 'tradle.OwnershipStructure',
  ownershipStructure: 'Sole Proprietorship'
},
{
  _t: 'tradle.OwnershipStructure',
  ownershipStructure: 'Partnership'
},
{
  _t: 'tradle.OwnershipStructure',
  ownershipStructure: 'Limited Partnership'
},
{
  _t: 'tradle.OwnershipStructure',
  ownershipStructure: 'Limited Liability Company (LLC)'
},
{
  _t: 'tradle.OwnershipStructure',
  ownershipStructure: 'Corporation (for-profit)'
},
{
  _t: 'tradle.OwnershipStructure',
  ownershipStructure: 'Nonprofit Corporation'
},
{
  _t: 'tradle.OwnershipStructure',
  ownershipStructure: 'Cooperative'
},
{
  _t: 'tradle.ExemptStatus',
  exemptStatus: 'Exempt'
},
{
  _t: 'tradle.ExemptStatus',
  exemptStatus: 'Non-Exempt'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Corporation'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Foreign Financial Institution'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Fund'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Government'
},
{
  _t: 'tradle.FormationType',
  formationType: 'Investment Advisor'
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
  _t: 'tradle.AddressType',
  addressType: 'Physical'
},
{
  _t: 'tradle.GovernmentIdType',
  governmentIdType: 'U.S. Employee Identification Number'
},
{
  _t: 'tradle.Regulator',
  regulator: 'U.S. Securities and Exchange Commission'
},
{
  _t: 'tradle.Exchange',
  exchange: 'U.S. NYSE'
},
{
  _t: 'tradle.Sex',
  sex: 'Male'
},
{
  _t: 'tradle.Sex',
  sex: 'Female'
},
{
  _t: "tradle.EResidencyApplicationType",
  eResidencyApplicationType: 'First e-Residency application'
},
{
  _t: "tradle.EResidencyApplicationType",
  eResidencyApplicationType: 'Expry of documents'
},
{
  _t: "tradle.EResidencyApplicationType",
  eResidencyApplicationType: 'Data has changed'
},
{
  _t: "tradle.EResidencyApplicationType",
  eResidencyApplicationType: 'Lost, destroyed, stolen'
},
{
  _t: "tradle.EResidencyApplicationType",
  eResidencyApplicationType: 'Unusable'
},

{
  _t: 'tradle.IdentityDocumentType',
  documentType: 'National passport (issued by your country of citizenship)'
},
{
  _t: 'tradle.IdentityDocumentType',
  documentType: 'Other ID document/ID card'
},
{
  _t: 'tradle.IdentityDocumentType',
  documentType: 'Republic of Estonia ID'
},
{
  _t: 'tradle.IdentityDocumentType',
  documentType: 'Foreign passport (not issued by your country of citizenship)'
},

{
  _t: 'tradle.Location',
  location: 'Offices in Estonia'
},
{
  _t: 'tradle.Location',
  location: 'Australia, Canberra'
},
{
  _t: 'tradle.Location',
  location: 'Austia, Vienna'
},
{
  _t: 'tradle.Location',
  location: 'China, Beijing'
},
{
  _t: 'tradle.Location',
  location: 'Canada, Ottava'
},
{
  _t: 'tradle.Location',
  location: 'France, Paris'
},

{
  _t: 'tradle.Location',
  location: 'Latvia, Riga'
},

{
  _t: 'tradle.Location',
  location: 'UK, London'
},

{
  _t: 'tradle.Location',
  location: 'USA, New York'
},

{
  _t: 'tradle.EResidencyMotivation',
  eResidencyMotivation: 'Location independant international business'
},
{
  _t: 'tradle.EResidencyMotivation',
  eResidencyMotivation: 'Bringing business to Estonia'
},
{
  _t: 'tradle.EResidencyMotivation',
  eResidencyMotivation: 'Using the technology of secure authentication'
},
{
  _t: 'tradle.EResidencyMotivation',
  eResidencyMotivation: 'Living in or visiting Estonia'
},
{
  _t: 'tradle.EResidencyMotivation',
  eResidencyMotivation: 'Fan of e-Residency'
},
{
  _t: 'tradle.ResidenceType',
  value: 'Primary Residence'
},
{
  _t: 'tradle.ResidenceType',
  value: 'Second Home'
},
{
  _t: 'tradle.ResidenceType',
  value: 'Investment Property'
},
{
  _t: 'tradle.WealthItemType',
  itemType: 'Inheritance'
},
{
  _t: 'tradle.WealthItemType',
  itemType: 'Securities purchase'
},
{
  _t: 'tradle.WealthItemType',
  itemType: 'Securities sale'
},
{
  _t: 'tradle.WealthItemType',
  itemType: 'Investment'
},
{
  _t: 'tradle.WealthItemType',
  itemType: 'Liquidation'
},
{
  _t: 'tradle.WealthItemType',
  itemType: 'Other'
},
];

var myId;
var data = {
  getResources: function() {
    return resources;
  },
  getMyId: function() {
    return myId
  }
}
module.exports = data;
