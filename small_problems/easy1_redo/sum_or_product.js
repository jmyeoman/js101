let RLSYNC = require("readline-sync");
let integer;
let answer;

while (true) {
  integer = parseInt(RLSYNC.question("Please enter an integer greater than 0: "), 10);
  if (!isNaN(integer)) break;
  console.log('This is not a valid response');
}

while (true) {
  answer = RLSYNC.question('Enter "s" to compute the sum, or "p" to compute the product: ');
  if (answer.toLowerCase() === 's' || answer.toLowerCase() === 'p') break;
  console.log('That is not a valid response');
} 
/*
function product(num) {
  let result = 1;
  for (let count = 1; count <= num; count++) {
    result *= count;
  }
  return result;
}

function sum(num) {
  let result = 0;
  for (let count = 1; count <= num; count++) {
    result += count;
  }
  return result;
}

*/

// array

function makeArr(integer) {
  let arr = [];
  for (let count = 1; count <= integer; count++) {
    arr.push(count);
  }
  return arr
}

let arrOfNum = makeArr(integer);

function sum(arrOfNum) {
  return arrOfNum.reduce((acc, cv) => acc + cv);
}

function product(arrOfNum) {
  return arrOfNum.reduce((acc, cv) => acc * cv);
}

if (answer.toLowerCase() === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${product(arrOfNum)}.`);
} else if (answer.toLowerCase() === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(arrOfNum)}.`);
}