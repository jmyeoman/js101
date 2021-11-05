/* Part 1
function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
*/

// Part 2

// P
// -Given a string of words if a word is longer than 4 characters
//   then it should have it's letters reversed and then return the 
//   the string
// Input: String
// Output: String
// Rules: 
// 1. Case doesn't matter
// 2. empty string?
// 3. reverse letters of words that are longer than 4 characters
// Data Structure
// String to array to another array back to string
// Algorithm
// 1. Convert string to array with elements delimited by a space
// 2. Loop through elements
// 3. If element length is greater than 4 do the following
//    split the element into an array of characters
//    reverse the characters
//    join the elements back to a string
// 4. End loop and join the elements back into a string
// 5. Return the string

/*
function reverseWords(str) {
  let arrOfWords = str.split(' ');
  let result = [];
  
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > 4) {
      result.push(arrOfWords[i].split('').reverse().join(''));
    } else {
      result.push(arrOfWords[i]);
    }
  }
  return result.join(' ');
}
*/

function reverseWords(str) {
  let words = str.split(' ');
  let reverseWords = words.map(word => {
    return word.length > 4 ? reverseWord(word) : word;
  });
  return reverseWords.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
