'use strict';

const dictionary = require ('./dictionary');

const FREQ = 4;

const getRepetitions = ( input ) => Math.trunc(input.length / 4);

const execute = ( input ) => {

    const keys = Object.keys( dictionary );
    const repetitions = getRepetitions( input );
    let result = '';
    for ( let i = 0; i <= repetitions; i ++ ){
        result += dictionary[keys[keys.length * Math.random () << 0]] + ' ';
    }
    return result;
};

module.exports.execute = execute;