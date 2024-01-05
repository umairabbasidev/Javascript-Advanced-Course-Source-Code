// Topic This and arrow function

const user = {
  username: "Umair",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage() // Umair,welcome to website

// user.username = "Noman Gul"
// user.welcomeMessage() // Noman Gul,welcome to website . ye is waja se change howa h q ke hum ne This keyword laga h is ka matlb h jo  bhi current context means values  ho ga ose refer kre ga

// console.log(this) // node mai ye empty object ho ga
// or brwoser mai pura window ka object milta h

// arrow function

function chai() {
  const username = "umair";
  console.log(this); // give some values
  // console.log(this.username) // undefined only give current context in object
}

// chai()

const chai2 = function () {
  const username = "umair";
  console.log(this); // give empty {} object
  console.log(this.username); // same / undefined only give current context in object
};

// chai2()

const myArrFunc = () => {
  const username = "umair";
  console.log(this);
  console.log(this.username);
};

// myArrFunc()

// const addTwo = (num,num2)=>{
// return num + num2  // explicite return
// }

// console.log(addTwo(10,10))

// const addTwo = (num,num2)=> num + num2  // implicite return
// const addTwo = (num,num2)=> (num + num2)  // implicite return

// console.log(addTwo(10,10))

//  and when we return object  syntext is

const addTwo = (num, num2) => ({ name: "Umair" });

// console.log(addTwo());



const arr = [1,2,3,4,5]


arr.forEach((item)=>console.log(item))
