const rlSync = require("readline-sync")
const SQMETERS_TO_SQFEET = 10.7639

let length = rlSync.question("How long is the room in meters?\n")
length = parseInt(length)
let width = rlSync.question("How wide is the room in meters?\n")
width = parseInt(width)


let areaInSqM = length * width
let areaInSqF = areaInSqM * SQMETERS_TO_SQFEET

console.log(`The area of the room is ${areaInSqM.toFixed(2)} in square meters.`)
console.log(`The area of the room is ${areaInSqF.toFixed(2)} in square feet.`)


