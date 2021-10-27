/*
START
split string into arrayString
SET newArray equa to empty array
Iterate through arrayString
  SET index equal to zero
  WHILE index is less than array length
    IF element at index is an alphabetic character 
    add element to newArray
    ELSE IF previous element doesn't equal ' '
       push ' '
return newArray joined as a string

END
*/

function cleanUp(string) {
  let cleanString = [];
  let arrayString = string.split('');
  
  for (let index = 0; index < arrayString.length; index++) {
    if (arrayString[index].match(/[a-zA-Z]/)) {
      cleanString.push(arrayString[index]);
    } else if (cleanString[cleanString.length - 1] !== ' ') {
      cleanString.push(' ');
    }
  }
  return cleanString.join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "