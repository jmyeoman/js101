let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const vowels = 'aeiou';


function vowelsOnly(obj) {
  let arrOfValues = Object.values(obj);
  
  
  arrOfValues.forEach(arrOfStr => {
    arrOfStr.forEach(str => vowelsFromStr(str))
  });
}


function vowelsFromStr(str) {
  str.split('').forEach(char => {
    if (vowels.includes(char)) {
      console.log(char);
    }
  });
}

// let example = 'example'
// vowelsFromStr(example)


vowelsOnly(obj);

