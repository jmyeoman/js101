// Problem
// Given a string return a string with each first letter of a word
// capitalized and all following letters lowercase
// Rules: It's okay if a non-letter chacter precedes a word and causes
// the first letter of that word to not be capitalized.
// Input: String
// Output: String
// Datastructure: Array
// Algorithm
// create result array
// Convert string to array of words delimited by spaces
// iterate over words
// Set each element equal to the first letter capitalized
// and the rest of the word lowercase. 
// push new element to result array
// Join the array back to a string with elements separated by spaces
// Return new string

function wordCap(str) {
  let strArr = str.split(' ');
  
  let resultArr = strArr.map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
  })
  
  return resultArr.join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
