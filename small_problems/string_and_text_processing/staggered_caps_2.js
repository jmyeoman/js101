// Problem
// Given a string return the string with alternating uppcase and
// lowercase letters begining with uppercase
// Rule: Alternation should only occur between letters
// Input: String
// Output: String
// Data Structure: String to array to string





function staggeredCase(str, include = false) {
  let caseSwitch = 0;
  let strArr = str.split('');
  let resultArr = [];
  
  strArr.forEach(char => {
    if (/[a-zA-Z]/.test(char) && caseSwitch === 0) {
      resultArr.push(char.toUpperCase());
      caseSwitch += 1;
    } else if (/[a-zA-Z]/.test(char) && caseSwitch === 1) {
      resultArr.push(char.toLowerCase());
      caseSwitch -= 1;
    } else {
      resultArr.push(char);
      if (include) {
        if (caseSwitch === 0) {
          caseSwitch = 1
        } else {
          caseSwitch = 0
        }
      }
    }
  })
  
  return resultArr.join('');
}

console.log(staggeredCase("I Love Launch School!", true));
console.log(staggeredCase("ALL CAPS", true));
console.log(staggeredCase("ignore 77 the 444 numbers", true));