const rlsync = require("readline-sync");

let noun = rlsync.question('Enter a noun: ');
let verb = rlsync.question('Enter a verb: ');
let adj = rlsync.question('Enter an adjective: ');
let adverb = rlsync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adj} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adj} Joe's turtle.`);


