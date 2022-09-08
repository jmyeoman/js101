function crunch(str) {
  let arrStr = str.split('');
  let resultStr = '';
  
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i - 1]) continue
    resultStr += arrStr[i]
  }
  return resultStr
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));     // ""