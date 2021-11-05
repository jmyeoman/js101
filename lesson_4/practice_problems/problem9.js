let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function addAges(obj) {
  let result = 0
  Object.values(obj).forEach(element => result += element)
  return result
}

console.log(addAges(ages))