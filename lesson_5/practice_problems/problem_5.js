function maleAge(obj) {
  let age = 0;
  
  for (let key in obj) {
    if (obj[key]['gender'] === 'male') {
      age += obj[key]['age'];
    }
  }
  
  return age;

}


let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(maleAge(munsters));