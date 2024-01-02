//  array part 2

let arr1 = [1,2,3,4,5];
let arr2 = ["umair","noman","asad"]
let arr3 = [true,false]
// const merge = arr1.push(arr2)
// console.log(arr1) // [ 1, 2, 3, 4, 5, [ 'umair', 'noman', 'asad' ] ]
const merge = arr1.concat(arr2,arr3)
// console.log(merge)


// another way to merge two or more array  using spread operator

const mergeAll = [...arr1,...arr2,...arr3]
// console.log(mergeAll)


let myArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const newArr = myArr.flat(Infinity)
// console.log(myArr)
// console.log(newArr) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// const ask = Array.isArray(myArr)
// console.log(ask) // true



const makeArray = "Umair"


// console.log(Array.isArray(makeArray))


const convertInToArr = Array.from(makeArray)
// console.log(Array.isArray(convertInToArr))
// console.log(convertInToArr)



// is Array.from convert object in to array

const obj = {
 name:"umiar",
 age:21
}

const convertObjectInToArray = Array.from(obj)

console.log(convertObjectInToArray) // [] empty array



// conver some variables in to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

const convertArray = Array.of(score1,score2,score3)
console.log(convertArray)
console.log(Array.isArray(convertArray))