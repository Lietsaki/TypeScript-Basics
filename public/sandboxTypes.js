"use strict";
// EXPLICIT TYPES
let character;
let age;
let isLoggedIn;
// ARRAYS
let ninjas = [];
ninjas.push('hello');
console.log(ninjas);
// UNION TYPES
let mixed = [];
mixed.push('hey');
let unionType;
unionType = 1;
// OBJECTS
let ninjaOne;
ninjaOne = {
    name: 'Hello',
    age: 20
};
ninjaOne = [1, 2, 3];
let ninjaTwo;
// DYNAMIC (ANY) - Please avoid using this as it is basically TS without its type benefits
let dynamicAge = 11;
dynamicAge = { hey: true };
let anyArray = [];
let anyNinja = {
    name: 'Hello',
    age: 'Hey',
    hadouken: true
};
// anyNinja = ['hello', 'hey'] - Throws type error
