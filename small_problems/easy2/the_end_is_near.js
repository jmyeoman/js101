/*
function penultimate(str) {
  let arr = str.split(' ')
  return arr[arr.length - 2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

*/
// edge case is no words, 1 words, 2 middle words 
// returns middle word

function middle(str) {
  
let arr = str.split(' ');

  if (!(arr[0])) {
    return 'There are no words';
  } else if (arr.length === 2){
    return 'There are only two words';
  } else if (arr.length === 1) {
    return 'There is only one word';
  } else if (arr.length % 2 === 0) {
  let middle1 = arr[arr.length / 2];
  let middle2 = arr[(arr.length /2) - 1];
  return `There are two middle words, ${middle1} and ${middle2}.`;
  } else {
    return `There is one middle word, ${arr[Math.floor(arr.length / 2)]}.`;
  }
}

console.log(middle(''))
console.log(middle('one'))
console.log(middle('two words'))
console.log(middle('three whole words'))
console.log(middle('An entire four words'))