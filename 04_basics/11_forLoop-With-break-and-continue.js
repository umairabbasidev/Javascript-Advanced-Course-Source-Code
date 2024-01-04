// For loop with break and continue in javascript

//  for loop
// let name = "Umair Abbasi";
// for (let i = 0; i < name.length; i++) {
// console.log(name[i])

// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log(`${i} is best number`);
//   }
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//  console.log(`Outer Loop ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Inner Loop ${j} and Outer Loop ${i}`);
//   }
// }

// printig table 1 to 10 using nestestd for loop

// for (let i = 0; i <= 10; i++) {
//   console.log(`Table of ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j} `);
//   }
// }


// loopin for array

// let arr = ["Umair","Noman","Asad","Ali","Usman"]
// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i])
  
// }


// for loop with v=break and continue keyword

for (let i = 1; i <=10; i++) {
  if (i===5) {
    // console.log(`favourite number 5  is detected loop stop`);
    break
  }
  // console.log(i)
}


for (let i = 1; i <=10; i++) {
  if (i===5) {
    console.log(`favourite number 5  is detected`);
    continue
  }
  console.log(i)
  }
