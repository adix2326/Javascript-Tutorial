// string => "" / ''

const myName = "aditya"
const repoCount = 50


console.log(myName + repoCount + " Value");

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}.`);


const gameName = new String('adix')

console.log(myName);
console.log(gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('x'));


const newString = gameName.substring(0,2);

console.log(newString);

const anotherString = gameName.slice(-5, 4);

console.log(anotherString);

const s1 = "    aditya     ";

console.log(s1);

console.log(s1.trim());

console.log(s1.trimEnd());
console.log(s1.trimStart());


const url = "https://aditya.com/aditya%20choudhary";

console.log(url.replace('%20', '-'));



const str = "Aditya-Sandeep-Dhamale";

console.log(str.split('-'));