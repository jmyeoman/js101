// Problem
// Given a string of words swap the first and last letters
// Input: string
// output: string
// Data structure: Array
// Create a result array
// Convert the string into an array of words delimited by spaces
// Iterate over the array of words
// convert the word into an array of characters
// create a variable to hold the first letter
// create a variable to hold the last letter
// assign the first to the end
// assign the last to the first
// join the array of characters into a string
// join the array of words into a string

function swap(str) {
  let resultArr = str.split(' ')
                     .map(word => {
                       let letters = word.split('');
                       let first = letters[0];
                       let last = letters[letters.length - 1];
                       letters[0] = last;
                       letters[letters.length - 1] = first;
       
                       return letters.join('');
     });
  return resultArr.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"