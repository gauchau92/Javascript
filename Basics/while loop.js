// Write a while loop that:
// Prompts the user for numbers repeatedly.
// Stops when the user enters 0.
// Prints the average of entered non-zero numbers.

const prompt = require("prompt-sync")();

// let sum = 0;
// let count = 0;
// let n = Number.parseInt(prompt("enter number"), 10);
// while (n != 0) {
//   sum += n;
//   count++;
//   n = Number.parseInt(prompt("enter number"), 10);
// }

// if (count > 0) {
//   console.log("Avg is", sum / count);
// } else {
//   console.log("No numbers entered");
// }

// Do - While loop

let input;
do {
  input = Number.parseInt(prompt("enter a positive number"), 10);
} while (input <= 0);
