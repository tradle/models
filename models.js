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
    "forms": [
      "tradle.H1",
      "tradle.H2"
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
      "companyPhone": {
        "type": "string",
        "keyboard": "phone-pad"
      },
      "companyFax": {
        "type": "string",
        "keyboard": "phone-pad"
      },
      "companyEmail": {
        "type": "string",
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
      "isYouCompanyListed": {
        "type": "object",
        "ref": "tradle.Organizations"
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
    "id": "tradle.H1",
    "title": "H1",
    "type": "tradle.Model",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
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
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      }
    },
    "viewCols": [
      "residentialStatus"
    ]
  },
  {
    "id": "tradle.H2",
    "title": "H2",
    "type": "tradle.Model",
    "interfaces": [
      "tradle.Message"
    ],
    "subClassOf": "tradle.Form",
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
      "verifications": {
        "type": "array",
        "readOnly": true,
        "items": {
          "backlink": "document",
          "ref": "tradle.Verification"
        }
      }
    },
    "viewCols": [
      "countryOfBirth",
      "fundAccount"
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
    "sort": "lastMessageTime",
    "plural": "Identities",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      },
      "securityCode": {
        "type": "string",
        "readOnly": true
      },
      "contactInfo": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "contactMethod": {
              "type": "string",
              "displayAs": [
                "type",
                " : ",
                "identifier"
              ],
              "readOnly": true,
              "skipLabel": true
            },
            "identifier": {
              "type": "string",
              "description": "Phone number, IM name, skype id, etc."
            },
            "type": {
              "type": "string",
              "description": "Like \"phone\", \"IM\", \"skype\", \"email\", etc."
            }
          }
        },
        "viewCols": [
          "contactMethod"
        ],
        "required": [
          "identifier",
          "type"
        ]
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
      "pubkeys": {
        "type": "array",
        "readOnly": true,
        "items": {
          "type": "object",
          "properties": {
            "_sig": {
              "type": "string"
            },
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
            "_sig",
            "fingerprint",
            "value"
          ]
        }
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
      "contactInfo",
      "websites",
      "pubkeys",
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
      "pubkeys",
      "organization",
      "securityCode"
    ]
  },
  {
    "id": "tradle.IdentityPublishRequest",
    "title": "Identity Publish Request",
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
    "id": "tradle.LicenseVerification",
    "type": "tradle.Model",
    "title": "License Verification",
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
      "from",
      "message"
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
        "type": "object",
        "ref": "tradle.Currency"
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
          "ref": "tradle.Identity",
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
    "id": "tradle.Savings",
    "title": "Savings",
    "type": "tradle.Model",
    "properties": {
      "_t": {
        "type": "string",
        "readOnly": true
      }
    }
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
    "id": "tradle.UtilityBillVerification",
    "type": "tradle.Model",
    "title": "Utility Bill Verification",
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
        "type": "object",
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