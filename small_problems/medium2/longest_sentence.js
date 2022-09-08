// problem
// Given a string return the longest sentence in the string
// Input: String
// Output: String
// Data STructure: Array
// Algorithm
// 1. Create a subfunction that seperates the string into sentence
// 2. Create a subfunction that returns an array filled with the
// same amount of empty arrays as sentences
// a. create a result array 
// b. turn the string into an array of chars.
// c. iterate over the array and push an empty array to the result
// array each time a (., !, or ?) appears
// d. return the array
// Subfunction of sentences
// a. Set a first char variable and set it to 0
// b. turn the string into an array of single characters
// c. Create a result array with the empty array subfuntion
// d. iterate over the characters
// e. set a variable for the sentence array index
// d. push the array to the current empty array
// e. if there is an ., !, or ? push it then change the index variable
// to plus one
// d. iterate over the sentence array and join the chars together
// e. return the sentence array
// 3. Iterate over the sentence array (create copy first?)
// 4. split each sentence into an array of words
// 5. iterate over the sentences and return the longest array
// 6. join the array back into a sentence and return it

function emptyArrs(str) {
  let resultArr = [];
  let arrStr = str.split('');
  
  arrStr.forEach(char => {
    if (char === '.' || char === '?' || char === '!') {
      resultArr.push([]);
    }
  });
  
  return resultArr;
}

function retrieveSentences(str) {
  let resultArr = emptyArrs(str);
  let sentenceIndex = 0;
  let arrStr = str.split('');
  
  for (let i = 0; i < arrStr.length; i++) {
    resultArr[sentenceIndex].push(arrStr[i]);
    if (arrStr[i] === '.' || 
        arrStr[i] === '?' || 
        arrStr[i] === '!') {
      sentenceIndex += 1;
    }
  }
  
  return resultArr.map(sentence => sentence.join(''));
}

function longestSentence(str) {
  let sentences = retrieveSentences(str)
  
  let mostWords = sentences.map(sentence => sentence.split(' '))
                           .sort((a, b) => b.length - a.length);
  
  let numberOfWords = mostWords[0].length               
  mostWords = mostWords[0].join(' ')
  
  console.log(mostWords)
  console.log(`The longest sentence has ${numberOfWords} words.`)
  
  
}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.