## Creating new Product model.

### Requirements

There are two models that represent the product:

1. **subClassOf**  **tradle.FinancialProduct**
   - **forms** property is required and is an array of model IDs. Each model listed in **forms** should be **subClassOf** **tradle.Form**
   - **multiEntryForms** - optional, an array of model IDs that specifies which forms can be repeatedly filled. It allows users to fill out the same type of form multiple times until they choose to switch to a different form.
   - **additionalForms** property is optional, it is same as **forms**. This list of forms is for the Employee or plugin to request more information if there is a need for it.
2. **subClassOf** **tradle.MyProduct**
   - This is a model for the approval of the product application.
   - When the product application is approved by employee or auto-approved because of some conditions were met the resource of subClassOf tradle.MyProduct is create and represents a badge of approval.
   - The naming convention is very important here. It is derived from your product model name.
For example Product => MyProduct correspondence:
       - ab.tradle.RetailKYC => ab.tradle.**My**RetailKYC
ab.tradle.SmeKYC => ab.tradle.**My**SmeKYC

Let's check an almost real example:
```
{
  "id": "ab.tradle.RetailKYC",
  "type": "tradle.Model",
  "title": "Custom Product",
  "subClassOf": "tradle.FinancialProduct",
  "forms": [
    "tradle.PhotoID",
    "tradle.Selfie",
    "tradle.HandSignature"
   },
   "multiEntryForms": [
     "tradle.Residence"
   ],
   "additionalForms": [
     "tradle.PersonalInfo"
   ],
   "properties": []
}
```
MyProduct might have props that are derived from the **forms** of the Product.
They must have the same **name** they have in the Forms they derived from.

```
{
  "id": "tradle.MyRetailKYC",
  "type": "tradle.Model",
  "subClassOf": "tradle.MyProduct",
  "properties": {
    "myProductId": {
      "title": "Retail KYC ID",
      "type": "string"
    },
    "owner": {
      "type": "object",
      "ref": "tradle.Identity"
    },
    "firstName": {    // derived from tradle.PhotoID
       "type": "string"
    },
    "lastName: {    // derived from tradle.PhotoID
       "type": "string"
    },
    "signature": {  // derived from tradle.HandSignature
      "type: "object",
      ...
    },
    "revoked": {
      "type": "boolean"
    }
    ...
  },
  "viewCols": [
     "firstName",
     "lastName",
     "signature"
  ],
  "indexes": [
    {
      "hashKey": "myProductId",
      "rangeKey": "_time"
    },
    {
      "hashKey": "owner._permalink",
      "rangeKey": "_time"
    },
    {
      "hashKey": "_t",
      "rangeKey": "_time"
    },
    {
      "hashKey": "_orgOrAuthor",
      "rangeKey": [
        "_t",
        "_time"
      ]
    }
  ]
}
```
Index part of the MyProduct should be just blindly copied :).

The MyProduct is creates when all forms are submitted and the application is approved. It serves as product certificate.

