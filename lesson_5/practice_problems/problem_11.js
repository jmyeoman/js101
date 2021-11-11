// Problem
// Given an array filled with objects increment each number value by 1
// Rules:
// 1. Don't mutate the original
// 2. 
// input: An array of objects with number values
// output: a copy of the original with changes made
// Data Structure: Array of objects with number values
// Algorithm
// 1. Loop over array
// 1.5 set copy of element to use
// 2. get object keys in an array
// 3. iterate over array of keys
// 4. for each key the value equals the value + 1
// 5. return transformed copy



let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

function incrementByOne(arr) {
  return arr.map(obj => {
    let copyObj = Object.assign({}, obj);
    let keys = Object.keys(copyObj);
    keys.forEach(key => {
      copyObj[key] += 1
    })
    return copyObj
  })
}

console.log(incrementByOne(arr));

