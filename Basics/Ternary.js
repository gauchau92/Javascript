let age = 20;
let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

let score = 69;
let grade =
  score >= 90
    ? "A+"
    : score >= 80
    ? "A"
    : score >= 70
    ? "B"
    : score >= 60
    ? "Pass"
    : "fail";

console.log(grade);

let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome User" : "Pl. Login");
