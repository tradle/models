
# Tradle Data Modeling syntax

## Introduction

Tradle software is divided into two parts, the code and the data models. The code uses the data models to display data on the screen, to transmit data, to store data and to search for data. Each data model defines a set of properties. Any object of this model will have properties defined there. Some properties are listed as ‘required’. There are many other annotations, which are used to create rich definition of data and its handling.

We use Json Schema as a basis for the data modeling language, but Json Schema is not rich enough for our purposes, so we have extended it.

Models are like blueprints. “Resources” are like buildings created from those blueprints, and adhere to the model’s spec.

Below is the reference on data models. See some of the currently used models on github.

[Learn more about modelling in Tradle here](DataModelling.md)

To validate your models, use: https://github.com/tradle/validate-model
To validate resources built from models, use: https://github.com/tradle/validate-resource

### Example:

```json
{
  "id": "tradle.Name",
  "title": "Name",
  "subClassOf": "tradle.Form",
  "type": "tradle.Model",
  "properties": {
    "givenName": {
      "title": "Given name(s)",
      "type": "string"
    },
    "surname": {
      "type": "string"
    }
  },
  "required": [
    "givenName",
    "surname"
  ],
  "viewCols": [
    "givenName",
    "surname"
  ]
}
```

A resource built from this model would like this:
```
{
  “_t”: “tradle.Name”, // the model this resource is built from
  “givenName”: “Joe”,
  “surname”: “Schmo”
}
```

## Model Attributes

### properties

list of properties, each separately described. No other properties can be used in the objects of this model.

There is one exception to this rule, a special property that represents json. It allows to include any type of structured data into the object without modeling it upfront, which is very useful for integration purposes.

### type

must be set to ‘tradle.Model’

### id

namespaced id of the model, e.g. ‘tradle.Organization’

### title

how you want the name of this model to appear in UI. This is useful for evolving UI without affecting the code that may be referencing that id.

### subClassOf

optional, specifies this model as an extension of another model. This is when you absolutely need a strong rigidity in the data model. Current models you can subclass:

- tradle.Form: the only way to specify in model that you want it to use for entering structured data.
- tradle.Enum: for when you can list all possible values of the property, e.g. marital status, gender, etc. This mechanism is also used for longer lists, which are predefined, like currencies, countries, etc. See for example, the Country model.
- tradle.FinancialProduct: to define products to put in your channel’s product list. This must have a corresponding model that subclasses tradle.MyProduct. If you have a product com.example.Insurance that subclasses tradle.FinancialProduct, you must have a corresponding model com.example.MyInsurance that subclasses tradle.MyProduct. This is the product certificate the customer receives after their application for a.b.Insurance is approved.
- tradle.MyProduct: see tradle.FinancialProduct
- tradle.Check: subclasses of this represent checks carried out during the application process, via third parties (tradle.TruefaceCheck, tradle.CentrixCheck, etc.), or otherwise.

### interfaces

optional, array of interface models. They are more like markers. We don't enforce/check inheritance of their properties. We might consider it in the future but not at this moment

Example of the Intersection implementor:
```
{
  "id": "tradle.TaggedIssue",
  "type": "tradle.Model",
  "interfaces": [
    "tradle.Intersection"
  ],
  "properties": {
    "tag":  {
      "type": "object",
      "ref": "tradle.Tag"
    },
    "issue": {
      "type": "object",
      "ref": "tradle.Issue"
    }
  },
  ...
}
```
and then in tradle.Issue it'll be referred like this:
```
{
  "id": "tradle.Issue",
  "type": "tradle.Model",
  "subClassOf": "tradle.Form",
  "properties": {
    "tags":  {
      "type": "array",
      "backlink": "issue"
      "items": {
        "ref": "tradle.TaggedIssue"
      }
    },
    ...
  },
  ...
}
```

We have the following interfaces.

- tradle.Document - to better group and display the resources on Profile. They will appear in the Profile's Documents tab. Some of the implementors are: tradle.PhotoID, tradle.Selfie, tradle.MediaSnippet, etc.
- tradle.Item - to display them only in the parent resource. The resources of implementor type can be added on parent resource page
- tradle.Intersection - to make a soft connection between two or more resources or different types. We use it for example here.
- tradle.Singleton - is designed to restrict the creation of resources of a specific type to a single instance for the entire company.

### required

optional, array of properties. Server and UI both are making sure user enters all of them.

### softRequired

optional, array of properties. UI is making sure user enters all of them in case they are displayed in UI. This is different from properties listed in `required`, which must always be set regardless of their visibility.

### viewCols

restricts the set of properties that are displayed to the user when the resource is viewed on its own page. The order defines the order in which properties are displayed.

### gridCols

restricts the set of properties that are displayed to the user when the list of the resources is viewed in grid mode. The order defines the order in which properties are displayed.

### editCols

optional, restricts the set of properties that are displayed to the user in edit mode. The order defines the order in which properties are displayed.

### inlined

optional, set to true on models like Money, whose values are not persisted to storage separately, but only when inlined into another object.

### plural

title that is used in plural contact, like geese, to avoid saying gooses. But if you insist on saying gooses, we love you too.

### icon

optional, displayed in various UI elements accompanying objects of this type. Icon names should be taken from this list: http://ionicframework.com/docs/v2/ionicons/

### notShareable

optional. If true, it prevents the customer from sharing this object with other providers. For example tradle.Selfie is used for authentication in real time, and must always be taken fresh, thus it has nonShareable: true.

### notEditable

optional, objects of this type could not be modified. Once again, tradle.Selfie fits this description

### indexes

optional, to speed up the searches. Check [tradle.Application](https://github.com/tradle/models/blob/master/models/tradle.Application.json) to see how to add them

### internalUse

optional, the resources created from it will never be viewed by customer. For example tradle.credit.CostOfCapital, tradle.ProviderConfiguraiton, etc.

### prerequisiteFor

optional, this is used for two cases (the second one is not encouraged since might be re-designed). In both cases the employee fills out the application for the customer

1. when the employee fills out the application for the customer but needs customer interference in the middle of the application. This way application is split in 2 and **prerequisiteFor** is what prompts these 2 applications to connect.
2. when employee fills out the application starting from a particular resource because this resource serves as a value for the property in one of the forms of the application - this was used once because customer had a particular flow in mind.

the value for this annotation is a model **id** for some `subClassOf: tradle.FinancialProduct`
e.g.
```
{
  "id": "...Quotation",
  "title": "Quotation",
  "subClassOf": "tradle.FinancialProduct",
  ...
}
```
**Case #1**

Annotation is set on `subClassOf: tradle.MyProduct` - which we call the **certificate**.

For example:
```
{
  "id": ...MyQuotation,
  "title": "My Quotation",
  "subClassOf": "tradle.MyProduct",
  "type": "tradle.Model",
  "prerequisiteFor": "...LeaseApplication",
```
where
```
{
  "id": "...LeaseApplication",
  "title": "Lease Application",
  "subClassOf": "tradle.FinancialProduct",
  ...
}
```

The flow is going to be the following:
- Employee fills out the Quotation application for the customer
- Employee send the bundle to customer
- Customer reviews and submits reviewed forms
- Employee approves application
- Certificate is created
- After the approval of Quotation application, the Employee from the Quotation application screen will be able to start the ...LeasingApplication

**Case #2**

For example if you need to pass the `...SomeAsset` (see below) to the Quotation Application to set the it as a property value for one of the forms of Quotation Application
```
{
  "id": "...SomeAsset",
  "title": "Asset",
  "subClassOf": "tradle.Asset",
  "prerequisiteFor": "...Quotation",
}
```

### displayName

optional, to indicate the form the title of which is going to be the name of the Application this form is included in.

## Property Attributes

### title

optional, to specify a name different from the property’s uncamelcased name. Useful for evolving property names without changing all the references to them in the code.

### type

used to specify what values the property can hold: string, number, date, boolean, array, object

### ref

only used for *type* object. This specifies the model for that object, e.g. tradle.Organization

### range

optional, when *type* is string, this specifies the category of values to accept, e.g. email, phone, url. This improves validation, formatting, the keyboard type shown to the user, etc. When *type* is object, and *ref* is tradle.Photo, *range* should be set to photo

### inlined

optional, set to true if the value for this property is a resource rather than a link to a resource. When *inlined* is true, the value will be inlined and will not be stored separately in the database / object storage. Can also used for properties with type array.

### readOnly

optional, set to true if this property cannot be modified by the user

### immutable

optional, once the property value is set, the property can not be modified

### hidden

optional, property is never set from UI


### description

optional, shown in UI during data entry to give the user an additional hint / instructions

### displayName

optional, helps UI. When a resource is shown in a list or in the nav bar, its title is displayed. Set displayName to true if you want this property to be part of the object’s displayed title.

### displayAs

optional, helps UI. Composing the value of the property from properties listed in attribute `group`.
For example:
```
    "resourceTitle": {
      "type": "string",
      "readOnly": true,
      "displayName": true,
      "displayAs": "{1} {2}\n{3}, {4}",
      "group": [
        "firstName",
        "lastName",
        "documentType",
        "country"
      ]
    },
```

### skipLabel

optional, propety label will not show in UI

### units

optional, string, applicable only to numbers and provides a contextual representation for numeric values by appending a specific unit or symbol in the user interface.
```
{
  "monthlyRate": {
    "type": "number",
    "units": "%"
  },
}
```
For example if `monthlyRate` was set to 25 it'll be displayed as `25%`

### format

optional, dates only. Shown in UI in view mode. For example:

```
...
"expirationDate": {
  "type": "date",
  "format": "mmmm, yyyy"
}
```

### numberFormat

optional, numbers only. Shown in UI in view mode. For example:

```
...
"zScore": {
  "type": "number",
  "numberFormat": {
    "maximumFractionDigits": 2
  }
},
```
It has only one property for now: **maximumFractionDigits**. It means to round the value to the value with 2 fraction digits.

### pattern

optional, a regular expression (regexp) that defines the pattern for property value validation.

### keyboard

possible values include: default, numeric, email-address, phone-pad

### backlink

defines a one-to-many relationship. Specifies by which property the "many" links to the "one." Many must be *type* array. For an example, take a look at the relationship between tradle.PhotoID and tradle.Verification. In this case, many tradle.Verification resources can link to one tradle.PhotoID

### showIf/hideIf

optional, a formula that will be executed to make a decision if the property is going to be displayed.

For example:
```
{
  "id": "tradle.XXX",
  "type": "tradle.Model",
  ...
  "properties": {
    "a": {
      "type": "string"
      "showIf": "country"
    },
    "b": {
      "type": "string"
      "hideIf": "country.id.endsWith('US')"
    },
    "country": {
      "type": "object",
      "ref": "tradle.Country"
    },
    ...
 }
```
It means:
  - the property **country** will be displayed
  - when it is set the **a** text field will be displayed - but not before
  - hide property **b** if the country is US, but show for all other countries or until it set

### internalUse

optional, the properties will be viewed only by the employee

### list

optional, helpsUI. This attribute is used in properties that have names ending with `_group` like `personal_group`. This is the property for groupping other properties of the models.
For example:
```
    "personal_group": {
      "type": "string",
      "title": "Personal",
      "readOnly": true,
      "list": [
        "firstName",
        "lastName",
        "dateOfBirth"
      ]
    }

```

### signature

optional, helps UI. Specifies that property of the type `tradle.Photo` is actually a signature. _**Note**_ should have been range
For example:
```
    "signature": {
      "type": "object",
      "ref": "tradle.Photo",
      "inlined": true,
      "skipLabel": true,
      "signature": true
    },
```

### allowPicturesFromLibrary

optional, enables users to upload images directly from their device's photo library

### set

optional, calculates the value using formula
For example:
```
    "netPrice": {...},
    "exchangeRate": {...},
    "vatRate": {...},
    "vat": {
      "type": "object",
      "ref": "tradle.Money",
      "readOnly": true,
      "set": "Math.round(netPrice.value * exchangeRate * vatRate * 100)/100"
    },
```

### hiddenFromClient

optional, properties with this attribute are always hidden from the customer, ensuring that sensitive or complex data is not exposed unnecessarily. It is typically used in models for forms that are prefilled by employees on behalf of the customer. Often used for properties that involve calculations or internal data, such as `exchangeRate` or `vatRate`, which are crucial for determining final values but do not require customer input.

### readOnlyForClients

optional, the property with this attribute can’t be changed by the client

### allowToAdd

optional, it is specifically designed for properties that are a subClassOf tradle.Form. When specified, the value(s) for the property could be either chosen from the list of values of the specified in the model type (in example below it'll be `tradle.PersonalInfo`) or created on-the-fly while filling out the form.

For example:
```
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
 ```

## Attributes for `subClassOf` `tradle.Enum`

### enum
For example:
```
{
  "id": "tradle.IDCardType",
  "subClassOf": "tradle.Enum",
  "type": "tradle.Model",
  "properties": {
    "idCardType": {
      "displayName": true,
      "type": "string"
    }
  },
  "enum": [
    { "id": "passport", "title": "Passport" },
    { "id": "license", "title": "Driver Licence" },
    { "id": "id", "title": "ID Card"},
    { "id": "other", "title": "Other"}
  ]
}
```

## Specific attributes for the properties with `subClassOf` `tradle.Enum` type.

### pin

optional, allows to highlight specific values by placing them at the top of a list. This makes it easier for users to find and select the most commonly chosen options. Usually used in the custom models or lenses created for particular customer.

For example:
```
    "currency": {
      "type": "object",
      "ref": "tradle.Currency",
      "pin": [
        "MXN",
        "USD"
      ]
    },
```

### limit

optional, restricts the available options for a property to a specific subset of values from a  list. Usually used in the custom models or lenses created for particular customer.
For example:
```
    "currency": {
      "type": "object",
      "ref": "tradle.Currency",
      "limit": [
        "MXN",
        "USD"
      ]
    },
```

## Attributes for `subClassOf` `tradle.FinancialProduct`

For example:
```
{
  "id": "tradle.CustomerOnboarding",
  "type": "tradle.Model",
  "title": "Customer Onboarding",
  "subClassOf": "tradle.FinancialProduct",
  "forms": [
    "tradle.PhotoID",
    "tradle.CustomerContactInformation"
  ],
  "multiEntryForms": [
    "tradle.Selfie"
  ],
  "additionalForms": [
    "tradle.PersonalInfo",
    "tradle.Residence"
  ],
  "properties": {}
}
```

### forms

required, array of form IDs, it specifies the sequence in which customers will provide information.

### multiEntryForms

optional, an array of form IDs that specifies which forms can be repeatedly filled. It allows users to fill out the same type of form multiple times until they choose to switch to a different form.

### additionalForms

optional, array of form IDs. It allows employees to request extra information from customers by providing access to a specified set of additional forms.

## Lens

A Lens acts as a filter or customization layer on top of a data model, allowing you to tailor the presentation and behavior of model properties to better suit specific needs or contexts. Lens is usually not generic but specific for a particular provider.

As an example let's create a simple lens for model `tradle.Order` - see [here](https://github.com/tradle/models/blob/master/models/tradle.Order.json)
```
{
  "_t": "tradle.Lens",
  "model": "tradle.Order",
  "id": "[namespace].lens.Order",
  "properties": {
    "dateSubmitted": {
      "title": "Date",
      "displayName": true
    },
    "description": {
      "readOnlyForClients": true
    },
    "contract": {
      "readOnlyForClients": true
    },
    "totalPrice": {},
    "items": {}
  },
  "required": [
    "dateSubmitted"
  ],
  "editCols": [
    "description",
    "contract",
    "items",
    "totalPrice"
  ],
  "viewCols": [
    "dateSubmitted",
    "description",
    "contract",
    "items",
    "totalPrice"
  ],
  "gridCols": [
    "dateSubmitted",
    "description",
    "contract",
    "totalPrice"
  ],
  "hidden": [
    "buyer"
  ]
}
```

Here are the required attributes for the lens.
- `_t`: Always set to `tradle.Lens`
- `model`: Specifies the model for which this lens is created
- `id`: The unique identifier for the lens
- `properties`: The list of properties you want to change behavior of.

**Only properties that are listed in the model can be listed in lens.**

When lens is applied to original `tradle.Order` there going to be the following changes to the model:
- `displayName` changes from `description` to `dateSubmitted` and the `dateSubmitted` will be displayed as `Date`
- `description` and `contract` properties become read-only for clients
- `required` property will change from `items` to `dateSubmitted`
- `hidden` added so that property `buyer` will not be displayed
- `viewCols`, `gridCold` and `editCols` will be added to specify the order in which properties are going to be displayed and limit the ones that will be entered.

These modifications demonstrate how a lens can significantly alter the presentation and behavior of a model without changing its underlying structure.

### Another example would be

```
{
  "_t": "tradle.Lens",
  "model": "tradle.PersonalInfo",
  "id": "[namespace].lens.PersonalInfo",
  "properties": {
    "countryOfBirth": {
      "pin": [
        "US",
        "UK",
        "AR"
      ]
    }
  },
  "name_group": {
    "type": "string",
    "title": "Personal detail",
    "list": [
      "firstName",
      "lastName",
      "emailAddress",
      "countryOfBirth",
      "dateOfBirth",
      "education"
    ]
  },
  "required": [
    "emailAddress"
  ]
}
```

After the lens is applied the three countries listed will show on top of the list of all countries. Also changed the set of required properties and the set of properties that will show in `Personal detail` group.

