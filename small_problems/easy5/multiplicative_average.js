function multiplicativeAverage(array) {
  let total = array.reduce((acc, cv) => acc * cv)
  let rawAnswer = total / array.length
  return String(Math.round(rawAnswer * 1000) / 1000)
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"