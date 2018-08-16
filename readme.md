# emoti-generator

This module translates anything you want to the odor language:
```js
oDOr Odor oDOr OdOR Odor Odor odor 
```
# Usage

Just require the module like any other npm module 
```js
const OdorTranslator = require('odor-translator');
const translate = Index.Translate;
```
or
```js
const { translate } = require ('odor-translator');
```

# Methods

This module has one method:

- translate: translates anything you want to the odor language

# Examples

```js
const { translate } = require ('odor-translator');

const hello = 'Hello my name is Arya';

const odorHello = translate (hello);

console.log(odorHello);
```
Output:
```js
oDoR odor oDOr OdOR Odor Odor
```

```js
const { translate } = require ('odor-translator');

const winterComming = 'The winter is comming';

const odorWinterComming = translate (winterComming);

console.log(odorHello);
```
Output:
```js
oDOr Odor oDOr odor 
```
