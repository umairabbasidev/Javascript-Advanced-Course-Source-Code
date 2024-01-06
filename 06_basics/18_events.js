// Topic Events

// document.getElementById("owl").onclick = function(){
//  alert("Owl clicked")
// }

// ye bhi use krna theek nahi h .hamin event listner use krne chaye q k wo  hamin propogation ki capabity dete hn

document.getElementById("owl").addEventListener("click", function (e) {
  // console.log(e)
});
// Event propogation
// two context
// one is event bubbling bydefalut, third value in event ,false
// another is event capturing third value in event true

// document.getElementById("images").addEventListener("click",function(e){
// console.log("clicked image ")
// })

// document.getElementById("owl").addEventListener("click",function(e){
//  console.log("clicked owl")
//  e.stopPropagation()
//  },false)

// first show clicked owl
// then show clicked image b/c of event bubbling by defalut behaviour buuble jatehn niche se uper or hum is ko stop bhi kr sakte hn e.stopPropagation()

// jab hum ne true kia to revise ho gia event or is ko khete hn event capturing khete hn

// type, timestamp,defaultPrevented, target, toElement,srcElement,currentTarget
// client x,y ofset,screenX,y ,location
// altkey,ctrlkey,shiftkey,keycode

// kisi bhi default behaviou ko stop krne ke liye  anchor ko stop krne ke liye

// document.getElementById("google").addEventListener("click",(e)=>{
// console.log("Google clicked")
// e.stopPropagation();
// e.preventDefault()  // stop the redirection to google
// })

//  real world task when i click one of the image so it will remove the screen

// document.querySelector("#images").addEventListener("click", function (e) {
//   // console.log(e)
//   // console.log(e.target)
//   // console.log(e.target.parentNode)

//   let removeIt = e.target.parentNode;
//   // removeIt.remove() // working

//   let a = removeIt.parentNode.removeChild(removeIt);
//   console.log(a) // remove method on another approach same as above
//   console.log(removeIt)
// });

document.querySelector("#images").addEventListener("click", (e) => {
  let removeIt = e.target.parentNode;
  
});
