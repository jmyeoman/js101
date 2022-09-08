// Problem
// Given an array of strings return an array of the same strings but with the 
// vowels removed.
// Input: Array of Strings
// Output: Array of Strings
// Data Structure: Array
// Rules
// Case insensitive
// Algorithm
// Create a result array
// Create a string with upper and lowercase vowels and set it as a constant
// iterate over each string in the array
// convert each string to an array of characters
// iterate over the string of characters and select the characters that are not
// vowels
// Join result array into a string and push it to the result array
// return result array

const vowels = 'aeiouAEIOU';

function removeVowels(arr) {
  let result = [];
  
  arr.forEach(str => {
    let resultStr = str.split('')
                       .filter(char => {
                         return !vowels.includes(char);
                       });
    result.push(resultStr.join(''));
  });
  
  return result;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


