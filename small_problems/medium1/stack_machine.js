// Problem
// Create a mini language
// Input: String
// Output: Possibly an integer
// Data Structure: Array... maybe an object
// Algorithm
// 1. create all the basic helper functions and initialize
// the variables in the main function
// 2. Split the string passed into an array delimitted by spaces
// 3. Iterate over the string array
// 4. Determine if the first argument is an integer
// 5. if it is an an integer save the number to a value
// variable
// 6. If it is a command call the function and
//   if the value variable is full pass it the value
// 7. delete the value variable

let register = 0;
let stack = [];

function minilang(command) {
  let commandArr = command.split(' ');
  
  for (let i = 0; i < commandArr.length; i++) {
    if (!Number.isNaN(Number(commandArr[i]))) {
      changeRegister(Number(commandArr[i]));
      continue;
    }
    
    switch (commandArr[i]) {
      case 'PUSH':
        PUSH();
        break;
      case 'ADD':
        if (!stack) {
          console.log('ERROR: The Stack is empty')
          break;
        }
        ADD();
        break;
      case 'SUB':
        if (!stack) {
          console.log('ERROR: The Stack is empty')
          break;
        }
        SUB();
        break;
      case 'MULT':
        if (!stack) {
          console.log('ERROR: The Stack is empty')
          break;
        }
        MULT();
        break;
      case 'DIV':
        if (!stack) {
          console.log('ERROR: The Stack is empty')
          break;
        }
        DIV();
        break;
      case 'REMAINDER':
        if (!stack) {
          console.log('ERROR: The Stack is empty')
          break;
        }
        REMAINDER();
        break;
      case 'POP':
        POP();
        break;
      case 'PRINT':
        PRINT();
        break;
      default:
      console.log('unreadable command');
      break;
    }
  }
}

function changeRegister(n) {
  register = n;
}

const PUSH = function() {
  stack.push(register);
};

const ADD = function() {
  register += stack.pop();
};

const SUB = function() {
  register -= stack.pop();
};

const MULT = function() {
  register *= stack.pop();
};

const DIV = function() {
  register = Math.round(register / stack.pop());
};

const REMAINDER = function() {
  register = register % stack.pop();
};

const POP = function() {
  register = stack.pop();
};

const PRINT = function() {
  console.log(register);
};

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)