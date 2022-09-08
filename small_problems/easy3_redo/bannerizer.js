// Problem
// Create a function that takes two arguments a string and width (number)
// and returns the string within a box with the str wrapped to 
// additional lines if it is longer than the width
// Input: String, Number
// Output: String
// Data Structure: Iterate over string object
// Algorithm
// Create an if statement that determines if the string is longer
// than the width. 
// If it is create a loop that iterates over the following process
// until the str length is zero
// Process:
// Print to the console a line that contains the number of characters
// determined by the width.
// Remove the same number of elements from the beginning of the
// string (array)


function logInBox(str, width = str.length) {
  let horizontalBorder =`+${'-'.repeat(width + 2)}+`;
  let emptyLine = `|${' '.repeat(width + 2)}|`;
  
  console.log(horizontalBorder);
  console.log(emptyLine);
  
  if (str.length > width) {
    wrapText(str, width);
  } else {
    console.log(`| ${str.trim()} |`);
  }
  console.log(emptyLine);
  console.log(horizontalBorder);
}

function wrapText(str, width) {
  let strArr = str.split('');
  while (strArr.length > 0) {
    let currentString = strArr.slice(0, width)
                              .join('')
                              .padEnd(width, ' ');
    console.log(`| ${currentString} |`);
    strArr.splice(0, width);
  }
}

logInBox('To boldly go where no one has gone before.', 8);


logInBox('abcde', 3);