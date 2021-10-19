let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function correctSentence(sentence) {
  let newSentence = sentence.toLowerCase().split('')
  let firstLetter = newSentence.shift().toUpperCase()
  newSentence.unshift(firstLetter)
  return newSentence.join('')
}

console.log(correctSentence(munstersDescription))