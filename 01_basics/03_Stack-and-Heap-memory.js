// Stack And Heap Memory concept in js


// Stack (Primitive), Heap(Non-Primitive)
// when stack memory used return copy of that variable means not access the original declared variable
// when Heap memory used return direct reference of that original value like  object and array that declared




// example of Stack memory

let myYoutubename = "hiteshchoudhary";

let anothername = myYoutubename;

anothername = "chaiaurcode"

console.log(myYoutubename) // hiteshchoudhary

console.log(anothername) // chaiaurcode


// example of Heap memory

let userOne = {
 email:"userOne@google.com",
 id:123
}

let userTwo = userOne
userTwo.email = "userOne@Ai.com"

console.log(userOne) // userOne@Ai.com
console.log(userTwo) // userOne@Ai.com b/c both have save reference that is called heap memory