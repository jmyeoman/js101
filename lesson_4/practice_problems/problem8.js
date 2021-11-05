let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function toObj(array) {
  let result = {}
  array.forEach((element, index) => {
    result[element] = index
  })
  return result
}

console.log(toObj(flintstones))