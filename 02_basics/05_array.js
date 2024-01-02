// topic arrays

// const myArr = [1,2,3,4,5]


// console.log(myArr);
// console.log(myArr[0])
// myArr[0]= "Umair"
// console.log(myArr[0])
// console.log()


// another way to declared array

// const anotherArr = new Array(1,2,3,4,5,"umair",true)
// console.log(anotherArr)

//  some important methods of array

const arr1 = [1,2,3,4,5]
// console.log(arr1)

const returnValue1 = arr1.push("umair")
// console.log(arr1) // add values in last
// console.log(returnValue1) // return new length

const returnValue2 = arr1.pop()
// console.log(arr1) // remove value in last
// console.log(returnValue2) // return remove value

const returnValue3 =  arr1.unshift("Hello")
// console.log(arr1) // add values in first 
// console.log(returnValue3) // return new length




const returnValue4 =  arr1.shift("Hello")
// console.log(arr1) // remove value in first
// console.log(returnValue4) // return remove value


const returnValue5 =  arr1.slice(2,4)
// console.log("OriginalArray",arr1)  // not affect the original array and last index not licluded
// console.log("ReturnValueOfSlice",returnValue5)



const returnValue6 =  arr1.splice(1,2,"umair","Abbasi");

// console.log("OriginalArray",arr1) // modified the original array and takes three arugments target,delete, add
// console.log("ReturnValueOfSplice",returnValue6) 



const arr = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

// const returnValue7 =  arr.concat(arr2)
// console.log(returnValue7)

// const returnValue8 = arr.includes(5)
// const returnValue9 = arr.indexOf(5)
// console.log(returnValue8) // true
// console.log(returnValue9) // 4
const returnValue10 = arr.join(arr2)
// console.log()
console.log( typeof returnValue10) // 4 convert it into string



