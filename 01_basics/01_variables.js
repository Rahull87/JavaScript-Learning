const accountId = 14453
let accountEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Jammu"
let accountState;

// accountId = 2  // not allowed

accountEmail = "rh@rh.com"
accountPassword = "21212121"
accountCity = "Dehradun"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])