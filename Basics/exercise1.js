//! Generate random integer between 1 and 100

let randomNum = Math.floor(Math.random() * 100) + 1;
const prompt = require("prompt-sync")();

// Guess the number
console.log("Guess the number between 1 and 100");
console.log("You have total 10 chances to guess!");
let totalChances = 10;

for (let attempt = 1; attempt <= totalChances; attempt++) {
  let input = Number.parseInt(prompt(`Chance ${attempt}: enter number`));

  if (isNaN(input) || input > 100 || input < 1) {
    console.log(" Please enter a valid number between 1 and 100");
    attempt--; // don't count invalid attempt
    continue;
  }
  if (input == randomNum) {
    console.log(`number matched, The number was ${randomNum}`);
    break;
  } else if (input < randomNum) {
    console.log(`Guess is lesser than number`);
  } else {
    console.log(`Guess is higher than number`);
  }
  let remainingAttempts = totalChances - attempt;
  if (remainingAttempts > 0) {
    console.log(`Chances left: ${remainingAttempts}`);
  } else {
    console.log("Chances exceeded! Better luck next time.");
    console.log(`The number was: ${randomNum}`);
  }
}

//!------ While Loop version-----

let randomNum = Math.floor(Math.random() * 100) + 1;
let totalChances = 10;
let remainingChances = totalChances;

console.log("Guess the number between 1 and 100");
console.log(`You have ${totalChances} chances to guess.`);

while (remainingChances > 0) {
  let input = Number.parseInt(
    prompt(
      `Enter a number (Chance ${
        totalChances - remainingChances + 1
      } of ${totalChances}):`
    )
  );

  if (input < 1 || input > 100 || isNaN(input)) {
    console.log("Please enter a valid number between 1 and 100.");
    continue; // doesn't count as a valid attempt
  }

  if (input === randomNum) {
    console.log(
      `Number matched! You guessed it in ${
        totalChances - remainingChances + 1
      } tries.`
    );
    break;
  } else if (input < randomNum) {
    console.log("Your guess is too low.");
  } else {
    console.log("Your guess is too high.");
  }

  remainingChances--;

  if (remainingChances > 0) {
    console.log(`You have ${remainingChances} chances left.`);
  } else {
    console.log("Chances exceeded. Better luck next time!");
    console.log(`The correct number was: ${randomNum}`);
  }
}
