// Topic : Global and Local scope

// var c =300

let a = 300

if (true) {
 let a = 10;
 const b = 20;
 // var c = 30;

 // console.log("inner a", a) // block scope
}

// console.log("outer a",a); // error  // global scope
// console.log(b); // error
// console.log(c);


// browser mai console mai ja kr jab hum global scope dekhte hn to wo alag h 
 // or jab hum apne code environemnet mai check krte hn node ki help se to tab global scope alag hota h
