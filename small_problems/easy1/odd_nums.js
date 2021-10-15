/*let iterator = 1
while (iterator <= 99) {
  if (iterator % 2 === 1) {
    console.log(iterator)
  } 
  iterator += 1
}
*/

// alternate
/*
let i = 1 
while (i <= 99) {
  console.log(i)
  i += 2
}
*/

// Odd numbers with user specification

let rlSync = require('readline-sync')

console.log('What is the largest odd number you want to count to?')
let max = rlSync.question()

for (let i = 1; i <= max; i += 2) {
  console.log(i)
}

