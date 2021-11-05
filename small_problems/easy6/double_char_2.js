// P
// Take a string and double only the consonants and then return the string
// input: String
// Output: String
// Rules:
// 1. Must not double any non-consonants or whitespace
// 2. empty string returns an empty string
// 3. case insensitive
// 
// Data structure
// Convert string to array and then back to string
// Algorythm
// set constant of consonants
// Split string into an array of characters
// Loop through array
// If character matches a character in the consonants variable
//   concatenate it to itself
// Join array into string
// return string

const consonants  = "bcdfghjklmnpqrstvwxyz"

function doubleConsonants(str) {
  let result = str.split('').map(char => {
    if (consonants.includes(char.toLowerCase())) {
      return char + char
    } else {
      return char
    }
  })
  return result.join('')
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""