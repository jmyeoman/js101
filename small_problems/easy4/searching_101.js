
const rlSync = require("readline-sync")
let num1 = rlSync.question('Enter the 1st number: ')
let num2 = rlSync.question('Enter the 2nd number: ')
let num3 = rlSync.question('Enter the 3rd number: ')
let num4 = rlSync.question('Enter the 4th number: ')
let num5 = rlSync.question('Enter the 5th number: ')
let lastNum = rlSync.question('Enter the last number: ')

if (lastNum === num1 ||
    lastNum === num2 ||
    lastNum === num3 ||
    lastNum === num4 ||
    lastNum === num5) {
      console.log(`The number ${lastNum} appears in ${num1},${num2},${num3},${num4},${num5}.`);
    } else {
      console.log(`The number ${lastNum} does not appear in ${num1},${num2},${num3},${num4},${num5}.`);
    }

