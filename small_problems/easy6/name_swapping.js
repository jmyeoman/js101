// P
// Given a two names with a space between them swap them and put
//  a comma after the first (in order) name
// Input: string
// Output: string
// Rules:
// 1. maintain case
// 2. Empty string returns?
// Data structure
// Convert string to array and then back to a string
// Algorythm
// 1. Convert string to array with names in two seperate elements
// 2. detructure the array 
// 3. return the variables switched and concatenated together with 
// a comma after the first (in order) name

function swapName(name) {
  let nameArray = name.split(' ');
  let newName = nameArray.pop();
  newName = newName + ',';
  nameArray.forEach(element => {
    newName = newName + ' ' + element;
  })
  return newName;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"