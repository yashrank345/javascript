const accountId = 234 // local variable, not re-assign values
let account_name = "raj" // local variable, re-assign values
var account_password = "2345" // global  variable, re-assign values 

accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])