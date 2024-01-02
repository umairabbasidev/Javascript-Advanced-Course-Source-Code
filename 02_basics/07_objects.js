// Topic Objects in js

// singleton
// when object declared using contructor called singleton object
// means ye apne traah ka ek hi object h
// example of object using constructor
// const obj  = Object.create({name:"umair",age:21})
// console.log(obj)

// Declared Objects using object Literal
let mySymbol = Symbol("key1")
// console.log(mySymbol)
const jsUser = {
 [mySymbol]:"mykey1",
  firstname: "umair",
  "full Name":"Muhammad Umair Abbasi",
  age: 21,
  location: "Pakistan",
  email: "umair@google.com",
  isLoggedIn: false,
  lastLoggedInDays: [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thrusady",
    "friday",
    "saturday",
  ],
};

// console.log(jsUser)
// console.log(jsUser.firstname)
// console.log(jsUser["lastLoggedInDays"])
// console.log(jsUser["full Name"])
// console.log(jsUser)
// console.log(jsUser[mySymbol])
// console.log(typeof jsUser[mySymbol])

jsUser.education = "Bscs"
jsUser.skillSet = "React Js Developer"
jsUser.email = "umair@gmail.com"
// console.log(jsUser)

// Object.freeze(jsUser)
// freeze the object


// adding function in bject

jsUser.greeting = function (){
 return ("Hello js user");
}


console.log(jsUser.greeting())

jsUser.jsUserGreetingTwo = function (){
 return `Hello js user, ${this["full Name"]}`
}

console.log(jsUser.jsUserGreetingTwo())