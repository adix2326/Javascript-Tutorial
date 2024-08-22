/*
() --> parenthesis
[] --> brackets
{} --> braces
*/

const { all } = require("axios");

const arr = [0, 1, 2, 3, 4, 5]

console.log(arr[0]);

const myHeroes = ["Shaktiman", "Nagraaj"]

const arr1 = new Array(1, 2, 3, 4)
console.log(arr1[0]);

arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(9)
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr.includes(6));

console.log(arr.indexOf(5));

const newArr = arr.join()

console.log(arr);
console.log(newArr);

//------ slice , splice ------

console.log("A ", arr);

const arr2 = arr.slice(1, 3) // does not amnipulate and include the last index
console.log(arr2);
console.log(arr);

const arr3 = arr.splice(1,3) // manipulates the original array and includes the last index also

console.log(arr3);
console.log(arr);



//==================================================

const marvelHeroes = ["thor","ironman","spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes)

console.log(marvelHeroes.concat(dcHeroes));

console.log(marvelHeroes);

const allHeroes = [...marvelHeroes, ...dcHeroes]  // spread operator

console.log(allHeroes);

const arr4 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr5 = arr4.flat(2)
console.log(arr5)



console.log(Array.isArray("Aaditya"));

console.log(Array.from("Aditya"));
console.log(Array.from({name:"Aditya"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
