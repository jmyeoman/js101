let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruit = {};
  for (let key in obj) {
    if (obj[key] === 'Fruit') {
      fruit[key] = obj[key];
    }
  }
  return fruit
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }