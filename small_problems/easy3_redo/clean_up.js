// Problem
// Given a string replace each non-alphabetic character with a space
// Only have one space in a row
// Input: String
// Output: String
// Data Structure: Array
// Algorithm
// Create a function that determines if a character is a letter
// turn the string into an array of characters
// create a result string
// test if the character is a letter
// if the character is a letter push it to the string
// if the character is not a letter test if the previous character
// was a letter 
// if it was add a space. 
// if it wasn't continue the loop
// return the result string

function isLetter(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}

function cleanUp(str) {
  let resultStr = '';
  
  str.split('')
     .forEach(char => {
     if (isLetter(char)) {
       resultStr += char;
     } else {
       if (resultStr[resultStr.length - 1] !== ' ') {
       resultStr += ' ';
       }
     }
     })
  return resultStr
}
console.log(isLetter('-'))
console.log(isLetter('?'))
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "