module.exports = [
  {
    "id": "tradle.AboutYou",
    "title": "About You",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "residentialStatus": {
        "type": "object",
        "ref": "tradle.ResidentialStatus"
      },
      "maritalStatus": {
        "type": "object",
        "ref": "tradle.MaritalStatus"
      },
      "dependants": {
        "type": "number",
        "description": "How many people who live with you depend on you financially?"
      },
      "nationality": {
        "type": "object",
        "ref": "tradle.Nationality"
      },
      "countryOfBirth": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "taxResidency": {
        "type": "object",
        "description": "Country/countries in which you have tax residency (or been resident of for the past 2 years):",
        "ref": "tradle.Country"
      },
      "fundAccount": {
        "type": "object",
        "description": "How will you fund your account?",
        "ref": "tradle.HowToFund"
      },
      "purposeOfTheAccount": {
        "type": "object",
        "ref": "tradle.PurposeOfTheAccount"
      },
      "phones": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "phoneType": {
              "type": "object",
              "ref": "tradle.PhoneTypes"
            },
            "number": {
              "type": "string",
              "keyboard": "phone-pad"
            }
          }
        },
        "required": [
          "phoneType",
          "number"
        ]
      },
      "emailAddress": {
        "type": "string",
        "pattern": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        "keyboard": "email-address"
      },
      "photos": {
        "type": "array",
        "title": "Photo ID snapshots",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      }
    },
    "viewCols": [
      "residentialStatus",
      "maritalStatus",
      "countryOfBirth",
      "taxResidency",
      "fundAccount",
      "purposeOfTheAccount",
      "phones",
      "emailAddress",
      "photos"
    ]
  },
  {
    "id": "tradle.AdditionalInfo",
    "type": "tradle.Model",
    "title": "Additional Information",
    "interfaces": [
      "tradle.Message"
    ],
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "message": {
        "type": "string",
        "displayName": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "readOnly": true
      },
      "time": {
        "type": "date",
        "readOnly": true,
        "displayName": true
      },
      "document": {
        "ref": "tradle.Message",
        "readOnly": true,
        "type": "object"
      },
      "confirmed": {
        "type": "boolean",
        "readOnly": true
      }
    },
    "required": [
      "to",
      "from",
      "message"
    ],
    "viewCols": [
      "message"
    ]
  },
  {
    "id": "tradle.AutoInsurance",
    "title": "Auto Insurance",
    "type": "tradle.Model",
    "subClassOf": "tradle.FinancialProduct",
    "interfaces": [
      "tradle.Message"
    ],
    "forms": [],
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      },
      "referencedBy": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.SimpleMessage"
      }
    }
  },
  {
    "id": "tradle.Boolean",
    "title": "Boolean",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "boolean": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.BusinessAccount",
    "title": "Business Account",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.BusinessInformation",
      "tradle.SalesData"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.BusinessInformation",
    "title": "Business Information",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "companyName": {
        "type": "string"
      },
      "DBAName": {
        "type": "string",
        "title": "DBA Name"
      },
      "registrationNumber": {
        "type": "string"
      },
      "registrationDate": {
        "type": "date"
      },
      "taxIdNumber": {
        "type": "string",
        "title": "Tax ID Number"
      },
      "officialAddress": {
        "type": "string"
      },
      "actualAddress": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "companyPhone": {
        "type": "string",
        "patterns": {
          "US": "^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
          "UK": "^(((\\+44\\s?\\d{4}|\\(?0\\d{4}\\)?)\\s?\\d{3}\\s?\\d{3})|((\\+44\\s?\\d{3}|\\(?0\\d{3}\\)?)\\s?\\d{3}\\s?\\d{4})|((\\+44\\s?\\d{2}|\\(?0\\d{2}\\)?)\\s?\\d{4}\\s?\\d{4}))(\\s?\\#(\\d{4}|\\d{3}))?$",
          "Netherlands": "(^\\+[0-9]{2}|^\\+[0-9]{2}\\(0\\)|^\\(\\+[0-9]{2}\\)\\(0\\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\\-\\s]{10}$)"
        },
        "keyboard": "phone-pad"
      },
      "companyFax": {
        "type": "string",
        "keyboard": "phone-pad"
      },
      "companyEmail": {
        "type": "string",
        "pattern": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        "keyboard": "email-address"
      },
      "numberOfEmployees": {
        "type": "number"
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      }
    },
    "viewCols": [
      "companyName",
      "registrationNumber",
      "officialAddress",
      "companyEmail"
    ],
    "required": [
      "companyName",
      "registrationNumber",
      "registrationDate",
      "taxIdNumber",
      "officialAddress",
      "actualAddress",
      "companyPhone",
      "companyFax",
      "companyEmail",
      "numberOfEmployees",
      "photos"
    ]
  },
  {
    "id": "tradle.Collateral",
    "title": "Collateral/House",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "street": {
        "type": "string"
      },
      "houseNumber": {
        "type": "number"
      },
      "city": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "postalCode": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "formattedAddress": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "street",
          "houseNumber",
          ",",
          "city",
          ",",
          "region",
          "postalCode"
        ],
        "title": "Address",
        "readOnly": true
      },
      "houseValue": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "kindOfConstruction": {
        "type": "object",
        "ref": "tradle.KindOfConstruction"
      },
      "kindOfHouse": {
        "type": "object",
        "ref": "tradle.KindOfHouse"
      },
      "additionalCosts": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "restructuringCosts": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "leaseholdKind": {
        "type": "object",
        "ref": "tradle.PaymentPeriod"
      },
      "leaseholdAmount": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "yearTheHouseWasBuild": {
        "type": "number",
        "minimum": "1800"
      },
      "rented": {
        "type": "boolean",
        "title": "Rented?"
      },
      "purchasePrice": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "valuedPrice": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "foreclosureValue": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "badMaintenanceAmount": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "energyLabel": {
        "type": "object",
        "ref": "tradle.EnergyLabel"
      }
    },
    "required": [
      "street",
      "houseNumber",
      "city",
      "region",
      "country",
      "postalCode",
      "houseValue",
      "kindOfConstruction",
      "kindOfHouse",
      "restructuringCosts",
      "yearTheHouseWasBuild",
      "purchasePrice",
      "valuedPrice",
      "energyLabel"
    ],
    "viewCols": [
      "formattedAddress",
      "houseValue",
      "kindOfConstruction",
      "kindOfHouse",
      "restructuringCosts",
      "leaseholdKind",
      "leaseholdAmount",
      "yearTheHouseWasBuild",
      "rented",
      "purchasePrice",
      "valuedPrice",
      "foreclosureValue",
      "badMaintenanceAmount",
      "energyLabel"
    ]
  },
  {
    "id": "tradle.CommercialProduct",
    "title": "Commercial Product",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "productType": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.ContractType",
    "title": "Contract Type",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "contractType": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.Country",
    "subClassOf": "tradle.Enum",
    "title": "Country",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "country": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "country"
    ]
  },
  {
    "id": "tradle.CreditCards",
    "type": "tradle.Model",
    "title": "Credit Cards",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      }
    }
  },
  {
    "id": "tradle.Currency",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "currency": {
        "type": "string"
      },
      "symbol": {
        "type": "string"
      }
    },
    "required": [
      "currency"
    ]
  },
  {
    "id": "tradle.CurrentAccount",
    "type": "tradle.Model",
    "title": "Current Account",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney",
      "tradle.UtilityBillVerification"
    ],
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "productType": {
        "type": "string",
        "readOnly": true,
        "displayName": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "accountWith": {
        "type": "object",
        "readOnly": true,
        "displayName": true,
        "ref": "tradle.Organization"
      },
      "residentialStatus": {
        "type": "object",
        "ref": "tradle.ResidentialStatus"
      },
      "maritalStatus": {
        "type": "object",
        "ref": "tradle.MaritalStatus"
      },
      "dependants": {
        "type": "number",
        "description": "How many people who live with you depend on you financially?"
      },
      "nationality": {
        "type": "object",
        "ref": "tradle.Nationality"
      },
      "inUKFrom": {
        "type": "date",
        "description": "When did you arrive in the UK?",
        "title": "In UK from"
      },
      "countryOfBirth": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "taxResidency": {
        "type": "object",
        "description": "Country/countries in which you have tax residency (or been resident of for the past 2 years):",
        "ref": "tradle.Country"
      },
      "fundAccount": {
        "type": "object",
        "description": "How will you fund your account?",
        "ref": "tradle.HowToFund"
      },
      "purposeOfTheAccount": {
        "type": "object",
        "ref": "tradle.PurposeOfTheAccount"
      },
      "phones": {
        "type": "array",
        "items": {
          "type": "string",
          "properties": {
            "phoneType": {
              "type": "string",
              "ref": "tradle.PhoneTypes"
            },
            "number": {
              "type": "string",
              "keyboard": "phone-pad"
            }
          }
        },
        "required": [
          "phoneType",
          "number"
        ]
      },
      "emailAddress": {
        "type": "string",
        "keyboard": "email-address"
      },
      "employer": {
        "type": "object",
        "ref": "tradle.Organization"
      },
      "howLongHaveYouWorkedHere": {
        "type": "number",
        "units": "years"
      },
      "monthlyIncome": {
        "type": "object",
        "ref": "tradle.Money"
      }
    }
  },
  {
    "id": "tradle.CustomerIdentification",
    "title": "Customer identification",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "contactsIntroducingCompany": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "object",
              "ref": "tradle.Identity",
              "skipLabel": true
            },
            "email": {
              "type": "string",
              "keyboard": "email-address"
            },
            "phone": {
              "type": "string",
              "keyboard": "phone-pad"
            }
          }
        }
      },
      "introducedParentCompany": {
        "type": "object",
        "ref": "tradle.Organization",
        "title": "Introduced Parent Company (legally registered name of entity) "
      },
      "accountName": {
        "type": "string",
        "title": "Account name"
      },
      "officeAddress": {
        "type": "string"
      },
      "countryOfOrigin": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "contactPerson": {
        "type": "object",
        "ref": "tradle.Identity"
      },
      "isYourCompanyListed": {
        "type": "object",
        "ref": "tradle.Organization"
      },
      "stockExchange": {
        "type": "object",
        "ref": "tradle.StockExchange",
        "description": "Stock exchange at which your company is listed"
      }
    }
  },
  {
    "id": "tradle.CustomerWaiting",
    "title": "Customer waiting",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "message": {
        "type": "string"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "welcome": {
        "type": "boolean",
        "readOnly": true
      }
    },
    "viewCols": [
      "message"
    ],
    "required": []
  },
  {
    "id": "tradle.LoanTypes",
    "title": "Loan Types",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "sort": "name",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "loanType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "status"
    ]
  },
  {
    "id": "tradle.EducationNL",
    "title": "Education",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "education": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "education"
    ]
  },
  {
    "id": "tradle.EnergyLabel",
    "title": "Energy Label",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "energyLabel": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.Enum",
    "title": "Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      }
    }
  },
  {
    "id": "tradle.FinancialProduct",
    "type": "tradle.Model",
    "title": "Financial Product",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "organization": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Organization"
      }
    },
    "viewCols": [
      "_t",
      "organization"
    ]
  },
  {
    "id": "tradle.ForgetMe",
    "title": "Forget Me",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "message": {
        "type": "string"
      }
    },
    "viewCols": [
      "message"
    ],
    "required": []
  },
  {
    "id": "tradle.ForgotYou",
    "title": "Forgot You",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "message": {
        "type": "string"
      }
    },
    "viewCols": [
      "message"
    ],
    "required": []
  },
  {
    "id": "tradle.Form",
    "title": "Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      }
    }
  },
  {
    "id": "tradle.FormError",
    "title": "Form Error",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "message": {
        "type": "string"
      },
      "form": {
        "type": "object",
        "ref": "tradle.Form",
        "readOnly": true
      },
      "prefilled": {
        "type": "object"
      },
      "errors": {
        "type": "array",
        "readOnly": true,
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "error": {
              "type": "string"
            }
          }
        }
      }
    },
    "viewCols": [
      "form",
      "message",
      "errors"
    ],
    "required": [
      "message"
    ]
  },
  {
    "id": "tradle.GuestSessionProof",
    "title": "Guest Session Proof",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "session": {
        "type": "string"
      }
    },
    "viewCols": [
      "form",
      "message",
      "errors"
    ],
    "required": [
      "message"
    ]
  },
  {
    "id": "tradle.HealthInsurance",
    "title": "Health Insurance",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.HomeImprovement",
    "title": "Home Improvement",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney",
      "tradle.MortgageLoanDetail"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.HomeInsurance",
    "title": "Home Insurance",
    "type": "tradle.Model",
    "subClassOf": "tradle.FinancialProduct",
    "interfaces": [
      "tradle.Message"
    ],
    "forms": [
      "tradle.AboutYou",
      "tradle.PropertyInformation"
    ],
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      },
      "referencedBy": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.SimpleMessage"
      }
    }
  },
  {
    "id": "tradle.HowToFund",
    "title": "How To Fund",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "howToFund": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "howToFund"
    ]
  },
  {
    "id": "tradle.IDCardType",
    "title": "ID Card",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "idCardType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "phoneType"
    ]
  },
  {
    "id": "tradle.ISAs",
    "title": "ISAs",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      }
    }
  },
  {
    "id": "tradle.Identity",
    "type": "tradle.Model",
    "title": "Identity",
    "plural": "Identities",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "pubkeys": {
        "type": "array",
        "readOnly": true,
        "items": {
          "type": "object",
          "properties": {
            "curve": {
              "type": "string"
            },
            "fingerprint": {
              "type": "string"
            },
            "label": {
              "type": "string"
            },
            "networkName": {
              "type": "string"
            },
            "purpose": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "value": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "fingerprint",
            "value"
          ]
        }
      }
    },
    "required": [
      "pubkeys"
    ]
  },
  {
    "id": "tradle.IdentityPublishRequest",
    "title": "Identity Publish Request",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "identity": {
        "type": "object",
        "ref": "tradle.Identity"
      }
    },
    "viewCols": [
      "identity"
    ]
  },
  {
    "id": "tradle.IncomeProtectionInsurance",
    "title": "Income Protection Insurance",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.Income",
    "title": "Income",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "sourceOfIncome": {
        "type": "object",
        "ref": "tradle.SourceOfIncome"
      },
      "nameOfEmployer": {
        "type": "string"
      },
      "residenceOfEmployer": {
        "type": "string"
      },
      "occupation": {
        "type": "string"
      },
      "kindOfEngagement": {
        "type": "object",
        "ref": "tradle.KindOfEngagement"
      },
      "startDate": {
        "type": "date"
      },
      "yearsOfSelfEmployment": {
        "type": "number"
      },
      "grossYearlyIncome": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "holidayMoney": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "provisionalIncome": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "additionalMonthOfPayment": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "irregularityCompensation": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "overtimeCompensation": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "bonus": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "totalIncome": {
        "type": "object",
        "ref": "tradle.Money"
      }
    },
    "required": [
      "sourceOfIncome",
      "nameOfEmployer",
      "residenceOfEmployer",
      "startDate",
      "kindOfEngagement",
      "grossYearlyIncome"
    ],
    "viewCols": [
      "sourceOfIncome",
      "nameOfEmployer",
      "residenceOfEmployer",
      "startDate",
      "kindOfEngagement",
      "grossYearlyIncome",
      "holidayMoney",
      "provisionalIncome",
      "additionalMonthOfPayment",
      "overtimeCompensation",
      "bonus",
      "totalIncome"
    ]
  },
  {
    "id": "tradle.InsuranceInfo",
    "title": "Insurance Information",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "insuredAmount": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "typeOfCoverage": {
        "type": "object",
        "ref": "tradle.TypeOfCoverage"
      },
      "insuranceFee": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "startDate": {
        "type": "date"
      },
      "endDate": {
        "type": "date"
      },
      "insurancePolicyNumber": {
        "type": "string",
        "maxLength": 11
      },
      "policyHolder": {
        "type": "object",
        "ref": "tradle.Identity"
      },
      "insured": {
        "type": "string",
        "title": "Insured person or object"
      },
      "beneficiary": {
        "type": "boolean"
      },
      "pledge": {
        "type": "boolean"
      },
      "pledgedTo": {
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.InterestType",
    "title": "Interest Type",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "sort": "name",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "interestType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "status"
    ]
  },
  {
    "id": "tradle.Investments",
    "title": "Investments",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "accountWith": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Organization"
      }
    }
  },
  {
    "id": "tradle.JumboMortgage",
    "title": "Jumbo Mortgage",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney",
      "tradle.MortgageLoanDetail"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.KindOfConstruction",
    "title": "Kind Of Construction",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "kindOfConstruction": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.KindOfEngagement",
    "title": "Kind Of Engagement",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "kindOfEngagement": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.KindOfHouse",
    "title": "Kind Of House",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "kindOfHouse": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.KindOfInsurance",
    "title": "Kind Of Insurance",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "kindOfInsurance": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.KindOfObligation",
    "title": "Kind of Obligation",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "kindOfObligation": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.Language",
    "subClassOf": "tradle.Enum",
    "title": "Language",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "language": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "language"
    ]
  },
  {
    "id": "tradle.LicenseVerification",
    "type": "tradle.Model",
    "title": "License Verification",
    "subClassOf": "tradle.Form",
    "interfaces": [
      "tradle.Message"
    ],
    "style": {
      "backgroundColor": "#EBE1FA"
    },
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "licenseNumber": {
        "type": "number",
        "maxLength": 8,
        "displayName": true
      },
      "surname": {
        "type": "string"
      },
      "givenName": {
        "type": "string"
      },
      "dateOfBirth": {
        "type": "date"
      },
      "dateOfIssue": {
        "type": "date"
      },
      "dateOfExpiry": {
        "type": "date",
        "displayName": true
      },
      "issuingAuthority": {
        "type": "string"
      },
      "holderAddress": {
        "type": "string"
      },
      "entitlementCategories": {
        "type": "string"
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "displayName": true,
        "readOnly": true
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "photos": {
        "type": "array",
        "title": "Document Snapshots",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      },
      "blockchainUrl": {
        "type": "string",
        "readOnly": true
      },
      "transactionHash": {
        "readOnly": true,
        "type": "string"
      },
      "additionalInfo": {
        "type": "array",
        "items": {
          "ref": "tradle.AdditionalInfo",
          "backlink": "document"
        }
      }
    },
    "required": [
      "to",
      "from",
      "photos",
      "licenseNumber",
      "surname",
      "givenName",
      "dateOfBirth",
      "dateOfIssue",
      "dateOfExpiry",
      "issuingAuthority",
      "holderAddress",
      "entitlementCategories"
    ],
    "gridCols": [
      "from",
      "licenseNumber",
      "dateOfExpiry",
      "time"
    ],
    "viewCols": [
      "photos",
      "licenseNumber",
      "surname",
      "givenName",
      "dateOfBirth",
      "dateOfIssue",
      "dateOfExpiry",
      "issuingAuthority",
      "holderAddress",
      "entitlementCategories",
      "verifications",
      "additionalInfo"
    ]
  },
  {
    "id": "tradle.LifeInsurance",
    "interfaces": [
      "tradle.Message"
    ],
    "title": "Life Insurance",
    "type": "tradle.Model",
    "subClassOf": "tradle.FinancialProduct",
    "forms": [
      "tradle.PersonalInfo",
      "tradle.ORV"
    ],
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.ORV",
    "title": "ORV - Life Insurance",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "startDate": {
        "type": "date"
      },
      "endDate": {
        "type": "date"
      },
      "insuredAmount": {
        "type": "object",
        "ref": "tradle.Money",
        "description": "Insured amount at date insurance starts"
      },
      "typeOfCoverage": {
        "type": "object",
        "ref": "tradle.TypeOfCoverage"
      },
      "policyHolder": {
        "type": "object",
        "ref": "tradle.PersonalInfo",
        "allowToAdd": true
      },
      "insuredPersons": {
        "type": "array",
        "allowToAdd": true,
        "items": {
          "type": "object",
          "ref": "tradle.PersonalInfo"
        }
      },
      "beneficiary": {
        "type": "string",
        "defaultValue": "Standard"
      },
      "nonSmokersTariff": {
        "type": "boolean",
        "description": "Non-smokers tariff (did not smoke for more than 2 years)",
        "title": "Non-smokers tariff"
      },
      "bankAccountNumber": {
        "type": "string"
      }
    },
    "required": [
      "startDate",
      "endDate",
      "insuredAmount",
      "policyHolder",
      "insuredPersons",
      "beneficiary",
      "nonSmokersTariff",
      "bankAccountNumber"
    ],
    "viewCols": [
      "startDate",
      "endDate",
      "insuredAmount",
      "policyHolder",
      "insuredPersons",
      "beneficiary",
      "nonSmokersTariff",
      "bankAccountNumber"
    ]
  },
  {
    "id": "tradle.Loan",
    "title": "Loan",
    "type": "tradle.Model",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "accountWith": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Organization"
      }
    }
  },
  {
    "id": "tradle.LoanPart",
    "title": "Loan Part",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "amount": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "interestType": {
        "type": "object",
        "ref": "tradle.InterestType"
      },
      "interestPercentage": {
        "type": "number",
        "units": "%",
        "min": "0",
        "max": "100"
      },
      "monthlyPayment": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "monthlyPremium": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "repaymentType": {
        "type": "object",
        "ref": "tradle.RepaymentType"
      },
      "loanPartID": {
        "type": "string",
        "title": "Loan Part ID"
      },
      "duration": {
        "type": "number"
      }
    },
    "required": [
      "amount",
      "repaymentType",
      "interestType",
      "interestPercentage",
      "monthlyPremium",
      "monthlyPayment",
      "duration"
    ],
    "viewCols": [
      "amount",
      "repaymentType",
      "interestType",
      "interestPercentage",
      "monthlyPayment",
      "monthlyPremium",
      "duration",
      "loanPartID"
    ]
  },
  {
    "id": "tradle.LoanTypes",
    "title": "Loan Types",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "sort": "name",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "loanType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "status"
    ]
  },
  {
    "id": "tradle.MaritalStatus",
    "title": "Marital Status",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "status": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "status"
    ]
  },
  {
    "id": "tradle.Message",
    "type": "tradle.Model",
    "title": "Message",
    "isInterface": true,
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "message": {
        "type": "string",
        "displayName": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "displayName": true
      },
      "time": {
        "type": "date",
        "readOnly": true,
        "displayName": true
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      },
      "relatedTo": {
        "type": "object",
        "ref": "tradle.Message"
      }
    },
    "required": [
      "to",
      "from"
    ],
    "viewCols": [
      "message"
    ]
  },
  {
    "id": "tradle.Money",
    "type": "tradle.Model",
    "inlined": true,
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "value": {
        "type": "number"
      },
      "currency": {
        "type": "enum",
        "oneOf": [
          {
            "USD": "$"
          },
          {
            "GBR": "£"
          },
          {
            "EUR": "€"
          }
        ]
      }
    },
    "required": [
      "value",
      "currency"
    ]
  },
  {
    "id": "tradle.Mortgage",
    "title": "Mortgage",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney",
      "tradle.MortgageLoanDetail"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.MortgageDetail",
    "title": "Mortgage Detail",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "loanType": {
        "type": "object",
        "ref": "tradle.LoanTypes"
      },
      "applicationDate": {
        "type": "date"
      },
      "startMortgageDate": {
        "type": "date"
      },
      "commercialProduct": {
        "type": "object",
        "title": "Product",
        "ref": "tradle.CommercialProduct"
      },
      "mortgageGuarantee": {
        "type": "string"
      },
      "totalAmount": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "mortgageNumber": {
        "type": "string"
      },
      "intermediary": {
        "type": "string"
      },
      "notary": {
        "type": "string"
      },
      "duration": {
        "type": "number"
      }
    },
    "required": [
      "loanType",
      "mortgageAmount",
      "commercialProduct"
    ],
    "viewCols": [
      "loanType",
      "applicationDate",
      "mortgageAmount",
      "commercialProduct",
      "mortgageNumber",
      "mortgageGuarantee",
      "notary",
      "intermediary",
      "duration"
    ]
  },
  {
    "id": "tradle.MortgageLoanDetail",
    "title": "Mortgage Loan Details",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "subClassOf": "tradle.Form",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "purposeOfMortgageLoan": {
        "type": "object",
        "ref": "tradle.PurposeOfMortgageLoan"
      },
      "totalAmountRequired": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "totalValueOfProperty": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "propertyStreetAddress": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "postalCode": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "formattedAddress": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "propertyStreetAddress",
          ",",
          "city",
          ",",
          "region",
          "postalCode",
          ",  ",
          "country"
        ],
        "title": "Property Address",
        "readOnly": true
      },
      "propertyType": {
        "type": "object",
        "ref": "tradle.PropertyType"
      },
      "sizeOfProperty": {
        "type": "string"
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    },
    "viewCols": [
      "formattedAddress",
      "purposeOfMortgageLoan",
      "totalAmountRequired",
      "totalValueOfProperty",
      "propertyType",
      "sizeOfProperty"
    ]
  },
  {
    "id": "tradle.MortgageProduct",
    "title": "Mortgage",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.PersonalInfo",
      "tradle.SocialSecurityNumber",
      "tradle.Collateral",
      "tradle.Income",
      "tradle.ObligationsDebts",
      "tradle.Posessions",
      "tradle.MortgageDetail",
      "tradle.LoanPart",
      "tradle.OtherCollaterals"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.MotorInsurance",
    "title": "Motor Insurance",
    "type": "tradle.Model",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "accountWith": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Organization"
      }
    }
  },
  {
    "id": "tradle.MyIdentities",
    "type": "tradle.Model",
    "title": "My Identities",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "currentIdentity": {
        "type": "object",
        "ref": "tradle.Identity",
        "readOnly": true
      },
      "allIdentities": {
        "type": "array",
        "items": {
          "type": "object",
          "ref": "tradle.Identity"
        }
      }
    },
    "required": [
      "id"
    ]
  },
  {
    "id": "tradle.Nationality",
    "title": "Nationality",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "nationality": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "nationality"
    ]
  },
  {
    "id": "tradle.NewMessageModel",
    "type": "tradle.Model",
    "title": "New message model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "url": {
        "type": "string",
        "displayName": true
      }
    }
  },
  {
    "id": "tradle.ObligationsDebts",
    "title": "Obligations / Debts",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "kindOfObligation": {
        "type": "object",
        "ref": "tradle.KindOfObligation"
      },
      "creditLimit": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "payment": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "paymentPeriod": {
        "type": "object",
        "ref": "tradle.PaymentPeriod"
      },
      "endDate": {
        "type": "date"
      }
    },
    "required": [
      "kindOfObligation",
      "creditLimit",
      "paymentPeriod"
    ],
    "viewCols": [
      "kindOfObligation",
      "creditLimit",
      "paymentPeriod",
      "endDate"
    ]
  },
  {
    "id": "tradle.Organization",
    "type": "tradle.Model",
    "title": "Organization",
    "sort": "lastMessageTime",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "name": {
        "type": "string",
        "displayName": true
      },
      "email": {
        "type": "string",
        "pattern": "^(([^<>()\\[\\]\\.,;:\\s@\"\\]+(\\.[^<>()\\[\\]\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        "keyboard": "email-address"
      },
      "city": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "postalCode": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "street": {
        "type": "string"
      },
      "formattedAddress": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "street",
          ",",
          "city",
          ",",
          "region",
          "postalCode"
        ],
        "title": "Address",
        "readOnly": true
      },
      "contacts": {
        "type": "array",
        "items": {
          "type": "object",
          "ref": "tradle.Profile",
          "backlink": "organization"
        }
      },
      "lastMessage": {
        "type": "string",
        "style": {
          "color": "#999999",
          "fontSize": 14
        },
        "transient": true
      },
      "lastMessageTime": {
        "type": "date",
        "transient": true
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "title": "Tags via comma"
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "url"
        ]
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "type": "object",
          "ref": "tradle.Verification",
          "backlink": "organization"
        }
      },
      "securityCodes": {
        "type": "array",
        "readOnly": true,
        "items": {
          "type": "object",
          "ref": "tradle.SecurityCode",
          "backlink": "organization"
        }
      },
      "verificationsCount": {
        "type": "number",
        "readOnly": true,
        "skipLabel": true
      },
      "verificationRequests": {
        "type": "array",
        "readOnly": true,
        "items": {
          "type": "object",
          "ref": "tradle.Form",
          "backlink": "organization"
        }
      },
      "products": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "modelName": {
              "type": "tradle.Model"
            }
          }
        }
      }
    },
    "required": [
      "name"
    ],
    "viewCols": [
      "name",
      "photos",
      "verifications"
    ],
    "gridCols": [
      "name",
      "lastMessage",
      "lastMessageTime"
    ],
    "editCols": [
      "name",
      "street",
      "city",
      "region",
      "country"
    ]
  },
  {
    "id": "tradle.OtherCollaterals",
    "title": "Other Collaterals",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "insuranceCompany": {
        "type": "object",
        "ref": "tradle.Organization"
      },
      "statusOfInsurance": {
        "type": "object",
        "ref": "tradle.StatusOfInsurance"
      },
      "kindOfInsurance": {
        "type": "object",
        "ref": "tradle.KindOfInsurance"
      },
      "startDate": {
        "type": "date"
      },
      "yearsOfInsurance": {
        "type": "number"
      },
      "amountToTransfer": {
        "type": "object",
        "ref": "tradle.Money",
        "description": "Amount to be transferred by the insurance company when insurance stops earlier"
      },
      "insuredPersons": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "person": {
              "type": "string"
            }
          }
        },
        "required": [
          "person"
        ]
      },
      "policyHolder": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "person": {
              "type": "string"
            }
          }
        }
      },
      "policyNumber": {
        "type": "string"
      },
      "coverage": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "endDate": {
        "type": "date"
      }
    },
    "required": [
      "insuranceCompany",
      "statusOfInsurance",
      "kindOfInsurance",
      "startDate",
      "endDate",
      "yearsOfInsurance",
      "amountToTransfer",
      "insuredPersons",
      "policyHolder",
      "policyNumber",
      "coverage"
    ],
    "viewCols": [
      "insuranceCompany",
      "statusOfInsurance",
      "kindOfInsurance",
      "startDate",
      "yearsOfInsurance",
      "amountToTransfer",
      "insuredPersons",
      "policyHolder",
      "policyNumber",
      "endDate",
      "coverage"
    ]
  },
  {
    "id": "tradle.PassportVerification",
    "type": "tradle.Model",
    "title": "Passport Verification",
    "interfaces": [
      "tradle.Message"
    ],
    "style": {
      "backgroundColor": "#EBE1FA"
    },
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "codeOfIssuing": {
        "type": "string"
      },
      "passportNumber": {
        "type": "number",
        "maxLength": 9,
        "minLength": 9,
        "displayName": true
      },
      "surname": {
        "type": "string"
      },
      "givenName": {
        "type": "string"
      },
      "nationality": {
        "type": "string"
      },
      "dateOfBirth": {
        "type": "date"
      },
      "sex": {
        "type": "string",
        "oneOf": [
          "Male",
          "Female"
        ]
      },
      "placeOfBirth": {
        "type": "string"
      },
      "dateOfIssue": {
        "type": "date"
      },
      "authority": {
        "type": "string",
        "displayName": true
      },
      "dateOfExpiry": {
        "type": "date",
        "displayName": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity",
        "displayName": true
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "readOnly": true
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      },
      "blockchainUrl": {
        "type": "string",
        "readOnly": true
      },
      "transactionHash": {
        "readOnly": true,
        "type": "string"
      },
      "additionalInfo": {
        "type": "array",
        "items": {
          "ref": "tradle.AdditionalInfo",
          "backlink": "document"
        }
      }
    },
    "required": [
      "to",
      "from",
      "photos",
      "codeOfIssuing",
      "passportNumber",
      "surname",
      "givenName",
      "nationality",
      "dateOfBirth",
      "sex",
      "placeOfBirth",
      "dateOfIssue",
      "authority",
      "dateOfExpiry"
    ],
    "gridCols": [
      "from",
      "passportNumber",
      "dateOfExpiry",
      "time"
    ],
    "viewCols": [
      "codeOfIssuing",
      "passportNumber",
      "surname",
      "givenName",
      "nationality",
      "dateOfBirth",
      "sex",
      "placeOfBirth",
      "dateOfIssue",
      "authority",
      "dateOfExpiry"
    ]
  },
  {
    "id": "tradle.PaymentPeriod",
    "title": "Payment Period",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "paymentPeriod": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.Pension",
    "title": "Pension",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.PersonalInfo",
    "title": "Person",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "name": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "lastName",
          "firstName"
        ],
        "readOnly": true,
        "displayName": true
      },
      "dateOfBirth": {
        "type": "date"
      },
      "placeOfBirth": {
        "type": "string"
      },
      "street": {
        "type": "string"
      },
      "houseNumber": {
        "type": "number"
      },
      "city": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "postalCode": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "address": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "street",
          "houseNumber",
          ",",
          "city",
          ",",
          "region",
          "postalCode"
        ],
        "title": "Address",
        "readOnly": true
      },
      "nationality": {
        "type": "object",
        "ref": "tradle.Nationality"
      },
      "phones": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "phoneType": {
              "type": "object",
              "ref": "tradle.PhoneTypes"
            },
            "number": {
              "type": "string",
              "keyboard": "phone-pad"
            }
          }
        },
        "required": [
          "phoneType",
          "number"
        ]
      },
      "video": {
        "type": "object"
      },
      "emailAddress": {
        "type": "string",
        "pattern": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        "keyboard": "email-address"
      },
      "idCardType": {
        "type": "object",
        "title": "ID Card",
        "ref": "tradle.IDCardType"
      },
      "idCardNumber": {
        "type": "string"
      },
      "maritalStatus": {
        "type": "object",
        "ref": "tradle.MaritalStatus"
      },
      "education": {
        "type": "object",
        "ref": "tradle.EducationNL"
      },
      "photos": {
        "type": "array",
        "title": "Photo ID snapshots",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      }
    },
    "required": [
      "firstName",
      "lastName",
      "dateOfBirth",
      "placeOfBirth",
      "street",
      "houseNumber",
      "city",
      "country",
      "postalCode",
      "region",
      "emailAddress",
      "idCardType",
      "idCardNumber",
      "nationality",
      "maritalStatus",
      "education",
      "nationality",
      "phones"
    ],
    "viewCols": [
      "name",
      "address",
      "dateOfBirth",
      "placeOfBirth",
      "idCardType",
      "idCardNumber",
      "nationality",
      "maritalStatus",
      "education",
      "video",
      "emailAddress",
      "phones",
      "photos"
    ]
  },
  {
    "id": "tradle.PhoneTypes",
    "title": "Phone Types",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "phoneType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "phoneType"
    ]
  },
  {
    "id": "tradle.Posessions",
    "title": "Posessions",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "downPayment": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "photos": {
        "type": "array",
        "title": "Snapshot of the document",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      }
    },
    "required": [
      "downPayment"
    ],
    "viewCols": [
      "downPayment",
      "photos"
    ]
  },
  {
    "id": "tradle.ProductList",
    "title": "Product List",
    "type": "tradle.Model",
    "interfaces": [
      "tradle.Message"
    ],
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "message": {
        "type": "string"
      },
      "list": {
        "type": "array",
        "readOnly": true,
        "items": {
          "type": "object",
          "ref": "tradle.Model"
        }
      }
    },
    "viewCols": [
      "message"
    ]
  },
  {
    "id": "tradle.Profile",
    "type": "tradle.Model",
    "title": "Profile",
    "sort": "lastMessageTime",
    "plural": "Profiles",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "securityCode": {
        "type": "string",
        "readOnly": true
      },
      "city": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "postalCode": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "street": {
        "type": "string"
      },
      "formattedAddress": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "street",
          ",",
          "city",
          ",",
          "region",
          "postalCode"
        ],
        "title": "Address",
        "readOnly": true
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "formatted": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "firstName",
          "lastName"
        ],
        "readOnly": true,
        "displayName": true
      },
      "language": {
        "type": "object",
        "ref": "tradle.Language"
      },
      "middleName": {
        "type": "string"
      },
      "organization": {
        "type": "object",
        "ref": "tradle.Organization"
      },
      "verifiedByMe": {
        "type": "array",
        "allowRoles": "me",
        "icon": "ios-checkmark-empty",
        "items": {
          "readOnly": true,
          "ref": "tradle.Verification",
          "backlink": "from"
        }
      },
      "myProducts": {
        "type": "array",
        "title": "Products",
        "allowRoles": "me",
        "items": {
          "readOnly": true,
          "ref": "tradle.FinancialProduct",
          "backlink": "to"
        }
      },
      "myVerifications": {
        "type": "array",
        "title": "Verifications",
        "allowRoles": "me",
        "icon": "ios-checkmark-empty",
        "items": {
          "readOnly": true,
          "ref": "tradle.Verification",
          "backlink": "to"
        }
      },
      "myRequests": {
        "type": "array",
        "title": "Requests",
        "allowRoles": "me",
        "items": {
          "readOnly": true,
          "ref": "tradle.Form",
          "backlink": "from"
        }
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "title": "Tags via comma"
            },
            "url": {
              "type": "string",
              "readOnly": true
            }
          }
        },
        "required": [
          "url"
        ]
      },
      "summary": {
        "type": "string"
      },
      "lastMessage": {
        "type": "string",
        "style": {
          "color": "#999999",
          "fontSize": 14
        },
        "transient": true
      },
      "lastMessageTime": {
        "type": "date",
        "transient": true
      },
      "websites": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "url": {
              "type": "string"
            }
          }
        },
        "required": [
          "url"
        ]
      }
    },
    "required": [
      "firstName"
    ],
    "groups": {
      "name": [
        "firstName",
        "middleName",
        "lastName",
        "formatted"
      ],
      "location": [
        "city",
        "country",
        "street",
        "region",
        "postalCode",
        "formattedAddress"
      ]
    },
    "gridCols": [
      "formatted",
      "lastMessage",
      "lastMessageTime",
      "organization"
    ],
    "viewCols": [
      "formattedAddress",
      "organization",
      "myVerifications",
      "websites",
      "photos"
    ],
    "editCols": [
      "firstName",
      "lastName",
      "street",
      "city",
      "region",
      "postalCode",
      "country",
      "organization",
      "language"
    ]
  },
  {
    "id": "tradle.PropertyInformation",
    "title": "Property Information",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "subClassOf": "tradle.Form",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "propertyStreetAddress": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "postalCode": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "formattedAddress": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "propertyStreetAddress",
          ",",
          "city",
          ",",
          "region",
          "postalCode",
          ",  ",
          "country"
        ],
        "title": "Property Address",
        "readOnly": true
      },
      "propertyType": {
        "type": "object",
        "ref": "tradle.PropertyTypes"
      },
      "sizeOfProperty": {
        "type": "number",
        "units": "sqft"
      },
      "bedrooms": {
        "type": "number",
        "title": "Number of bedrooms"
      },
      "bathrooms": {
        "type": "number",
        "title": "Number of bathrooms"
      },
      "yearBuilt": {
        "type": "number",
        "title": "Year it was built"
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    },
    "viewCols": [
      "formattedAddress",
      "propertyType",
      "sizeOfProperty",
      "bedrooms",
      "bathrooms",
      "yearBuilt"
    ]
  },
  {
    "id": "tradle.PropertyType",
    "title": "Property Type",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "propertyType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "propertyType"
    ]
  },
  {
    "id": "tradle.PropertyTypes",
    "title": "Property Types",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "propertyType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "propertyType"
    ]
  },
  {
    "id": "tradle.PurposeOfMortgageLoan",
    "title": "Purpose of mortgage loan",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "purpose": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "purpose"
    ]
  },
  {
    "id": "tradle.PurposeOfTheAccount",
    "title": "Purpose Of The Account",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "purpose": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "purpose"
    ]
  },
  {
    "id": "tradle.Refinancing",
    "title": "Refinancing",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney",
      "tradle.MortgageLoanDetail"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.RepaymentType",
    "title": "RepaymentType",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "sort": "name",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "repaymentType": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "status"
    ]
  },
  {
    "id": "tradle.RequestForRepresentative",
    "title": "Request for representative",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "message": {
        "type": "string"
      }
    },
    "viewCols": [
      "message"
    ],
    "required": []
  },
  {
    "id": "tradle.ResidentialStatus",
    "title": "Residential Status",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "sort": "status",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "status": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "status"
    ]
  },
  {
    "id": "tradle.SocialSecurityNumber",
    "title": "Social Security Number",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "socialSecurityNumber": {
        "type": "string"
      },
      "photos": {
        "type": "array",
        "title": "Photo ID snapshots",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      }
    },
    "required": [
      "socialSecurityNumber"
    ],
    "viewCols": [
      "socialSecurityNumber"
    ]
  },
  {
    "id": "tradle.SalaryVerification",
    "type": "tradle.Model",
    "title": "Salary Verification",
    "interfaces": [
      "tradle.Message"
    ],
    "style": {
      "backgroundColor": "#E1FAF9"
    },
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "message": {
        "type": "string",
        "title": "Description",
        "displayName": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "displayName": true,
        "readOnly": true
      },
      "blockchainUrl": {
        "type": "string",
        "readOnly": true
      },
      "transactionHash": {
        "readOnly": true,
        "type": "string"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        },
        "required": [
          "contact"
        ]
      },
      "additionalInfo": {
        "type": "array",
        "items": {
          "ref": "tradle.AdditionalInfo",
          "backlink": "document"
        }
      }
    },
    "required": [
      "to",
      "message",
      "from"
    ],
    "gridCols": [
      "message",
      "time"
    ],
    "viewCols": [
      "message",
      "time",
      "photos",
      "verifications"
    ]
  },
  {
    "id": "tradle.SalesData",
    "title": "Sales Data for last year",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "averageMonthlySales": {
        "type": "object",
        "ref": "tradle.Money",
        "units": "[min - max]",
        "description": "Average monthly sales"
      },
      "averageTxsPerMonth": {
        "type": "number",
        "units": "[min - max]",
        "description": "Average number of transactions per month"
      },
      "averageTxAmount": {
        "type": "object",
        "ref": "tradle.Money",
        "units": "[min - max]",
        "description": "Average amount of a single transaction"
      },
      "numberOfChargebacks": {
        "type": "number"
      },
      "volumeOfChargebacks": {
        "type": "object",
        "ref": "tradle.Money",
        "title": "Total amount of chargebacks"
      },
      "settlementCurrency": {
        "type": "string"
      }
    },
    "viewCols": [
      "averageMonthlySales",
      "averageTxsPerMonth",
      "averageTxAmount",
      "numberOfChargebacks",
      "volumeOfChargebacks"
    ],
    "required": [
      "averageMonthlySales",
      "averageTxsPerMonth",
      "averageTxAmount",
      "numberOfChargebacks",
      "volumeOfChargebacks",
      "settlementCurrency"
    ]
  },
  {
    "id": "tradle.SecurityCode",
    "type": "tradle.Model",
    "title": "Security Code",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "code": {
        "type": "string",
        "readOnly": true
      },
      "organization": {
        "type": "object",
        "ref": "tradle.Organization"
      }
    }
  },
  {
    "id": "tradle.SelfIntroduction",
    "title": "Self introduction",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "identity": {
        "type": "object",
        "ref": "tradle.Identity"
      },
      "message": {
        "type": "string"
      }
    },
    "viewCols": [
      "message",
      "identity"
    ],
    "required": []
  },
  {
    "id": "tradle.Settings",
    "type": "tradle.Model",
    "title": "Settings",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "url": {
        "title": "Server URL",
        "type": "string",
        "keyboard": "url"
      }
    },
    "viewCols": [
      "url"
    ],
    "required": [
      "url"
    ]
  },
  {
    "id": "tradle.SimpleMessage",
    "type": "tradle.Model",
    "title": "Simple Message",
    "autoCreate": true,
    "interfaces": [
      "tradle.Message"
    ],
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "message": {
        "type": "string",
        "displayName": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "displayName": true,
        "readOnly": true
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "welcome": {
        "type": "boolean",
        "readOnly": true
      }
    },
    "required": [
      "to",
      "message",
      "from"
    ],
    "viewCols": [
      "message",
      "time"
    ]
  },
  {
    "id": "tradle.SkillVerification",
    "type": "tradle.Model",
    "title": "Skill Verification",
    "interfaces": [
      "tradle.Message"
    ],
    "style": {
      "backgroundColor": "#FAF9E1"
    },
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "message": {
        "type": "string",
        "title": "Description",
        "displayName": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "displayName": true,
        "readOnly": true
      },
      "blockchainUrl": {
        "type": "string",
        "readOnly": true
      },
      "transactionHash": {
        "readOnly": true,
        "type": "string"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      },
      "additionalInfo": {
        "type": "array",
        "items": {
          "ref": "tradle.AdditionalInfo",
          "backlink": "document"
        }
      }
    },
    "required": [
      "to",
      "message",
      "from"
    ],
    "gridCols": [
      "message",
      "time"
    ],
    "viewCols": [
      "message",
      "time",
      "photos",
      "verifications"
    ]
  },
  {
    "id": "tradle.SourceOfIncome",
    "title": "Source Of Income",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "sourceOfIncome": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "SourceOfIncome"
    ]
  },
  {
    "id": "tradle.StatusOfInsurance",
    "title": "Status Of Insurance",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "statusOfInsurance": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.TermInsurance",
    "title": "Term Insurance",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "forms": [
      "tradle.AboutYou",
      "tradle.YourMoney"
    ],
    "subClassOf": "tradle.FinancialProduct",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    }
  },
  {
    "id": "tradle.Terms",
    "title": "Terms",
    "type": "tradle.Model",
    "subClassOf": "tradle.Enum",
    "sort": "name",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "term": {
        "displayName": true,
        "type": "string"
      }
    },
    "required": [
      "status"
    ]
  },
  {
    "id": "tradle.TypeOfCoverage",
    "title": "Type Of Coverage",
    "subClassOf": "tradle.Enum",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "typeOfCoverage": {
        "displayName": true,
        "type": "string"
      }
    }
  },
  {
    "id": "tradle.UtilityBillVerification",
    "type": "tradle.Model",
    "title": "Utility Bill Verification",
    "subClassOf": "tradle.Form",
    "interfaces": [
      "tradle.Message"
    ],
    "style": {
      "backgroundColor": "#EBE1FA"
    },
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "billDate": {
        "type": "date",
        "displayName": true
      },
      "issuedBy": {
        "type": "string"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "country": {
        "type": "object",
        "ref": "tradle.Country"
      },
      "postalCode": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "street": {
        "type": "string"
      },
      "formattedAddress": {
        "transient": true,
        "type": "string",
        "displayAs": [
          "street",
          ",",
          "city",
          ",",
          "region",
          "postalCode"
        ],
        "title": "Address",
        "readOnly": true
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "ref": "tradle.Identity",
        "displayName": true,
        "readOnly": true
      },
      "blockchainUrl": {
        "type": "string",
        "readOnly": true
      },
      "transactionHash": {
        "readOnly": true,
        "type": "string"
      },
      "time": {
        "type": "date",
        "readOnly": true
      },
      "photos": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "string",
              "skipLabel": true
            },
            "url": {
              "type": "string",
              "readOnly": true
            },
            "width": {
              "type": "number",
              "readOnly": true
            },
            "height": {
              "type": "number",
              "readOnly": true
            }
          }
        },
        "required": [
          "title",
          "url"
        ]
      },
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      }
    },
    "required": [
      "to",
      "from",
      "photos",
      "billDate",
      "issuedBy",
      "firstName",
      "lastName",
      "city",
      "street",
      "postalCode",
      "region"
    ],
    "gridCols": [
      "from",
      "formattedAddress",
      "billDate",
      "time"
    ],
    "viewCols": [
      "issuedBy",
      "formattedAddress",
      "billDate",
      "time"
    ]
  },
  {
    "id": "tradle.Verification",
    "type": "tradle.Model",
    "title": "Verification",
    "interfaces": [
      "tradle.Message"
    ],
    "icon": "ios-checkmark-empty",
    "style": {
      "backgroundColor": "#E7E6F5"
    },
    "autoCreate": true,
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "document": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Message",
        "title": "Verifying document"
      },
      "message": {
        "type": "string",
        "title": "Description",
        "displayName": true
      },
      "to": {
        "type": "object",
        "title": "Owner",
        "ref": "tradle.Identity",
        "displayName": true,
        "readOnly": true
      },
      "from": {
        "type": "object",
        "title": "Verifier",
        "readOnly": true,
        "ref": "tradle.Identity",
        "displayName": true
      },
      "blockchainUrl": {
        "type": "string",
        "readOnly": true
      },
      "transactionHash": {
        "type": "string",
        "readOnly": true
      },
      "time": {
        "type": "date",
        "skipLabel": true,
        "readOnly": true
      },
      "organization": {
        "type": "object",
        "ref": "tradle.Organization"
      }
    },
    "required": [
      "message",
      "to",
      "from",
      "time"
    ],
    "viewCols": [
      "message",
      "time",
      "organization"
    ],
    "gridCols": [
      "message",
      "time",
      "from",
      "document",
      "organization"
    ]
  },
  {
    "id": "tradle.YourMoney",
    "title": "Your Money",
    "interfaces": [
      "tradle.Message"
    ],
    "type": "tradle.Model",
    "subClassOf": "tradle.Form",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "employer": {
        "type": "string"
      },
      "howLongHaveYouWorkedHere": {
        "type": "number",
        "units": "years"
      },
      "monthlyIncome": {
        "type": "object",
        "ref": "tradle.Money"
      },
      "from": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      },
      "to": {
        "type": "object",
        "readOnly": true,
        "ref": "tradle.Identity"
      }
    },
    "viewCols": [
      "employer",
      "monthlyIncome",
      "howLongHaveYouWorkedHere"
    ]
  }
]