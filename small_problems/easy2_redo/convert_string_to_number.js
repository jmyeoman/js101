// Problem 
// Convert a string to a number without using a built-in method
// Input: string
// Output: number
// Data Structure

/*
function stringToInteger(str) {
  let digits = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
  return str.split('')
            .reduce((acc, cv) => { return (acc * 10) + digits[cv]}, 0)
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

*/

function hexadecimalToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15
  };
  
  return str.split('')
            .map(digit => digit.toUpperCase())
            .map(digit => DIGITS[digit])
            .reduce((acc, cv) => { return (acc * 16) + cv}, 0);
   
}

console.log(hexadecimalToInteger('4D9f') === 19871);