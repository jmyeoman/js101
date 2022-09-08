
function wordSizes(str) {
  let strArr = str.split(' ');
  let obj = {};
  
  if (str === '') return obj;
  
  strArr = strArr.map(word => {
    let wordArr = word.split('');
    let onlyLetters = wordArr.reduce((acc, cv) => {
      if (cv.toLowerCase() >= 'a' && cv.toLowerCase() <= 'z' ) {
        return acc + cv;
      } else {
        return acc;
      }
    }, '');
    return onlyLetters;
  });
  
  for (let i = 0; i < strArr.length; i++) {
    let wordSize = strArr[i].length
    if (obj[wordSize]) {
      obj[wordSize] += 1;
    } else {
      obj[wordSize] = 1;
    }
  }
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}