// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

// Input: String
// Output: Array of Strings
// Rules: 
// Explicit
// 1. Every palindrome substring should be reurned as a string in an array.
// 2. A palindrome is a word that reads the same forward and back.
// 3. Palindrome words are case sensitive
// Implicit
// 1. An empty string returns an empty array
// 2. A palindrome is any string of letters that reads the same forwards and backwards and is not necessarily a word in english.
// 3. A string with no palindromes in it returns an empty array.
// 4. Palindromes can be nested within eachother. 
// 5. A palindrome substring has at least two characters