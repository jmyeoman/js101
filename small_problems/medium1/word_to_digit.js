// Problem
// Given a string return the string with every occurrence of 
// a number word replaced with a digit
// Input: String
// Output: String
// Data Structure: array, object
// Rules: 
// 1. Must ignore punctuation
// Algorithm
// 1. Split the string into an array delimitted by spaces
// and iterate over it
// 2. Run a function to check for punctuation
// a. Check if the last character in the string is a alphabetical
// character
// b. if it isn't run the replace function on the rest of the
// string
// c. return the digit added to the punctuation
// 3. run a replacement function
// a. create an object with digits assigned to each number word
// b. if the word matches a number word return the digit
// c. else return the word
// 4. return the new string


function wordToDigit(str) {
  let strArr = str.split(' ')
  strArr = strArr.map(word => findPuntuation(word))
  return strArr.join(' ')
}

function findPuntuation(word) {
  let lastChar = word[word.length - 1];
  if (!(lastChar.toLowerCase() >= 'a' && lastChar.toLowerCase() <= 'z')) {
    return replaceWithDigit(word.slice(0, word.length - 1)) + lastChar
  } else {
    return replaceWithDigit(word)
  }
}

function replaceWithDigit(word) {
  let digits = { 'zero': '0',
                 'one': '1',
                 'two': '2',
                 'three': '3',
                 'four': '4',
                 'five': '5',
                 'six': '6',
                 'seven': '7',
                 'eight': '8',
                 'nine': '9'
  };
  
  if (Object.keys(digits).includes(word.toLowerCase())) {
    return digits[word];
  } else {
    return word;
  }
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."