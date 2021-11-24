/*
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
let board = initializeBoard();
const WINNING_COMBOS = [[1, 2, 3], 
                        [4, 5, 6], 
                        [7, 8, 9],
                        [1, 4, 7],
                        [2, 5, 8],
                        [3, 6, 9],
                        [1, 5, 9],
                        [3, 5, 7],
                        ];



board[9] = HUMAN_MARKER;
board[3] = COMPUTER_MARKER;
board[5] = COMPUTER_MARKER




function initializeBoard() {
  let board = {};
  for (let count = 1; count <= 9; count++) {
    board[count] = INITIAL_MARKER;
  }
  return board;
}


function createCombos(board) {
  return WINNING_COMBOS.map(subArr => {
    return subArr.map(element => {
      if (board[element] === HUMAN_MARKER) {
        return board[element]
      } else if (board[element] === COMPUTER_MARKER) {
        return board[element]
      } else {
        return element
      }
    })
  })
}


function compTurn(board) {
  if (someoneWon(HUMAN_MARKER) || detectTie()) return null;
  let compChoice;
  let randomIndex = Math.floor(Math.random() * validChoices(board).length);
  
  if (offenseAI()) {
    compChoice = offenseAI();
  } else if (defenseAI()) {
    compChoice = defenseAI()
  } else {
    compChoice = validChoices(board)[randomIndex];
  }
  
  board[compChoice] = COMPUTER_MARKER;
}



function detectTie() {
  return validChoices(board).length === 0
}

function someoneWon(player) {
  let currentCombos = createCombos(board)
  return currentCombos.some(subArr => {
    return subArr.every(element => element === player);
  });
}


function validChoices(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function defenseAI() {
  let currentCombos = createCombos(board);
  let compChoice = null;
  
  for (let i = 0; i < currentCombos.length; i++) {
    let count = 0;
    let square = null;
    for (let i2 = 0; i2 < currentCombos[i].length; i2++) {
      if (currentCombos[i][i2] === HUMAN_MARKER) {
        count += 1
      } else if (Number.isInteger(currentCombos[i][i2])) {
        square = currentCombos[i][i2]
      }
    }
    if (count === 2) {
      compChoice = square
      break
    }
  }
  return compChoice
}  

function offenseAI() {
  let currentCombos = createCombos(board)
  let compChoice = null
  
  for (let i = 0; i < currentCombos.length; i++) {
    let count = 0;
    let square = null;
    for (let i2 = 0; i2 < currentCombos[i].length; i2++) {
      if (currentCombos[i][i2] === COMPUTER_MARKER) {
        count += 1
      } else if (Number.isInteger(currentCombos[i][i2])) {
        square = currentCombos[i][i2]
      }
    }
    if (count === 2) {
      compChoice = square
      break
    }
  }
  return compChoice
}

//put currentCombos is compTurn

console.log(createCombos(board))
compTurn(board)
console.log(createCombos(board))
*/
/*
const RLSYNC = require("readline-sync")

function a() {
  console.log('a')
}

function b() {
  console.log('b')
}

const WHO_GOES_FIRST = 'choose'
let choice

function playerOrder(WHO_GOES_FIRST) {
 if (WHO_GOES_FIRST === 'player') {
   a();
   b();
  } else if (WHO_GOES_FIRST === 'computer') {
    b();
    a();   
    
  } else if (WHO_GOES_FIRST === 'choose') {
    while (true) {
    if ((choice !== 'player') && (choice !== 'computer')) {
      choice = RLSYNC.question("Who goes first? player/computer: ");
        }
    if (choice === 'player') {
      a();
      b();
      break;
      
    } else if (choice === 'computer') {
      b()
      a()
      break;   
      
    } else {
          // use prompt
          console.log("That isn't a valid choice")
        }
      }
    }
  }
  
  playerOrder(WHO_GOES_FIRST)
  playerOrder(WHO_GOES_FIRST)

// must use debugger to figure out value of board[element] === HUMAN_MARKER

*/

let currentPlayer = 'human'


function alternatePlayer(currentPlayer) {
  return currentPlayer === 'human' ? 'computer' : 'human'
}

currentPlayer = alternatePlayer(currentPlayer)

console.log(currentPlayer)