const accountId = 12345;
let userName = "JohnDoe";
var password = "1234567890";
accountCity = "New York";

let accountMail;

/* 
Always avoid using var as it creates issue with block & functional scopes
Always use let
*/

// accountId = 54321; // This will cause an error- cant re-assign value to const
console.log(accountId); // 12345

// const accountId = 54321; // This will cause an error- cant re-assign value to const
console.log(accountId); // 12345

userName = "gauchau";
password = "9876543210";
accountCity = "bengaluru";

console.table([accountId, userName, password, accountCity, accountMail]);
