const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const gameMax = 21
const dealerMin = 17

let playerWins = 0;
let dealerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > gameMax) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return total > gameMax;
}

function detectResult(dealerTotal, playerTotal) {
  if (playerTotal > gameMax) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > gameMax) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

//grand total functions

function gameTracker(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);
  
  switch (result) {
    case 'PLAYER_BUSTED':
      dealerWins += 1;
      break;
    case 'DEALER_BUSTED':
      playerWins += 1;
      break;
    case 'PLAYER':
      playerWins += 1;
      break;
    case 'DEALER':
      dealerWins += 1;
  }
}


function grandWinnerStatus(dealerWins, playerWins) {
  prompt(`The current score:`);
  prompt(`Dealer has won ${dealerWins} times`);
  prompt(`Player has won ${playerWins} times`);
}

function detectGrandWinner(dealerWins, playerWins) {
  if (dealerWins === 5) {
    return 'DEALER';
  } else if (playerWins === 5) {
    return 'PLAYER';
  }
}

function displayGrandWinner(detectGrandWinner) {
  if (detectGrandWinner === 'DEALER') {
    prompt(`The Dealer is the grand winner`);
  } else if (detectGrandWinner === 'PLAYER') {
    prompt(`You are the GRAND WINNER!`);
  }
}

function resetScore(detectGrandWinner) {
  if ((detectGrandWinner === 'DEALER') || (detectGrandWinner === 'PLAYER')) {
    dealerWins = 0;
    playerWins = 0;
  }
}

function grandWinner(dealerTotal, playerTotal) {
  gameTracker(dealerTotal, playerTotal);
  
  grandWinnerStatus(dealerWins, playerWins);
  
  detectGrandWinner(dealerWins, playerWins);
  
  displayGrandWinner(detectGrandWinner(dealerWins, playerWins));
  
  resetScore(detectGrandWinner(dealerWins, playerWins));
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playAgain() {
  let answer
  console.log('-------------');
  while (true) {
    prompt('Do you want to play again? (y or n)');
    answer = readline.question();
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      answer = 'y';
      break;
    } else if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
      break;
    } else {
      prompt('You didn\'t enter a valid response')
    }
  }
  return answer === 'y'
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

function finalResults(dealerCards, playerCards, dealerTotal, playerTotal) {
    console.log('==============');
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${playerTotal}`);
  console.log('==============');
}


while (true) {
  prompt('Welcome to Twenty-One!');

  // declare and initialize vars
  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];

  // initial deal
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${dealerCards[0][0] + dealerCards[0][1]} and ?`);
  prompt(`You have: ${hand(playerCards)} for a total of ${playerTotal}.`);

  // player turn
  while (true) {
    let playerTurn;
    
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's', 'hit', 'stay'].includes(playerTurn.toLowerCase())) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === 'h' || playerTurn === 'hit') {
      playerCards.push(deck.pop());
      playerTotal = total(playerCards);
      prompt('You chose to hit!');
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${playerTotal}`);
    }

    if (playerTurn === 's' || playerTurn === 'stay' || busted(playerTotal)) break;
  }

  if (busted(playerTotal)) {
    finalResults(dealerCards, playerCards, dealerTotal, playerTotal);
 
    displayResults(dealerTotal, playerTotal);
 
    grandWinner(dealerTotal, playerTotal);
 
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  // dealer turn
  prompt('Dealer turn...');

  while (dealerTotal < dealerMin) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerTotal)) {
    finalResults(dealerCards, playerCards, dealerTotal, dealerTotal);
  
    displayResults(dealerTotal, playerTotal);
  
    grandWinner(dealerTotal, playerTotal);
  
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }

  // both player and dealer stays - compare cards!
  finalResults(dealerCards, playerCards, dealerTotal, playerTotal);

  displayResults(dealerTotal, playerTotal);

  grandWinner(dealerTotal, playerTotal);

  if (!playAgain()) break;
}

