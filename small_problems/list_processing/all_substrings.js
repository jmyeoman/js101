// Problem
// Write a function that takes a string and returns an array of 
// substrings ordered first based on the index of the starting character
// and then from shortest to longest.
// Input: String
// Output: Array of substrings
// Data Structure: Arrays and strings
// Algorithm
// START
// Create a result array
// iterate over the string
// iterate over the string again starting at the given index
// Make copies of the string starting with the first index and 
// ending at the second index 
// push each copy to the result array
// return the result array
// END

/*
function substrings(str) {
  let result = [];
  
  for (let index1 = 0; index1 < str.length; index1 += 1) {
    for (let index2 = 0; index2 < str.length; index2 += 1) {
      if (index1 >= index2 + 1) continue;
      result.push(str.slice(index1, index2 + 1));
    }
  }
  return result;
} 
*/

/*
function substrings(str) {
  let result = []

  for (let index = 0; index < str.length; index += 1) {
    result = result.concat(leadingSubstrings(str.slice(index, str.length)))
  }
  
  return result
}

function leadingSubstrings(str) {
  let result = [];
  
  for (let index = 0; index < str.length; index += 1) {
    result.push(str.slice(0, index + 1));
  }
  
  return result;
}
*/

// further exploration with list processing functions

function substrings(str) {
  let result = [];
  let arrOfStr = str.split('').reverse();
 
  arrOfStr.reduce((acc, cv) => {
    result.push(leadingSubstrings((acc + cv).split('').reverse().join('')));
    return acc + cv;
  },'')
  
  return flatten(result.reverse());
}

function leadingSubstrings(str) {
  let result = [];
  let arrOfStr = str.split('');
  
  arrOfStr.reduce((acc, cv) => {
    result.push(acc + cv);
    return acc + cv;
  },'');
  
  return result;
}

function flatten(arr) {
  return arr.reduce((acc, cv) => acc.concat(cv))
}

// console.log(flatten([[1,], [2], [3]]))

console.log(substrings('abcde'));

/*
returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/

// console.log(leadingSubstrings('abcd'));      // ["a", "ab", "abc", "abcd"]
// console.log(leadingSubstrings('a'));        // ["a"] [d, dc, dcb, dcba]
// ["x", "xy", "xyz", "xyzz", "xyzzy"]

