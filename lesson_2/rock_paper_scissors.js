const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const WIN_LOSS_TABLE = { 'rock scissors': 1, 'rock lizard': 1, 'paper rock': 1, 
                     'paper spock': 1, 'scissors paper': 1, 'scissors lizard': 1, 
                     'spock rock': 1, 'spock scissors': 1, 'lizard spock': 1, 
                     'lizard paper': 1, 'rock paper': 2, 'rock spock': 2, 
                     'paper scissors': 2, 'paper lizard': 2, 'scissors rock': 2, 
                     'scissors spock': 2, 'spock paper': 2, 'spock lizard': 2, 
                     'lizard rock': 2, 'lizard scissors': 2, 'rock rock': 0,
                     'paper paper': 0, 'scissors scissors': 0, 'spock spock': 0,
                     'lizard lizard': 0
};

function returnWinner(choice, computerChoice) {
  return WIN_LOSS_TABLE[choice + ' ' + computerChoice];
}


function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  switch (returnWinner(choice, computerChoice)) {
    case 0: 
      prompt("It's a tie");
      break;
    case 1: 
      prompt("You're the winner");
      break;
    case 2:
      prompt("Computer wins");
      break;
  }
}

let playerWins = 0;
let compWins = 0;

while (true) {
  
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  
  if (returnWinner() === 1) {
    playerWins += 1;
  } else if (returnWinner() === 2) {
    compWins += 1;
  }

  if (playerWins === 3) {
    prompt("You're the grand winner!");
    break;
  } else if (compWins === 3) {
    prompt("Computer is the grand winner!");
    break;
  }
  
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  
  if (answer[0] !== 'y') break;
} 

// Isn't incrementing and counting wins


/* #Unused function

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper')) {
        prompt('You win!');
      } else if ((choice === 'rock' && computerChoice === 'paper') ||
                 (choice === 'rock' && computerChoice === 'spock') ||
                 (choice === 'paper' && computerChoice === 'scissors') ||
                 (choice === 'paper' && computerChoice === 'lizard') ||
                 (choice === 'scissors' && computerChoice === 'rock') ||
                 (choice === 'scissors' && computerChoice === 'spock') ||
                 (choice === 'spock' && computerChoice === 'paper') ||
                 (choice === 'spock' && computerChoice === 'lizard') ||
                 (choice === 'lizard' && computerChoice === 'rock') ||
                 (choice === 'lizard' && computerChoice === 'scissors')) {
        prompt('Computer wins!');
      } else {
        prompt("It's a tie");
      }
}

#Unused if statement
 displayWinner(choice, computerChoice);
  
   if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper')) {
        playerWins += 1;
      } else if ((choice === 'rock' && computerChoice === 'paper') ||
                 (choice === 'rock' && computerChoice === 'spock') ||
                 (choice === 'paper' && computerChoice === 'scissors') ||
                 (choice === 'paper' && computerChoice === 'lizard') ||
                 (choice === 'scissors' && computerChoice === 'rock') ||
                 (choice === 'scissors' && computerChoice === 'spock') ||
                 (choice === 'spock' && computerChoice === 'paper') ||
                 (choice === 'spock' && computerChoice === 'lizard') ||
                 (choice === 'lizard' && computerChoice === 'rock') ||
                 (choice === 'lizard' && computerChoice === 'scissors')) {
        compWins += 1;
      } 
  if (playerWins === 3) {
    prompt('You are the grand winner!');
  } else if (compWins === 3) {
    prompt('Computer is the grand winner!');
  }

*/