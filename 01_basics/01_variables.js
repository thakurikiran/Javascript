const accountId = 144553
let accountEmail = "shahikiran575@gmail.com"
var accountPassword = "12345"
accountCity = "surkhet"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "kathmandu"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])