// Problem
// Given a string return an object with three properties: 
// 1) the number of uppercase letters
// 2) the number of lowercase letters
// 3) the number of characters that are neither
// Input: String
// Output: Object
// Rules: Spaces are counted as characters
// Data Structure: Object/ array not needed for string processing
// Algorithm
// Create result object with thee three counter properties for 
// uppercase, lowercase and neither set to zero
// Iterate over each character
// if character is uppercase add 1 to uppercase property
// if character is lowercase add 1 to lowercase property
// if character is neither add 1 to neither property
// return object

function letterCaseCount(str) {
  let resultObj = {'lowercase': 0, 'uppercase': 0, 'neither': 0};
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) {
      resultObj.neither += 1;
    } else if (str[i] === str[i].toLowerCase()) {
      resultObj.lowercase += 1;
    } else if (str[i] === str[i].toUpperCase()) {
      resultObj.uppercase += 1;
    }
  }
  
  return resultObj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }