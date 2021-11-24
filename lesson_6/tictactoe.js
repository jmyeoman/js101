
const RLSYNC = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
let board = initializeBoard();
let replay;
let score = initializeScore();
const WHO_GOES_FIRST = 'choose' // valid options 'player', 'computer', or 'choose'
let choice
const NUMBER_OF_WINS_FOR_MATCH_WIN = 5
const WINNING_COMBOS = [[1, 2, 3], 
                        [4, 5, 6], 
                        [7, 8, 9],
                        [1, 4, 7],
                        [2, 5, 8],
                        [3, 6, 9],
                        [1, 5, 9],
                        [3, 5, 7],
                        ];


while (true) {
  displayBoard();
  playerOrder(WHO_GOES_FIRST)
  displayWinnerOrTie();
  if (replay === 'n') break;
}

function displayBoard() {
  console.clear()
  //possible bug on my system causes the first line of the initial prompt to be repeated
  //occurs with ls code as well
  console.log(`You are ${HUMAN_MARKER} and the computer is ${COMPUTER_MARKER}`);
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}


function userTurn(board) {
  if (someoneWon(COMPUTER_MARKER) || detectTie()) return null;
  let userChoice;
  while (true) {
    prompt(`It\'s your turn to pick a square!\nAvailable choices: ${joinOr(validChoices(board))}\n`)
    userChoice = RLSYNC.question().trim();
    if (validChoices(board).includes(userChoice)) break;
    
    displayBoard()
    prompt('Sorry that\'s an invalid choice')
  }
  board[userChoice] = HUMAN_MARKER;
}

function compTurn(board) {
  if (someoneWon(HUMAN_MARKER) || detectTie()) return null;
  let compChoice;
  let randomIndex = Math.floor(Math.random() * validChoices(board).length);
  
  if (offenseAI()) {
    compChoice = offenseAI();
  } else if (defenseAI()) {
    compChoice = defenseAI();
  } else if (board[5] === INITIAL_MARKER) {
    compChoice = 5;
  } else {
    compChoice = validChoices(board)[randomIndex];
  }
  
  board[compChoice] = COMPUTER_MARKER;
  displayBoard()
}




function validChoices(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function someoneWon(player) {
  let currentCombos = createCombos(board)
  return currentCombos.some(subArr => {
    return subArr.every(element => element === player);
  });
}

/*
function createCombos() {
  return WINNING_COMBOS.map(subArr => {
    return subArr.map(element => {
      return board[element]
    })
  })
}
*/

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



function detectTie() {
  return validChoices(board).length === 0
}

function displayWinnerOrTie() {
  if (someoneWon(HUMAN_MARKER)) {
    displayBoard();
    prompt('Congratulations you WIN!!!');
    matchTracker();
    playAgain();
  } else if (someoneWon(COMPUTER_MARKER)) {
    displayBoard();
    prompt('Sorry! Computer Wins');
    matchTracker()
    playAgain();
  } else if (detectTie()) {
    displayBoard();
    prompt('It\'s a tie!');
    matchTracker()
    playAgain();
  }
  return null
}

function playAgain() {
  while (true) {
    prompt('Would you like to play again? y/n: ');
    replay = RLSYNC.question().slice(0, 1).toLowerCase();
    if (replay === 'y') {
      board = initializeBoard();
      prompt('Let\'s play again!');
      break;
    } else if (replay === 'n') {
      prompt('Sorry to see you go!');
      break;
    } else {
      prompt('You didn\'t enter a valid response!');
    }
  }
}


function prompt(words) {
  console.log(`=> ${words}`)
}

function initializeBoard() {
  let board = {}
  for (let count = 1; count <= 9; count++) {
    board[count] = INITIAL_MARKER
  }
  return board
}

function joinOr(arr, delimiter = ', ', conjunction = 'or') {
  if (arr.length === 0) return ''
  if (arr.length === 1) return String(arr[0])
  if (arr.length === 2) return arr[0] + ' ' + conjunction + ' ' + arr[1]
  let beginningOfArr = arr.slice(0, arr.length - 1);
  return beginningOfArr.join(delimiter) +
         delimiter +
         conjunction + 
         ' ' + 
         arr[arr.length -1];
}

// p keep score
// input: Player win
// Output: string declaring current score and if there is a
// grand winner
// rules 
// 1. matches are first to 5 wins
// 2. current score declared after second match
// 3. no global variables except a global constant to represent 
// the number of games needed to win
// data structure
// Store wins in an object output a current score as a string
// Algoritm
// get win, lose or tie from functions
// create an object with human wins and computer wins count
// if either property value greater than one display current score
// if either property value equals 5 declare match winner and reset scores

function matchTracker() {
  if (someoneWon(HUMAN_MARKER)) {
    score.human += 1;
  } else if (someoneWon(COMPUTER_MARKER)) {
    score.computer += 1;
  }
  
  if (score.human > 1 || score.computer > 1) {
    declareScore(score.human, score.computer);
  }
  
  if (score.human === NUMBER_OF_WINS_FOR_MATCH_WIN) {
    prompt('You are the Match WINNER!');
    score = initializeScore()
  } else if (score.computer === NUMBER_OF_WINS_FOR_MATCH_WIN) {
    prompt('The Computer is the Match winner');
    score = initializeScore()
  }
}

function declareScore(humanScore, compScore) {
   prompt(`The Match Score`);
    prompt(`You: ${humanScore}`);
    prompt(`Computer: ${compScore}`);
}

function initializeScore() {
  let score = {human: 0, computer: 0}
  return score
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

function defenseAI() {
  let currentCombos = createCombos(board);
  let compChoice = null;
  
  for (let i = 0; i < currentCombos.length; i++) {
    let count = 0;
    let square = null;
    for (let i2 = 0; i2 < currentCombos[i].length; i2++) {
      if (currentCombos[i][i2] === HUMAN_MARKER) {
        count += 1;
      } else if (Number.isInteger(currentCombos[i][i2])) {
        square = currentCombos[i][i2];
      }
    }
    if (count === 2) {
      compChoice = square
      break
    }
  }
  return compChoice
}  


function playerOrder(WHO_GOES_FIRST) {
 if (WHO_GOES_FIRST === 'player') {
   userTurn(board);
   compTurn(board);
  } else if (WHO_GOES_FIRST === 'computer') {
    compTurn(board);
    userTurn(board);   
    
  } else if (WHO_GOES_FIRST === 'choose') {
    while (true) {
    if ((choice !== 'player') && (choice !== 'computer')) {
      choice = RLSYNC.question("Who goes first? player/computer: ");
        }
    if (choice === 'player') {
      userTurn(board);
      compTurn(board);
      break;
      
    } else if (choice === 'computer') {
      compTurn(board);
      userTurn(board);
      break;   
      
    } else {
          prompt("That isn't a valid choice");
        }
      }
    }
  }
  


// Problem
// If two squares in a row are occupied by human_marker then Comp will always choose the third square
// Input: Board, valid choices, and winning combos
// output: add computer marker to board
// Data structure: Arrays and Objects
// Algorithm
// Retrieve keys of board marked by human
// loop through winning combos
// if Human occupies 2 spots in a subarray then compchoice equals 3 spot

  /*
  currentCombos.forEach(subArr => {
    let count = 0
    subArr.forEach(element => {
      if (element === HUMAN_MARKER) {
        count += 1
      }
    })
    if (count === 2) {
      selectedCombo = subArr
    }
  })
  */




/*
function hasTwoInARow() {
  return WINNING_COMBOS.filter(subarray => {
    let count = 0
    subarray.forEach(element => {
    
    })
  })
}
*/


/* Might reuse this function
function resetBoard() {
  boardKeysArr.forEach(key => {
    board[key] = String(boardKeysArr.indexOf(key) + 1);
  });
}
*/

//tests

// console.log(board)

// playAgain()

// console.log(isWinner('X'))
// console.log(winningCombos)

// resetBoard()
// console.log(board)

// console.log(isTie())

/*
displayBoard();
userTurn();
compTurn()
displayBoard();
*/

//compTurn()

// console.log(compChoice)

// userTurn();

// console.log(validChoice(userChoice))

// displayBoard()
