// Ask the user for a number
// Ask the user for a second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

const rlSync = require("readline-sync");
let restart;

do {
  prompt(MESSAGES['welcome']);
  prompt(MESSAGES['num1']);
  let num1 = rlSync.question();
  prompt(MESSAGES['num2']);
  let num2 = rlSync.question();
  prompt(MESSAGES['operation']);
  let operation = rlSync.question();
  num1 = Number(num1);
  num2 = Number(num2);
  
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log('You did not enter a valid number');
  } else if (operation === 'add') {
    console.log(`${num1} + ${num2} = ${(num1 + num2).toFixed(2)}`);
  } else if (operation === 'subtract') {
    console.log(`${num1} - ${num2} = ${(num1 - num2).toFixed(2)}`);
  } else if (operation === 'multiply') {
    console.log(`${num1} * ${num2} = ${(num1 * num2).toFixed(2)}`);
  } else if (operation === 'divide') {
    console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
  } else { 
    console.log('You did not enter a valid operation');
  }
  prompt(MESSAGES['restart']);
  restart = rlSync.question();
} while (restart === 'y');
