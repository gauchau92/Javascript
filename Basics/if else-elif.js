const prompt = require("prompt-sync")();

let a = prompt("Enter your age");
console.log("type of a, when its taken by prompt is:", typeof a);

a = Number.parseInt(a);
console.log("type of a, when its converted to number is:", typeof a);

if (a < 0 || a > 130) {
  console.log("In-valid age");
} else if (a >= 0 && a < 18) {
  console.log("Driving not allowed");
} else {
  console.log("you can Drive");
}
