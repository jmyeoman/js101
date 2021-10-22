/*
START
GET sentence
SET new array of sentence characters
SET counter to 0
WHILE counter < array
IF character is lowercase to uppercase
ELSE IF character is uppercase to lowercase
Concatenate array elements to form one string
RETURN string
*/

//Has infinite loop!!!

let munstersDescription = "The Munsters are creepy and spooky.";

let index = 0;

let newDescription = []

while (index < munstersDescription.length) {
  if (/[a-z]/.test(munstersDescription[index])) {
    newDescription.push(munstersDescription[index].toUpperCase())
  } else if (/[A-Z]/.test(munstersDescription[index])) {
    newDescription.push(munstersDescription[index].toLowerCase())
  } else {
    newDescription.push(munstersDescription[index])
  }
  index += 1
}

let newMunsters = newDescription.join('')

console.log(newMunsters)