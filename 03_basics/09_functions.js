// Topic Functions in js
function sayMyName() {
  console.log("U");
  console.log("M");
  console.log("A");
  console.log("I");
  console.log("R");
}
// sayMyName()

// func add two numbers

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// const result = addTwoNumbers(5,5);
//  console.log("Result:",result)  // undefined

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
// const result = addTwoNumbers(5,5);
//  console.log("Result:",result)  // Result: 10

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
// const result = addTwoNumbers(5,5);
// console.log("Result:",result)  // Result: 10

// note function ko agr return krey gay to hum ose bahir kisi variable mai store kr sakte hn other wise console.log se wo serif print ga return key lagana pre ga

// ____X___X____ function basic

function logginUserMessage(user = "umair") {
 // if (user ===undefined) {
  if (!user) { // same as above
  console.log("Please enter a  username")
  return
 }
 return `${user} just logged in`;

}

// console.log(logginUserMessage(" Muhammad Umair Abbaasi"))
// console.log(logginUserMessage(" Muhammad Uzair Abbaasi"))
// console.log(logginUserMessage(" Muhammad Asadullah Abbaasi"))
const reult = logginUserMessage()
console.log(reult)
