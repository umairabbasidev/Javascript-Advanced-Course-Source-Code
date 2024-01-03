// Arrow Function

// const calculateCardPrice = (...num1)=>{
// return num1 
// }

// console.log(calculateCardPrice(200,400,500,700,1000))  // [200, 400, 500, 700, 1000]


const calculateCardPrice = (va1,val2,val3,...num1)=>{
 return num1 
 }

// console.log( calculateCardPrice(100,200,300,400,500)) // [400, 500]

// handle objects in function

// const user = {
// username:"Umair",
// price:199
// }

// function handleObject(anyobject){
// console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// handleObject(user)
//  handle object in dirct argument

// function handleObject(user){
// console.log(`username is ${user.username} and price is ${user.price}`)
// }

// handleObject({username:"umair",price:199})



// const arr = ["Umair",1,2,3,4,5]

// function handleArr(anyArr){
// return anyArr[0]
// }
// console.log(handleArr(arr))

//handle array in dirct argument


function handleArr(anyArray){
return anyArray[2]
}

console.log(handleArr(["Umair","Abbasi","Front-End-Developer"]))


