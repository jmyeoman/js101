// Problem
// Convert a signed number to a string
// Input: Number
// Output: String
// Data Structure: None?
// Algorithm
// Determine the sign of the number
// if it's positive add a +
// if it's negative add a -
// if it's zero return 0

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case -1: 
      return '-' + integerToString(-1 * num);
    case 1:
      return '+' + integerToString(num);
    case 0:
      return '0';
    default:
    console.log('That\'s not a number')
    break;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === '0');