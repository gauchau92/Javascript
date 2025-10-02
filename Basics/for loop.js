for (i = 0; i <= 5; i++) {
  console.log(i);
}

// Programme to add first N natural numbers
const prompt = require("prompt-sync")();

// let sum = 0;
// const n = Number.parseInt(prompt("Enter a number"), 10);

// for (let i = 0; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

//! best version of addition of first N natural numbers

const n = Number.parseInt(prompt("Enter a number"), 10);

if (Number.isNaN(n) || n < 0) {
  console.log("Please enter a valid positive number");
} else {
  const sum = (n * (n + 1)) / 2;
  console.log("sum of first " + n + " natural numbers is " + sum);
}

// Programme to find factorial of numbers

let fact = 1;
const x = Number.parseInt(prompt("Enter a number"), 10);

for (let i = 1; i <= x; i++) {
  fact *= i;
}
console.log(fact);

//* FOR-IN loop

let obj = { a: 10, b: 20 };
for (let key in obj) {
  console.log(key, obj[key]);
}
