// Algorithm
// Create an if else statement
// if the first argument is longer than the second then return 
// the second argument concatenated to the first argument concatenated
// again to the second argument
// if the if the second argument is longer than the first then return
// the first argument concatenated to the second argument and then
// concatenated to the first argument again. 

function shortLongShort(first, second) {
  if (first.length > second.length) {
    return second + first + second;
  } else if (second.length > first.length) {
    return first + second + first;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"