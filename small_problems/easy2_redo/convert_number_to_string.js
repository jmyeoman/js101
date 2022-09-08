// Problem
// Convert a number to a string without using a method
// Input: number
// Output: string
// Data Structure: Object Array
// algorithm
// Iterate through the number
// On each iteration take the remainder 10 of the number
// then subtract that number from the entered number and divide by 10
// Unshift the remainder to a result array
// create an object of digit strings
// iterate over the array of digits 
// replace each digit with the str digit in the object
// join the array into a single string

function createDigitArr(num) {
  let digitArr = [];
  do {
    let currentDigit = num % 10;
    digitArr.unshift(currentDigit);
    num -= currentDigit;
    num /= 10;
  } while (num !== 0);
  
  return digitArr;
}

const DIGITS = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};

function integerToString(num) {
  let digitArr = createDigitArr(num);
  return digitArr.map(digit => DIGITS[digit])
                 .join('');
}

console.log(integerToString(4321) === '4321');        // "4321"
console.log(integerToString(0) === '0');           // "0"
console.log(integerToString(5000) === '5000');        // "5000"
console.log(integerToString(1234567890) === '1234567890');  // "1234567890"