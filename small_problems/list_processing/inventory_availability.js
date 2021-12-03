// Problem
// Given an ID and a list of transactions and return true or false based on
// whether there is a greater than 0 quantity moved in
// Input: ID number, Array of objects
// Output: Boolean
// DataStructure: Array
// Algorithm
// Create a quantity variable and set it to zero
// Iterate over only the transactions of the given ID
// For each transaction 
// if the movement property equals 'in' add
// to the quantity variable
// if the the movement property = 'out' subtract from the quantity
// variable
// return whether quantity is greater than zero

function isItemAvailable(givenID, allTransactions) {
  let totalQuantity = 0
  transactionsFor(givenID, allTransactions).forEach(transaction => {
    if (transaction.movement === 'in') {
      totalQuantity += transaction.quantity
    } else if (transaction.movement === 'out') {
      totalQuantity -= transaction.quantity
    }
  })
  
  return totalQuantity > 0
}

function transactionsFor(givenID, allTransactions) {
  return allTransactions.filter(transaction => transaction['id'] === givenID)
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true