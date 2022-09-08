// Problem
// Given an array of names and a object with titles and ocupation
// return a string that greets the person by name and addresses them
// by title
// Input: Array, Object
// Output: String
// Data Structure: Array and Object
// Algorithm
// Create a function to turn an array of names into a single string
// of names with spaces between them
// In the function iterate over an array
// On each iteration add an element to an empty string
// trim the string to remove spaces from beginning and end
// create a string and insert the name, title and occupation


function nameStr(arr) {
  return arr.reduce((acc, cv) => acc + ' ' + cv)
}

function greetings(arr, obj) {
  return `Hello, ${nameStr(arr)}! Nice to have a ${obj.title} ${obj.occupation} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.