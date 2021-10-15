function prompt(str) {
  console.log(`=> ${str}`);
}
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to the Calculator!');

const rlSync = require("readline-sync");
prompt('Give me the first number!');
let num1 = rlSync.question();

while (invalidNumber(num1)){
  prompt("Hmm... that doesn't look like a valid number.");
  num1 = rlSync.question();
}
prompt('Give me the second number!');
let num2 = rlSync.question();

while (invalidNumber(num2)){
  prompt("Hmm... that doesn't look like a valid number.");
  num2 = rlSync.question();
}

prompt('What operation do you want to perform?\n1) add 2) subtract 3) multiply 4) divide');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4');
  operation = rlSync.question();
}

num1 = Number(num1);
num2 = Number(num2);

let output ;

switch (operation) {
  case '1':
    output = num1 + num2;
    break;
  case '2':
    output = num1 - num2;
    break;
  case '3':
    output = num1 * num2;
    break;
  case '4':
    break;
}

prompt(`The result is: ${output}`);

