function wordSizes(sentence) {
  let sentenceArray = sentence.replace(/[^\w\s]/g, '').split(' ');
  let obj = {};
  
  for (let i = 0; i < sentenceArray.length; i++) {
   let wordLength = sentenceArray[i].length;
   if (wordLength === 0) {
     continue;
   }
   if (!obj[wordLength]) {
     obj[wordLength] = 0;
   } 
   obj[wordLength] = 1 + obj[wordLength];
    
  }
  return obj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}