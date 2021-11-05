function countOccurrences(arr) {
  let obj = {}
  arr.forEach(element => {
    element = element.toLowerCase()
    obj[element] = obj[element] || 0
    obj[element] += 1
  })
  
  for (let prop in obj) {
    console.log(`${prop} => ${obj[prop]}`)
  }
}

let vehicles = ['car', 'car', 'suv', 'TRUCK', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/