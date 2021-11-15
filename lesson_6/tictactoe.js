let board = {
  1: '1',
  2: '2',
  3: '3', 
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};


const rlSync = require("readline-sync");
let userChoice;
let compChoice;
let boardKeysArr = Object.keys(board);
let replay;
let winningCombos = [[1, 2, 3], 
                     [4, 5, 6], 
                     [7, 8, 9],
                     [1, 4, 7],
                     [2, 5, 8],
                     [3, 6, 9],
                     [1, 5, 9],
                     [3, 5, 7],
                     ];

greeting();
while (true) {
  displayBoard();
  userTurn();
  compTurn();
  displayWinnerOrTie();
  if (replay === 'n') break;
}




function displayBoard() {
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

function greeting() {
  console.log('Welcome to Tic Tac Toe!\nYou are X and the computer is O');
}

function userTurn() {
  while (true) {
    userChoice = rlSync.question('It\'s your turn pick a square!\n');
    
    if (validChoice(userChoice)) {
      board[userChoice] = 'X';
      break;
    } else {
      console.log('Invalid choice');
    }
  }

}

function compTurn() {
  while (true) {
    if (isTie()) break;
    compChoice = String(Math.ceil(Math.random() * 9));
    if (validChoice(compChoice)) {
      board[compChoice] = 'O';
      break;
    }
  } 
}

function validChoice(choice) {
  if ((choice === 'X') || (choice === 'O')) {
    return false;
  } else {
    return Object.values(board).includes(choice);
  }
}

function isWinner(player) {
  let currentCombos = winningCombos.map(subArr => {
   return subArr.map(element => {
      return board[element];
    });
  });
  return currentCombos.some(subArr => {
    return subArr.every(element => element === player);
  });
}

function isTie() {
  return Object.values(board).every(element => {
    return element === 'O' || element === 'X';
  });
}

function displayWinnerOrTie() {
  if (isWinner('X')) {
    console.log('Congratulations you WIN!!!');
    displayBoard();
    playAgain();
  } else if (isWinner('O')) {
    console.log('Sorry! Computer Wins');
    displayBoard();
    playAgain();
  } else if (isTie()) {
    console.log('It\'s a tie!');
    displayBoard();
    playAgain();
  }
}

function playAgain() {
  while (true) {
    replay = rlSync.question('Would you like to play again? Y/N: ');
    replay = replay.trim().slice(0, 1).toLowerCase();
    console.log(replay);
    if (replay === 'y') {
      resetBoard();
      console.log('Let\'s play again!');
      break;
    } else if (replay === 'n') {
      console.log('Sorry to see you go!');
      break;
    } else {
      console.log('You didn\'t enter a valid response!');
    }
  }
}

function resetBoard() {
  boardKeysArr.forEach(key => {
    board[key] = String(boardKeysArr.indexOf(key) + 1);
  });
}




//tests

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
