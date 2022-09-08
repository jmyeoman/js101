// Problem:
// Given a string return a list of all the substrings in an array
// Input: String
// Output: Array of strings
// Data Structure: Array
// Algorithm
// 1. First make a function that returns all the leading substrings
//   that start with each character and end with the last character
// a. Iterate over the string.
// b. On each character push the substring of that character to the
// end of the string to a result array
// 2. Iterate over each leading substring
// 3. On each iteration push a copy of the substring starting with
// the first character and ending with the character of the iteration
// 4. Return the result array

function leadingSubstrings(str) {
  let subStrArr = [];
  for (let i = 0; i < str.length; i++) {
    subStrArr.push(str.slice(i));
  }
  return subStrArr;
}

function everySubstring(str) {
  let result = []
  let SubStrs = leadingSubstrings(str)
  
  for (let i = 0; i < SubStrs.length; i++) {
    for (let i2 = 1; i2 <= SubStrs[i].length; i2++) {
      result.push(SubStrs[i].slice(0, i2))
    }
  }
  return result
}

console.log(everySubstring('abcd'))