function spaceIt(tableSize, sentence) {
  let spaces = Math.floor((tableSize / 2) - (sentence.length / 2));
  let centeredSentence = sentence
  for (let counter = 0; counter < spaces; counter++) {
   centeredSentence = centeredSentence.split('');
   centeredSentence.unshift(' ')
   centeredSentence = centeredSentence.join('');
  }
  return centeredSentence;
}

function padIt(tableSize, sentence) {
  let padding = Math.floor((tableSize / 2) + (sentence.length / 2))
  return sentence.padStart(padding, ' ')
}

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

console.log(spaceIt(40, title))
console.log(padIt(40, title))

