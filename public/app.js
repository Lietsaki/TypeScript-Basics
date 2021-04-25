import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// const anchor = document.querySelector('a')!
// console.log(anchor.href)
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    console.log(values);
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const invoiceOne = new Invoice('John', 'Drawing tablet', 250);
const invoiceTwo = new Invoice('Quentin', 'Expensive pen', 300);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(inv => {
    // console.log(inv.client, inv.amount, inv.format())
});
// Interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number
// }
// const me: IsPerson = {
//   name: 'Shaun',
//   age: 30,
//   speak(text: string): void{
//     console.log(text)
//   },
//   spend(amount: number): number {
//     console.log('I spent', amount);
//     return amount;
//   },
// };
// let someone: IsPerson;
// const greetPerson = (person: IsPerson) => {
// console.log(`Hi ${person.name}!`)
// }
// let docOne: HasFormatter
// let docTwo: HasFormatter = new Invoice('Yoshi', 'Art comission', 300)
// No error thrown because the Payment class implements the HasFormatter interface
// docOne = new Payment('Mario', 'Plumbing work', 200)
// let docs: HasFormatter[] = []
// docs.push(docOne, docTwo)
// Generics
// Capture all information from the passed object. Without it, trying to access any
// property from the passed object would result in an error.
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docOne = addUID({name: 'Yoshi', age: 40})
// console.log(docOne.name)
// Generics with interfaces
// 1) Make an interface
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T
// }
// 2) Make objects that uses that interface
// const docThree: Resource<string> = {
//   uid: 1,
//   resourceName: 'person',
//   data: 'hehe'
// }
// const docFour: Resource<(string | number)[]> = {
//   uid: 1,
//   resourceName: 'person',
//   data: ['hehe', 'i am a string', 12]
// }
// console.log(docThree, docFour)
// ENUMS 
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: {title: 'Name of the Wind'}
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: {name: 'Yoshi'}
// }
// console.log(docOne, docTwo)
// TUPLES - Arrays where each position has a fixed type
// Regular array for comparison, the type of each position can be changed as long as that type is present in the array somewhere.
let arr = ['Ryu', 23, true];
arr = [30, false, 'Yoshi'];
// A tuple is defined indicating what type each position should be.
let tuple = ['ahaha', 2, false];
let student;
student = ['Chun-li', 33];
