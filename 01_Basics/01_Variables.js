// console.log("Hitesh");

const accountId = 132466 //value of the const variable cannot be reinitialised
let accountEmail = "aditya@gmail.com"
var accountPassword = "12345" //scomplete scope
accountCity = "Pune" //we can declare a variable without its datatype btu its not good to do so
let accountSate; //value of this variable would be undefined beacuse nothing is defined

//accountId = 2 //not allowed

accountEmail = "ad@ad.com"
accountPassword = "273623874687"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountSate])


/*

Prefer not to use var
because of issue in block and functional scope

*/