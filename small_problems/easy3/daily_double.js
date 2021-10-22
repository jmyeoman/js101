/*
START
GET string
SET arrayOfString equal to string seperated into an array of characters
Set newArray = []
Set counter
WHILE counter less than string length
IF Element at index counter is not equal to element at index counter - 1
  PUSH element to newArray
JOIN newArray into a string
RETURN newArray
END

Reduce attempt

function crunch(string) {
  let crunchedString = string.split('')
                             .reduce((acc, cv) => {
    if (cv !== acc[acc.length - 1]) {
      acc = acc + cv
    }
  },'')
}
*/
function crunch(string) {
  let nonDoubledString = [];
  let arrayOfString = string.split('');
  for (let index = 0; index < arrayOfString.length; index++) {
    if (arrayOfString[index] !== arrayOfString[index - 1]) {
      nonDoubledString.push(arrayOfString[index]);
    }
  }
  return nonDoubledString.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

/*  red = a,b,c,d,e
red a + nothing

*/