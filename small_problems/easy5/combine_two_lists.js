/* function interleave(array1, array2) {
  let result = []
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i], array2[i])
  }
  return result
}
*/

function interleave(array1, array2) {
  let newArray = []
  let copyArr = array2.slice()
  array1.forEach(element => {
    newArray.push(element, copyArr.shift())
  })
  return newArray
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]