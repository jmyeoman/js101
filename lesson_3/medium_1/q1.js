/*
START
SET counter to 0
WHILE counter < 10
PRINT The Flintstones Rock!
Add one space to front of The Flintstones Rock!
Increment counter by 1
END
*/

let sentence = 'The Flintstones Rock!'

let counter = 0

while (counter < 10) {
  console.log(sentence)
  sentence = ' ' + sentence
  counter += 1
}

for (let padding = 1; padding <= 10; padding += 1) {
  console.log(' '.repeat(padding) + 'The Flintstones Rock')
}