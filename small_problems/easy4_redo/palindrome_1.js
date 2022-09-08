// Problem
// Given a string return a boolean result based on whether the 
// string is a palindrome
// Rules
// Capitalization matters
// all characters matter
// Input: string
// Output: boolean
// Data Structure: Array
// Algorithm
// Turn the palindrome into an array
// Reverse the array and turn back into a string
// check if the reversed string equals the string

function isPalindrome(str) {
  let reverseStr = str.split('').reverse().join('')
  return str === reverseStr
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true