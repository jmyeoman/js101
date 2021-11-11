// problem
// Given an object return an array containing the colors of the fruits
// and the sizes of the vegetables.
// Input:
// Object
// Output:
// Array
// Rules:
// 1. sizes are uppercase
// 2. colors are capitalized
// 3. array will contain strings and arrays with strings
// Data Structure:
// Array of strings and arrays containing strings
// Algoritm
// * create an empty result array
// 1. Loop over objects within obj
// 2. Get keys and values of each fruit object in an array
// 3. Loop over keys
// 4. create helper function to capitalize colors
// 5. create helper function to uppercase
// 6. If key value type equals 'fruit' 
//       loop over colors 
//       use helper capitalize
//       and push element or array (not each element in a subarray)
// 7. if key value type equals vegetable
//       loop over size
//       use helper to uppercase
//       and push element to result array
// 8. return result array

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// test: let arr = ['apple', 'green', 'red']

let resultArr = []

function capFruitColor(array) {
  return array.map(element => {
    return element.slice(0, 1).toUpperCase() + element.slice(1)
  })
}

function upperCaseVegSize(str) {
  return str.slice().toUpperCase()
}
          
function pushToResult(obj) {
  if (obj.type === 'fruit') {
    resultArr.push(capFruitColor(obj.colors))
  } else if (obj.type === 'vegetable') {
    resultArr.push(upperCaseVegSize(obj.size))
  }
}  
          
function produceAttributes(obj) {
  for (let fruit in obj) {
    pushToResult(obj[fruit])
  }
  return resultArr
}

console.log(produceAttributes(obj))
console.log(obj)
          
// console.log(capFruit(arr))

// console.log(upperCaseVeg('large'))