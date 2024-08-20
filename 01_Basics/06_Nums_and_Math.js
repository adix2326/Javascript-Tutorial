const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));

const num = 1000000
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


// ========================= MATHS ===========================
console.log("========================= MATHS ===========================");
console.log();


console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.sqrt(4));
console.log(Math.max(3,2,4,5,6,7));
console.log(Math.min(3,2,4,5,6,7));

console.log(Math.round(Math.random()*10));
console.log((Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max-min +1)) + min));






