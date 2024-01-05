// Topic : scope level and mini hoisting

function one() {
  const username = "Umair Abbasi";
  function two() {
    const website = "Youtube";
    console.log(username);
  }
  // console.log(website);  // error age chale ga hi nahi q k js line by line work krti h or jab error aya h to two func invove hi nahi howa or jab invove hi ni howa to os ke under ka code bhi execute nahi ho ga

  // two();
}
// one();

// same concept with if and else

if (true) {
  const username = "Umair";

  if (true) {
    const website = "Youtube channel";
    // console.log(username);
  }

  // console.log(website); // eror
}
// console.log(username) // error

// ******** intresting ***********

console.log(addOne(5));  // code run 
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5));  // error Cannot access 'addTwo' before initialization

const addTwo = function (num) {
 return num + 2;
};

