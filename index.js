'use strict';


const Translator = require ('./translator');

const translate = ( input ) => Translator.execute (input);

module.exports = {
    translate
};
