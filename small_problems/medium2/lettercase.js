// Problem
// Given a string return an object that has the following properties
// 1. The percentage of chars in the string that are lowercase
// 2. The percentage of chars that are uppercase
// 3. The percentage that are neither
// Rules:
// 1. percentages are fixed point number strings with 2 zeroes
// Input: String
// Output: Object with string values
// Data Structure: object/array
// Algorithm
// 1. Determine the length of the string and set it to a variable
// 2. split the string into an array of chars
// 3. iterate over the array and filter out each of the three
// classes of char
// 4. divide the length of each class array by the over all lkength
// 5. Push the result to an object with the percentage set to 2 decimal
// places.
// 6. return the object

function letterPercentages(str) {
  let totalChars = str.length;
  
  let totalLowercase = 0;
  let totalUppercase = 0;
  let totalNeither = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      totalLowercase += 1;
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      totalUppercase += 1;
    } else { 
      totalNeither += 1;
    }
  }
  
  let resultObj = { lowercase: ((totalLowercase / totalChars) * 100).toFixed(2),
                    uppercase: ((totalUppercase / totalChars) * 100).toFixed(2),
                    neither: ((totalNeither / totalChars) * 100).toFixed(2)
  };
  
  return resultObj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }