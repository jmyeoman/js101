const RLSYNC = require("readline-sync");


function initializeDeck() {
  let deck = [['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A']];
  deck.forEach(element => {
    deck.push(['D', element[1]]);
    deck.push(['S', element[1]]);
    deck.push(['C', element[1]]);
  });
  return deck;
}

function prompt(words) {
  console.log(`=> ${words}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function total(cards) {
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

  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function deal(deck, playerHand, computerHand) {
  playerHand.push(deck.shift(), deck.shift());
  computerHand.push(deck.shift(), deck.shift());
  prompt(`The Computer's show card is a ${computerHand[1][0]}${computerHand[1][1]}.`);
  prompt(`Your cards are a ${playerHand[0][0]}${playerHand[0][1]} and a ${playerHand[1][0]}${playerHand[1][1]}`);
}

function displayNewCard(hand, playerString) {
  prompt(`${playerString} new card is a ${hand[hand.length - 1][0]}${hand[hand.length - 1][1]}`);
}

function busted(hand) {
  return total(hand) > 21;
}

function hit(deck, hand, playerString) {
  hand.push(deck.shift());
  displayNewCard(hand, playerString);
}

function computerTurn(deck, playerHand, computerHand) {
  while (total(computerHand) < 17) {
    hit(deck, computerHand, 'The computer\'s');
  }

  prompt(`The computer's hole card was a ${computerHand[0][0]}${computerHand[0][1]}`);
  if (busted(computerHand) || total(playerHand) > total(computerHand)) {
    prompt('You won!');
  } else if (total(playerHand) < total(computerHand)) {
    prompt('Sorry, you lose.');
  } else {
    prompt('It\'s a push.');
  }
}

prompt('Welcome to Twenty One');

while (true) {
  let deck = initializeDeck();
  let playerHand = [];
  let computerHand = [];
  shuffle(deck);
  deal(deck, playerHand, computerHand);
  while (true) {
    let hitOrStay = RLSYNC.question(prompt("hit or stay?"));
    if ((hitOrStay === 'stay')) break;
    if (hitOrStay === 'hit') {
      hit(deck, playerHand, 'Your');
    } else {
      prompt('You didn\'t make a valid entry.');
    }
    if (busted(playerHand)) break;
  }
  if (busted(playerHand)) {
    prompt('Sorry, you lose.');
  } else {
    prompt('You chose to stay!');
  }
  while (!busted(playerHand)) {
    computerTurn(deck, playerHand, computerHand);
    break;
  }

  let answer;
  while (true) {
    let playAgain = RLSYNC.question(prompt('Play again? y/n: '));
    answer = playAgain.toLowerCase()[0];
    if ((answer === 'y') || (answer === 'n')) break;
    prompt('You didn\'t make a valid entry');
  }
  if (answer === 'n') {
    prompt('Sorry to see you go.');
    break;
  } else {
    prompt('Let\'s play again!');
  }
}
