let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

function printInfo(obj) {
  for (let member in obj) {
    printHelper(member, obj[member]['age'], obj[member]['gender']);
  }
}

function printHelper(name, age, gender) {
  console.log(`${name} is a ${age}-year-old ${gender}`);
}

printInfo(munsters);