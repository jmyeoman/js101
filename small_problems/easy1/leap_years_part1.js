let rlSync = require("readline-sync")
let year = rlSync.question('Give me a year I will tell you if it is true it is a leap year.\n')

function isLeapYear(yr) {
if (yr % 4 === 0) {
  if ((yr % 100 === 0) && !(yr % 400 === 0)) {
    return false
  } else {
    return true
  }
} else {
  return false
}
}

console.log(isLeapYear(2100))
console.log(isLeapYear(2400))
console.log(isLeapYear(240000))
console.log(isLeapYear(240001))
console.log(isLeapYear(2000))
console.log(isLeapYear(1900))
console.log(isLeapYear(1752))
console.log(isLeapYear(1700))
console.log(isLeapYear(1))
console.log(isLeapYear(100))
console.log(isLeapYear(400))