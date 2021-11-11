// Problem
// Given a data structure return an object where the 

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let result = []
arr.forEach(element => {
  result[element[0]] = element[1]
})

console.log(result)