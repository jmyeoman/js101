function average(arr) {
  let total = arr.reduce((acc, cv) => acc + cv)
  return Math.floor(total / arr.length)
}

function average2(arr) {
  let total = 0
  arr.forEach(element => total += element)
  return Math.floor(total / arr.length)
}

console.log(average2([1, 5, 87, 45, 8, 8]));       // 25
console.log(average2([9, 47, 23, 95, 16, 52]));    // 40