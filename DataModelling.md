# Data modeling vs thinking in forms


## Goal

**Reuse**. Smallest possible number of models describing the world. Objects in the world are stable, when we model the world properly, our models are stable. This is good, as 



* **Reality of objects and their relationships** vs unreality of forms
    * Objects are nouns, they represent things and concepts. E.g., a chair, an invoice
    * Objects have properties. Property of an object intrinsically belongs to it, while a field in one form can be moved to another form
    * Objects are in relationships with each other. 
    * Containment relationship. Objects are containers for some other objects. Order and order items. 
    * Orthogonality (different kinds, describe unrelated things). Think about what things are orthogonal to each other. E.g, enum listing (operational, financial, promotional) combines 2 orthogonal things
    * Value of the property must belong. E.g. width can’t have a string value.
* **Subclasses** i.e. a special kind of. E.g. special kind of Check, etc. Rule of thumb: subclass adds new properties.
    * Abstract classes - we never create objects of this class
* **Relationships**
    * interlinking / interconnections: one-to-one (forward links)
    * one-to-many (backlinks)
    * many-to-many (intersection classes)
    * ‘inlined’ arrays of forward links (simplification of many-to-many case)
    * ‘Inlined’ objects
* **Enums** 
This is used to constrain the number of possible values a property might have. Enum is a lightweight object like an inline object, which typically has a string, and ID, and sometimes one extra property. Country is a special type of enum and is an aberration. We don’t create things like this. Instead we create a model, like Asset and a value of a property then is a reference to that object.
* **Behaviors**. We use interfaces to indicate a common behavior / patterns needed for several classes that can’t be generalized. For example, Intersection interface is used in intersection classes (for many to many relationships) and Data Explorer does not show those classes, as they are usually of no interest to users. Note that class can have many interfaces, but only one superclass (this is a common multiple inheritance restriction)
* **Generalize to use common names** (e.g. borough), and adapt to locality with lenses. Lenses can’t add properties, but can hide them, change their title, description, editability and change their required status, pin values for it if enum.
* **Packages**  Examples: tradle.legal, tradle.credit. They group classes that belong to the same domain. It is important as an instrument of managing a large number of classes, and allows us to reason easier. We may not need to be too granular here. We can group leasing, loans, and other types of credit into one package, credit. So the question is - where does this class belong? It can help us model it properly too. E.g. is this a common thing between leasing and loans? If it is, and we model it this way, then we have a lot less changes to do when we introduce loans.
* **Usage**
    * **Consider resource ownership**. E.g. Check and CheckOverride. Check is owned (signed by) the bot. CheckOverride - by employee. We don’t mix diff ownership in one class!
    * **Consider data modification patterns**: data that changes rarely is better to keep separate from the data changed often
    * **Storage limitations** (don’t make a model with too many inline forward pointers) of one record in the database. Replace instead with backlinks which are not limited. Ellen can share an example we discussed with her recently.
* **Modelling and uniqueness of resources**. Some resources need to be unique and a model can ensure that with a number of properties marked unique (although we do not have support for it yet).
* **Common patterns**: think about it: applicant is always present in any application
* **Be humble**. Life is infinitely more complex than our models. We aim to model only things that are relevant for our systems. And we understand that models might need to change and this will require changes in software. This is usually not a problem when we need to add more properties, or add more classes but it is a problem, if we did not capture relationships between objects correctly. So pay attention to relationships above all.
