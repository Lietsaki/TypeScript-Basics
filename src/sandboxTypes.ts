// EXPLICIT TYPES
let character: String;
let age: Number
let isLoggedIn: Boolean

// ARRAYS
let ninjas: string[] = []
ninjas.push('hello')
console.log(ninjas)

// UNION TYPES
let mixed: (string|number)[] = []
mixed.push('hey')

let unionType: string|number 
unionType = 1

// OBJECTS
let ninjaOne: object
ninjaOne = {
    name: 'Hello',
    age: 20
}
ninjaOne = [1,2,3]

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

// DYNAMIC (ANY) - Please avoid using this as it is basically TS without its type benefits
let dynamicAge: any = 11
dynamicAge = { hey: true }

let anyArray: any[] = []

let anyNinja: {
    name: any,
    age: any,
    hadouken: boolean
} = {
    name: 'Hello',
    age: 'Hey',
    hadouken: true
}

// anyNinja = ['hello', 'hey'] - Throws type error