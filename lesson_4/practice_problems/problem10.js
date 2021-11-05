let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function lowestAge(obj) {
  return Object.values(obj).reduce((acc, cv) => {
    if (cv < acc) {
      acc = cv
    }
    return acc
  })
}

console.log(lowestAge(ages))