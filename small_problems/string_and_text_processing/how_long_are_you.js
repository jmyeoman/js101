// Problem
// Given a string return an array with each word in an element followed
// by a space and a number matching the words length.
// Rules:
// 1. Words are separated by only one space
// Input: string
// Output: array
// Data Structure: process an array
// Algorithm
// Convert the string into an array of words delimited by a single space
// Iterate over the array
// transform the array by adding a space and the word's length to each word
// return the array

function wordLengths(str) {
  if (str === undefined || str === '') return []
  
  return str
         .split(' ')
         .map(word => word + ' ' + String(word.length))
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []