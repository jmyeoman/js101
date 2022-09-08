// Problem 
// Given a set of numbers determine if any of the numbers given
// Input number
// Output string
// Algoritm iterate over the numbers to see if it includes any of them

const rlsync = require('readline-sync');

let num1 = rlsync.question('Enter the 1st number: ');
let num2 = rlsync.question('Enter the 2nd number: ');
let num3 = rlsync.question('Enter the 3rd number: ');
let num4 = rlsync.question('Enter the 4th number: ');
let num5 = rlsync.question('Enter the 5th number: ');

let lastNum = rlsync.question('Enter the last number: ');

let arr = [Number(num1), Number(num2), Number(num3), Number(num4), Number(num5)];

if (arr.includes(Number(lastNum))) {
  console.log(`The number ${lastNum} appears in ${arr}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${arr}.`);
}
