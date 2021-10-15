// More exploration
let rlSync = require("readline-sync");
const SQMETERS_TO_FEET = 10.7639;
let metersOrFeet = rlSync.question('Do you want the area in square feet or meters?\nType 1 for square feet\nType 2 for square meters\n');
let width = rlSync.question('How wide is the room?\n');
let length = rlSync.question('How long is the room?\n');



function area(w, l) {
  let area = (parseInt(w) * parseInt(l)).toFixed(2);
  if (metersOrFeet === '2') {
  console.log(`The area in square meters is ${area}.`);
  } else if (metersOrFeet === '1') {
  console.log(`The area in square feet is ${area}.`);
  } else {
    console.log('You did not enter a valid number');
  }
}

area(width, length)