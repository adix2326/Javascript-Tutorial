
// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    firstName: "Aditya",
    "last Name": "Dhamale",
    [mySymbol]: "mykey1",
    age: 21,
    location: "Peth",
    email: "aditya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])


console.log(JsUser["last Name"]) // cannot acces using ---> console.log(JsUser.last Name)

console.log(JsUser[mySymbol]);

JsUser.email = "aditya@xyz.com"

//Object.freeze(JsUser); // after this object cannot be modified (if you tried to modify the object it will not get any error but the changes will not be reflected)

JsUser.email = "aditya@abc.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user !!");
}

JsUser.greeting1 = function(){
    console.log(`Hello Js user, ${this.firstName} !!`);
}

console.log(JsUser.greeting());

console.log(JsUser.greeting1());


//==================================================
console.log("==================================================");
console.log();



// singleton --> it is only created by the constructor
//Object.create()

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "acb@abc.com",
    fullName: {
        userFullName: {
            firstName: "Aditya",
            lastName: "Dhamale"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj4 = {
    5:"a",
    6:"b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

const users = [
    {
        id:1,
        name: "abc"
    },
    {
        id:2,
        name: "xyz"
    }
]

console.log(users);
console.log(users[1].name);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//=================================================

// de-structuring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Aditya"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);



//============== API ===============

//JSON
// {
//     "name": "Aditya",
//     "courseName": "js in hindi",
//     "price": "free"
// }
