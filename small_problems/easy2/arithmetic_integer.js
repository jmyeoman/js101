

let rlSync = require("readline-sync");
let num1 = rlSync.question('==> Give me the first integer\n');
let num2 = rlSync.question('==> Give me the second integer\n');

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`)
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`)
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`)
console.log(`==> ${num1} / ${num2} = ${num1 / num2}`)
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`)
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`)

