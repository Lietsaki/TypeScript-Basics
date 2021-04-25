"use strict";
let greet = () => {
    console.log('this is a greeting!!!');
};
const add = (a, b, c = 10) => {
    console.log(a + b, c);
};
add(1, 1, 2);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
result = 222;
// const greetUserId = (user: { name: string, uid: StringOrNum }) => {
//   console.log(`${user.name} has a uid of ${user.uid}`)
// }
const greetUserId = (user) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};
// Function signatures
// let sayHello: Function
// Example 1
let sayHello;
sayHello = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    return 1;
};
let logDetails;
logDetails = (ninja) => console.log(ninja);
logDetails({ name: 'Elemao', age: 21 });
