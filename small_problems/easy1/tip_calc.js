let rlSync = require("readline-sync")
console.log('What is the bill? ')
let bill = rlSync.question()
console.log('What is the tip percentage? ')
let tipRate = rlSync.question()

let tipTotal = (parseInt(tipRate) / 100) * parseInt(bill) 
bill = parseInt(bill) 

let billTotal = (bill + tipTotal).toFixed(2)
tipTotal = tipTotal.toFixed(2)


console.log(`The tip is $${tipTotal}`)
console.log(`The total is $${billTotal}`)