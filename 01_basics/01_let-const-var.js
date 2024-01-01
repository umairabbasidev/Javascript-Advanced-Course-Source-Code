// Topic Concept of variable and diff between let,const,var


const accountId = 144553;
let accountEmail = "umair@goole.com";
var accountPassword = "12345";
accountCity = "Pakistan";
let accountState;


// accountId = 2; // TypeError: Assignment to constant variable.

accountEmail = "umair@youtube.com";
accountPassword = 123;
accountCity = "USA";

console.table([accountEmail,accountPassword,accountCity,accountState])


/*
Prefer not to use var
b/c of issue in block and functional scope
*/