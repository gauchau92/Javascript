//! Basic Function Anatomy
/*
function functionName(parameters) {
  code block
  return result; // optional
}

calling now
functionName(arguments)

Parameters → placeholders (like variables inside function).
Arguments → actual values you pass.
Return → gives back the result; if missing, function returns undefined.


//*! 1. Function Declaration

function greet(Param) {
  return `Hello ` + Param;
}

//*! 2. Function Expression

const greet = function (Param) {
  return `Hello ` + Param;
};

//*! 3. Arrow Functions (ES6+)
const function = (Param) => {
  code
  return result;
};

//*Super Short Form (when only one statement):-
const greet = (Param) => `Hello` + Param;


//*? Default Parameter

function greet(Param = "Guest") {
  return "Hello " + Param;
}
console.log(greet()); // Hello Guest

*/

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));

const multi = (a, b) => {
  return a * b;
};
console.log(multi(2, 3));

// const multi = (a,b) => a*b; this also works same
//! {} means you must use return.
