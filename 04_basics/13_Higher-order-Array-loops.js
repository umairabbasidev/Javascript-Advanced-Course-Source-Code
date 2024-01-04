// for of loop

const arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  // console.log(i)
}

// for of loop with string

let str = "Umair";
for (let i of str) {
  // console.log(i)
}

// for of loop with object

// const obj = {
//  name:"Umair",
//  id:123
// }

// for(let i of obj ){
//  console.log(i) //  TypeError: obj is not iterable

// }

// _____X______X______
const map = new Map();
map.set("Js", "javascript");
map.set("py", "python");
map.set("rb", "ruby");

// console.log(map)
for (let [key, value] of map) {
  // console.log(`${key} is short cut for ${value}`)

}


// for in loop 

// for in loop with string

let string = "Umair"
for(let i in string){
 // console.log(string[i])
}

//for in loop with array 
let array = ["umair","uzair","asad"]
for(let i in array){
 // console.log(array[i]) 
}


// for in loop with object 

// const obj = {
//  name:"umair",
//  age:21
// }

// for(let i in obj){
//  console.log(i,obj[i])
// }



// summary of for of,for in loop

// for of loop
// string pr bhi laga sakte hn, array pr bhi laga sakte hn Map pr bhi laga sakte hn map pr ye syntex hota h [key,values] or hamin direct values mil jati hn
// object pr nahi laga sakte hn  

// for in loop
// string pr bhi laga sakte hn, array pr bhi laga sakte hn  or hamin direct values nahi milti milti hn key ,milti hn hum ye arr,str[] syntex laga kr values nikal late hn
// Map pr nahi chale ga

// for each loop

const myArr = ["umair","nomna","asad"]
//  myArr.forEach((item,index,array)=>{
// console.log(item*2)

// })

function printMe(item){
console.log(item)
}

// myArr.forEach(printMe)

const myCoding = [
 {langName:"java",
file:"java"
},
{langName:"python",
file:"py"
},
{langName:"ruby",
file:"ruby"
},
]

myCoding.forEach((item)=>{
 console.log(item.l)
})



































































// const obj = [{ name: "umair", id: 123 }];

// const obj2 = [{ name: "asad", id: 123 }];

// const merge = [...obj,...obj2]

// console.log(merge)

// let c =merge.map((item)=>{
//  return [
//   {
//    ...item
//    }
//  ]
// })

// console.log(c);
