/* function reversedLetters(word) {
  let reversedWord = ''
  for (let i = 0; i < word.length; i += 1) {
    if (i === 0) {
        reversedWord += word[word.length - 1];
      } else if (i === (word.length -1)) {
        reversedWord += word[0];
      } else {
        reversedWord += word[i];
      }
  }
  return reversedWord;
}



function swap(words) {
  let wordArray = words.split(' ');
  let result = [];
  
  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let reversed = reversedLetters(wordArray[idx]);
    result.push(reversed);
  }
 return result.join(' ');
}
*/

function swap(words) {
  let wordArray = words.split(' ');
  let result = wordArray.map(word => {
   if (word.length === 1) {
     return word;
   } else {
     return word[word.length - 1] + word.slice(1, -1) + word[0];
   }
  })
  return result.join(' ')
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"