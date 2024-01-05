// Topic IIFE
// why use iife global scope se hamin polution hamin nahi chaye h , plus wo func immdieatly invlovedho jay



(function chai(){

 //  named 
 console.log("DB CONNECTED")
})();

// ___X__X ; ye lagana ho ga

(function chai(){
 console.log("DB CONNECTED s")
})();



((name)=>{
console.log(`Hello${name}`)
})("umair")