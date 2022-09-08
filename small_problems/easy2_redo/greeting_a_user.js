let RLSYNC = require('readline-sync')

let name = RLSYNC.question("What is your name? ")

if (name.endsWith('!')) {
  name = name.split('')
  name.pop()
  name = name.join('').toUpperCase()
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${name}.`)
}