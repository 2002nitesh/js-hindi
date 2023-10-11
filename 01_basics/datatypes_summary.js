// javaScript is a Dynamic type language


// two type of data type
// 1. primitive
// 2. non primitive

// Primitive ( call by value data type )
// 7 types: String, Number, Boolean, null (means empty not 0), undefined, Symbol (for make unique use this datatype), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // not equal because that are unique

const bigNumber = 123824938493n


// Reference type ( or Non primitive)
// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "doga"];

// Objects => write in {}  and we have store it into myObj
let myObj = {
    name: "nitesh",
    age: 20,
}

// function
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);

// link for documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3


