// Problem
// Write a function that takes a string argument and returns an
// array of all substrings that start with the first letter inclusive
// of the entire string. Sort the array from shortest to longest
// Input: String
// Output: Array of substrings
// Data Structure: Array
// Algorithm
// START
// Create a result array
// Convert the string to an array of single characters
// Iterate over the array and for each character push a substring
// that starts with the first letter and ends in the current character
// push each substring to the result array
// Order the substrings from shortest to longest using the length property
// return the array of substrings
// END

/*
function leadingSubstrings(str) {
  let result = [];
  
  for (let index = 0; index < str.length; index++) {
    result.push(str.slice(0, index + 1));
  }
  return result.sort((a, b) => a.length - b.length);
}
*/

function leadingSubstrings(str) {
  let result = []
  let strArr = str.split('');
  strArr.reduce((acc, cv) => {
    result.push(acc + cv)
    return acc + cv
  },'')
  return result
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]