const rlSync = require("readline-sync");
const currentYear = new Date().getFullYear();

let currentAge = Number(rlSync.question('What is your age? '));
let retirementAge = Number(rlSync.question('At what age would you like to retire? '));

console.log(`It's ${currentYear}. You will retire in ${retirementAge - currentAge + currentYear}.`);
console.log(`You have only ${retirementAge - currentAge} years of work to go!`);
