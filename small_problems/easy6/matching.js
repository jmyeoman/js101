// Problem
// Given a string write a function that returns a boolean result
// depending on whether there are Parenthesis that match or not
// Input: String
// Output: Boolean
// Rules:
// 1. Must not only be an even number of parentheses, but must
//   be in correct order
// 2. No parentheses returns true
// 3. Presumably an empty string returns true
// Data Structure
// Convert string to array to iterate through then return boolean
// Algorithm
// 1. Convert string to array
// 2. Loop through characters
// 3. Save the indexes of each () in two different arrays
// 4. loop through the index and if left index is not less than
// right index return 
//

function isBalanced(str) {
  let leftP = [];
  let rightP = [];
  let strArray = str.split('');
  let result = true;
  
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === '(') {
      leftP.push(i);
    } else if (strArray[i] === ')') {
      rightP.push(i);
    } else continue;
  }
  
  if (leftP.length !== rightP.length) {
    result = false;
    return result;
  } else if (leftP.length === 0) {
    return result;
  }
  
  for (let i = 0; i < leftP.length; i++) {
    if (leftP[i] > rightP[i]) {
      result = false;
    }
  }
  return result;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);