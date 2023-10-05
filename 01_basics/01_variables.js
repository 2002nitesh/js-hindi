// constant declaration only one mathod
const accountId = 144553 //No change in value

// variable declaration two mathod
let accountEmail = "nitesh@google.com"
var accountPassword = "34433"
let accountState;

// not use this but it possible
accountcity = "sikar"

// accountId = 2  // not allowed
// console.log(accountId);

accountEmail = "nk@gmail.com"
accountPassword = "45"
accountcity = "jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// console in form of table
console.table([accountId, accountEmail, accountPassword, accountcity, accountState])