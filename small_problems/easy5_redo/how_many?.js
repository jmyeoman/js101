// Problem:
// Given a array of elements count the number of occurrences of
// each element value and log to the console the count next to
// the element value/
// Rules: Case Sensitive
// Input: Array
// Output: Log to console
// Data Structure: Array and Object
// Algorithm
// Create an empty object assigned to count
// Iterate over each element
// if the element is listed in the count object add one to the count
// if the element is not listed create the property and initialize
// it to the value 1
// Iterate over the object 
// For each property log the key and the value

function countOccurrences(arr) {
  let count = {};
  
  for (let i = 0; i < arr.length; i++) {
    count[arr[i].toLowerCase()] ? count[arr[i].toLowerCase()] += 1 : count[arr[i].toLowerCase()] = 1;
  }
  
  for (let property in count) {
    console.log(`${property} => ${count[property]}`);
  }
}

let vehicles = ['car', 'Car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'MOtorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
