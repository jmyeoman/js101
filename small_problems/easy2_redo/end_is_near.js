function penultimate(str) {
  let strArr = str.split(' ')
  return strArr[strArr.length - 2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(penultimate("Launch School is great"))

function middle(str) {
  let strArr = str.split(' ');
  if (strArr.length === 0) return ''
  if (strArr.length % 2 === 0) {
    return strArr[(strArr.length / 2) - 1] + ' ' + strArr[strArr.length / 2];
  } else {
    return strArr[Math.floor(strArr.length / 2)]
  }
}

console.log(middle('This is the First'));
console.log(middle('This is the Second one'));
console.log(middle(''));