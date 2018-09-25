
# Tradle Data Modeling syntax

## Introduction

Tradle software is divided into two parts, the code and the data models. The code uses the data models to display data on the screen, to transmit data, to store data and to search for data. Each data model defines a set of properties. Any object of this model will have properties defined there. Some properties are listed as ‘required’. There are many other annotations, which are used to create rich definition of data and its handling. 

We use Json Schema as a basis for the data modeling language, but Json Schema is not rich enough for our purposes, so we have extended it.

Models are like blueprints. “Resources” are like buildings created from those blueprints, and adhere to the model’s spec.

Below is the reference on data models. See some of the currently used models on github.

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

### required

optional, array of properties. UI enforces this, making sure user enters all of them.

### viewCols

restricts the set of properties that are displayed to the user when the resource is viewed on its own page. The order defines the order in which properties are displayed. 

### editCols

restricts the set of properties that are displayed to the user in edit mode. The order defines the order in which properties are displayed.

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

### description

optional, shown in UI during data entry to give the user an additional hint / instructions

### displayName

optional, helps UI. When a resource is shown in a list or in the nav bar, its title is displayed. Set displayName to true if you want this property to be part of the object’s displayed title.

### pattern

optional, a regular expression (regexp) that defines the pattern for property value validation.

### keyboard

possible values include: default, numeric, email-address, phone-pad

### backlink

defines a one-to-many relationship. Specifies by which property the "many" links to the "one." Many must be *type* array. For an example, take a look at the relationship between tradle.PhotoID and tradle.Verification. In this case, many tradle.Verification resources can link to one tradle.PhotoID
