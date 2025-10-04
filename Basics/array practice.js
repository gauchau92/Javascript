const prompt = require("prompt-sync")();

// add item in array by user input
// let arr = [];
// let add = Number.parseInt(prompt("enter a number"));
// arr.push(add);
// console.log(arr);

// add item in array by user input- till 0 entered
let arr = [];
let add;
do {
  add = Number.parseInt(prompt("enter a number"));
  if (add != 0) {
    arr.push(add);
  }
} while (add != 0);
console.log(arr);

// Give new array of no which are divisible by 10
let arr1 = [123, 462, 440, 8970, 1, 100, 50, 87, 97, 89, 22];
let newarr = arr1.filter((ele) => {
  return ele % 10 == 0;
});
console.log(newarr);

// give new array of square of no
let newarr1 = arr1.map((ele) => {
  return ele ** 2;
});
console.log(newarr1);

// Factorial using reduce
let arr2 = [1, 2, 3, 4, 5];
let fact = arr2.reduce((acc, ele) => {
  return acc * ele;
}, 1);
console.log(fact);
