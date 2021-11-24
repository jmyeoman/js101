Problem
create a a game of twenty-one
Input: string commands
output: string results

Rules:
1. Two players, the computer and a human
2. Game play involves a 52 card deck with four suits
3. Goal is to get as close to 21 without going over
4. player and computer are first dealt two cards
5. player only knows one card dealt to computer
6. each turn the player has the option to hit or stay
7. Hitting will deal a new card to both the player and the computer
8. Staying will end the game and the hidden card is revealed
9. Each dealer turn the dealer follows a strict rule of hitting until her hand equals 17 then stays
9. winner is determined by which player is closest to 21 
10. If player hits and goes over 21 the player "busts" and the game is over

Data Structure
Strings, arrays, objects, and numbers

Algorithm

Top level:

***
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

***

Initialize deck
deal two cards to each player (initialize player and computer cards)
Player choice hit or stay
Check if player busts and game ends
Computer turn
check if computer busts
repeat turn loop
break out of loop with player stay, either bust
Declare winner
Play again?

Functions:
Initialize deck- create array of subarrays each subarray is a card that contains name, suit, value
Initial deal - Create two arrays one for computer and one for player each array holds subarray card
    push two subarray cards to each array
Player turn - Get command 
              loop with valid entry
              helper hit- push card from deck to player hand
              helper stay- 
              helper bust- declare winner

Computer turn
    stayDidBothStay
    computerHit- push card from deck to hand
    didSomeoneBust
Declare winner
replay

helper functions:
Name of card
display cards- pass human or computer as argument
Human hit: move card from deck to human array then display cards
helper didSomeoneBust - 
helper whoWon
function stayDidBothStay



Initialize Deck:
 create deck variable
 
 

 calculate ace-
 
 if hand equals 11 or less 
 ace equals 10
 else ace equals 1



