// Problem
// Given a string swap uppercase and lowercase letters 
// 1. leave other characters alone
// Input: String
// Output: string
// data structure: String/ try without array
// Algorithm
// create result empty string
// iterate over letters
// If letter is lowercase add uppercase of letter to result
// if letter is uppercase add lowercase of letter to result
// If a non-alphabetic character add to result without changing
// return result string

function swapCase(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      result += str[i].toUpperCase();
    } else if (/[A-Z]/.test(str[i])) {
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  
  return result;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"