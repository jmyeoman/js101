// Problem
// Given an integer return a string of alternating 1s and 0s starting
// with 1 and set the length to that of the integer
// Input: Number
// Output: String

function stringy(num) {
  let result = '';
  for (let index = 0; index < num; index++) {
    result[index - 1] !== '1' ? result += '1' : result += '0';
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"