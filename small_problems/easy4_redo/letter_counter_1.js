// Problem
// Given a string return an object with corresponding keys that reference
// word length and properties that match the number of words with
// given length
// Input: String
// Output: Object
// Data Structure: Object/ array
// Algorithm
// Convert the string to an array of words
// create a result object
// Iterate over the array
// if there is an existing object key with the element's length
// then the object property equals object property + 1
// if there is no existing object key witht the element's length
// then the object property is assigned one
// Return the object 

function wordSizes(str) {
  let strArr = str.split(' ');
  let obj = {};
  
  if (str === '') return obj;
  
  for (let i = 0; i < strArr.length; i++) {
    if (obj[strArr[i].length]) {
      obj[strArr[i].length] += 1;
    } else {
      obj[strArr[i].length] = 1;
    }
  }
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}