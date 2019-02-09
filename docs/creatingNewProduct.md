## Creating new Product model.

### Requirements
- Always is a **subClassOf**  **tradle.FinancialProduct**
- **forms** property should be present and is an array of model IDs. Each model listed in **forms** should be **subClassOf** **tradle.Form**
- each product model has a corresponding model that is a **subClassOf** tradle.MyProduct. 
   - This is a model for the approval of the product application. 
   - When the product application is approved by employee or auto-approved because of some conditions were met the resource of subClassOf tradle.MyProduct is create and represents a badge of approval.
   - The naming convention is very important here. It is derived from your product model name. 
For example Product => MyProduc correspondencet:
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
  ...
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
Index part of the MyProduct shuld be just blindly copied :).


