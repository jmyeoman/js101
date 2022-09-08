
// - // Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".
// Rules:
// Starts with second word
// Input: string
// Output: string
// Algo:
// Create a variable wierd and initialize to empty array
// Split given string into array of words
// iterate over array of words
// if it's the second word do the following
// create variable newWord and initialize to empty string
// iterate over characters in word
// if current index is the fourth character add uppercase char to newWord
// else add letter to newWord
// end loop
// add newWord to weird 
// transform weird array to string of words and return it

function toWeirdCase(str) {
  let weirdArr = [];
  let strArr = str.split(' ');
  
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 1) {
      let newWord = '';

      for (let j = 0; j < strArr[i].length; j++) {
        if ((j + 1) % 4 === 0) {
          newWord += strArr[i][j].toUpperCase();
        } else {
          newWord += strArr[i][j];
        }
      }
      weirdArr.push(newWord);
    } else {
      weirdArr.push(strArr[i]);
    }
  }
  return weirdArr.join(' ');
}