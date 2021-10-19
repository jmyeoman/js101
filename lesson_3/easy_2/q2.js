let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let newNumbers = numbers.slice().reverse();

console.log(newNumbers);

let newOrder = [];
numbers.forEach(element => {
  newOrder.unshift(element);
});

console.log(newOrder);

let sortedArray= [...numbers].sort((num1, num2) => num2 - num1)
console.log(sortedArray)