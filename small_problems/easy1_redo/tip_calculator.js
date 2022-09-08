const RLSYNC = require("readline-sync")

console.log("What is the bill total? ")
let bill = RLSYNC.prompt()
bill = parseFloat(bill)

console.log("What is the tip percentage? ")
let percentage = RLSYNC.prompt()
percentage = parseFloat(percentage)

if (percentage >= 1) {
  percentage = percentage / 100
}

let tip = bill * percentage
let total = bill + tip

console.log(`The tip is $${tip.toFixed(2)}`)
console.log(`the total is $${total.toFixed(2)}`)





