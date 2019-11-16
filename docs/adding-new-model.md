### Adding new model 

- When you commit a new model, the commit hook is adding it in models.js file that is located in the root folder. Please check that it was indeed added and if it wasn't, please run:
```
npm run merge
```
- Make sure you installed models in all the packages you have a dependency on them such as **mycloud, web app, mobile app**. 
- After you install the new models you should see the npm-shrinkwrap.json file change if there is npm-shrinkwrap.json file in the package you install the models to.

### Referencing the models

- tradle/models can reference only the models in this package
- tradle/custom-models can reference tradle/models and itself
- tradle/models-corporate-onboarding can reference both tradle/models and tradle/custom-models and itself
- All provider's specific models can reference models from all three mentioned above packages

### Example of adding model in one package and referencing in another
You just added model in **tradle/models**
```
{
  "id": "tradle.SourceType",
  "title": "Source Type",
  "subClassOf": "tradle.Enum",
  "type": "tradle.Model",
  "properties": {
    ...
  },
  "enum": [
  ]
```

and then made a reference to it in the model in **tradle/models-corporate-onboarding** like this:
```
{
  "id": "tradle.BeneficialOwnerCheck",
  "type": "tradle.Model",
  "properties" {
    ...
    "sourceType": {
      "type": "object",
      "ref": "tradle.SourceType",
      "readOnly": true
    }    
  }
  ...
```
make sure you run 
```
npm install -D tradle/models
```
in **tradle/models-corporate-onboarding**

And then 
```
npm install -S tradle/models tradle/models-corporate-onboarding 
```
in mycloud and web app and mobile app

