/*

1] Primitive Datatypes
    i.   String
    ii.  Number
    iii. Boolean
    iv.  null
    v.   undefined
    vi.  Symbol
    vii. BigInt

*/

const score  = 100
const scoreVal = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 6541351568454185635434315n //bibint

/*
2]Non-Primitive Datatypes (Reference Type)
    i.   Array
    ii.  Objects
    iii. Functions

*/

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Aditya",
    age: 21,
}

const myFunction = function() {
    console.log("Hello World");
}

myFunction();

console.log(typeof myFunction);


/****** Memory ******/

// Stack -> Primitive Datatypes are stored in stack memory. Changes are made in the copy not in actual value.
// Heap -> Non-primitive Datatypes are stored in heap memory. Changes are directly made in the actual value as reference is provided.


let myYoutubeName = "Aditya Dhamale"

let anotherName = myYoutubeName
anotherName = "Adix"

console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let user2 = user1

user2.email = "xyz@gmail.com"

console.log(user1);







