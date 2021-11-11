// Problem
// Create a function that doesn't take any arguments and returns a UUID
// Input: nothing
// Output: a 32 character string delimited with hyphens
// Rules:
// 1. Must be random
// 2. Must use hexadecimal numbers (0-9)
// 3. Must use characters a-f
// 4. Must be lower-case
// Data Structure
// String and arrays
// Algoithm
// 1. Create a result string with format of hyphens
// 1.5 create 8 result strings
// 2. Create a random character generation helper function
//      Create a string of characters a-f and 0-9
//      create a random index variable
//        Random num * string.length floored
//      return string character at random index
// 3. Create a loop 
// 4. Loop should start at 1 and go to 8
// 5. On each loop call helper function four times to add to
//    partial result strings
// 6. return result string

function randomChar() {
  let chars = '0123456789abcdef'
  let randomIndex = Math.floor(Math.random() * chars.length)
  return chars[randomIndex]
}

function uuidGen() {
  let sections = [8, 4, 4, 4, 12]
  
  let uuid = sections.map(num => {
    let result = ''
    
    while (num > 0) {
      result += randomChar()
      num -= 1
    }
    return result
  })
  return uuid.join('-')
}

/*
function uuidGen() {
  let chars4 = []
  for (let i = 0; i < 8; i++) {
    let chars = randomChar() + randomChar() + randomChar() + randomChar()
    chars4.push(chars)
  }
  return `${chars4[0]}${chars4[1]}-${chars4[2]}-${chars4[3]}-${chars4[4]}-${chars4[5]}${chars4[6]}${chars4[7]}`;
}
*/
console.log(uuidGen())
console.log(uuidGen())
console.log(uuidGen())