let greet = () => {
  console.log('this is a greeting!!!')
}

const add = (a: number, b: number, c: number|string = 10): void => {
  console.log(a + b, c)
}

add(1, 1, 2)

const minus = (a: number, b: number): number => {
  return a - b
}

let result = minus(10, 7)
result = 222


// Type aliases
type StringOrNum = string | number
type objWithName = {
  name: string,
  uid: StringOrNum
}

// const greetUserId = (user: { name: string, uid: StringOrNum }) => {
//   console.log(`${user.name} has a uid of ${user.uid}`)
// }

const greetUserId = (user: objWithName) => {
  console.log(`${user.name} has a uid of ${user.uid}`)
}

// Function signatures
// let sayHello: Function

// Example 1
let sayHello: (a: string, b: string) => void

sayHello = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// Example 2
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
  if(action === 'add') {
    return numOne + numTwo
  }
  return 1
}

// Example 3
type myObjType = {name: string, age: number }
let logDetails: (obj: myObjType) => void

logDetails = (ninja: {name: string, age: number}) => console.log(ninja)
logDetails({name: 'Elemao', age: 21})