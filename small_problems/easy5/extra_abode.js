// P
// Input: array of strings
// Output: array of numbers
// Rules:
// Given an array of words count the number of letters in the same position 
// in the word as they are in the alphabet. Return the count in a
// array 
// Implicit rules: 
// 1. Case insensitive
// 2. empty string returns an empty array
// 3. No spaces have to be accounted for
// 4. Same number of elements input and output
// 
// Data Structure:
// Transform the array of strings to an array of numbers in between
// convert each string to an array that can be iterated over
// 
// Algorythm
// -Set result array to an empty array
// -Loop over each word in the string
// -For each element count the number of matching letter positions
//   and return the count for each word (helper function)
// - push the count of each word to the result array
// - return result array
//
// Helper function
//   set a constant to a string of the alphabet
//   set variable count to 0
//   set the word to an array of characters
//   for each character if the index matches the index of the alphabet letter
//   counter adds 1
//   return counter

function matchingIndex(str) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
  let counter = 0
  let arrayOfString = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (i === ALPHABET.indexOf(arrayOfString[i])) {
      counter += 1
    }
  }
  return counter
}

function alphabetMatches(arr) {
  let result = []
  
  arr.map(element => {
    let lowerCaseString = element.toLocaleLowerCase()
    result.push(matchingIndex(lowerCaseString))
  })
  return result
}

console.log(alphabetMatches(['abode', 'ABc', 'xyzD']))