{
  "id": "tradle.Order",
  "title": "Order",
  "subClassOf": "tradle.Form",
  "type": "tradle.Model",
  "properties": {
    "dateSubmitted": {
      "type": "date",
      "set": "Date.now()",
      "readOnly": true
    },
    "number": {
      "type": "string",
      "readOnly": true
    },
    "description": {
      "type": "string"
    },
    "seller": {
      "type": "object",
      "readOnly": true,
      "ref": "tradle.Counterparty"
    },
    "buyer": {
      "type": "object",
      "ref": "tradle.Counterparty"
    },
    "contract": {
      "type": "object",
      "ref": "tradle.Contract"
    },
    "items": {
      "type": "array",
      "items": {
        "ref": "tradle.Product"
      }
    }
  },
  "required": [
    "buyer",
    "items"
  ]
}

