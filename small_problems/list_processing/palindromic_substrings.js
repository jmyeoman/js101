// Problem
// Write a function that returns all Palindromic substrings in a string
// Input: String
// Output: Array of strings
// Rules:
// 1. duplicates should be included
// 2. Palindromes are at least 2 characters long
// 3. Case matters
// Data Structure: Array
// Algorithm
// START
// Create result array
// Call substrings on array and iterate over it
// Select substrings that are at least 2 characters long and read the
// same way forward and back (separate function)
// Add selected substrings to result array
// return result array
// END

function palindromes(str) {
  let result = [];
  let substringArr = substrings(str);
  
  substringArr.forEach(substr => {
    if (isPalindrome(substr)) {
      result.push(substr);
    }
  })
  
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('') && str.length > 1;
}

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));


/* Test isPalindrome()
console.log(isPalindrome('aba'))
console.log(isPalindrome('a'))
console.log(isPalindrome('abnhdnh'))
console.log(isPalindrome('Madam'))
console.log(isPalindrome('madam'))
*/