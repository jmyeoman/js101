let rlSync = require("readline-sync");
/*
console.log('Please enter an integer greater than 0: ');
let num = parseFloat(rlSync.question());

console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let sumOrProduct = rlSync.question();


function sum(number) {
  let savedSumNum = 0;
  for (let i = 1; i <= number; i++) {
    savedSumNum = savedSumNum + i;
  }
  return savedSumNum
}

function product(number) {
  let savedProductNum = 1;
  for (let i = 1; i <= number; i++) {
    savedProductNum = savedProductNum * i;
  }
  return savedProductNum
}

if (((num % 1) !== 0) || (num < 1)) {
  console.log('You did not enter a valid integer')
} else if (sumOrProduct === 's') {
  console.log(`The sum of the integers between 1 and ${num} is ${sum(num)}.`);
} else if (sumOrProduct === 'p') {
  console.log(`The product of the integers between 1 and ${num} is ${product(num)}.`);
} else {
  console.log('You made an invalid entry')
} */

// If input was an array


console.log('Enter a list of numbers');
let stringOfNums = rlSync.question();
console.log('Enter "s" to compute the sum of the numbers or enter "p" to compute the product of the numbers.');
let arrSumOrProduct = rlSync.question();

  
let arrayOfNumsString = stringOfNums.split(', ')
let arrayOfNums = arrayOfNumsString.map(element => Number(element))

let sumTotal = arrayOfNums.reduce((accumulator, currentValue) => accumulator + currentValue);

let productTotal = arrayOfNums.reduce((accumulator, currentValue) => {
   return accumulator * currentValue;
 }, 1);


let numTest = arrayOfNums.reduce((accumulator, currentValue) => {
    accumulator = accumulator || !Number.isInteger(currentValue);
    return accumulator;
  }, false);
  
if (!Array.isArray(arrayOfNums)) {
  console.log('Error: You did not enter a valid array of numbers.');
} else if (numTest) {
  console.log('Error: There is at least one non-number in your array');
} else if (arrSumOrProduct === 's') {
  console.log(`The sum of all of those numbers is ${sumTotal}.`);
} else if (arrSumOrProduct === 'p') {
  console.log(`The product of all of those numbers is ${productTotal}.`);
} else {
  console.log('You entered an invalid option');
}


