const MESSAGES = require("./mortgage_messages.json");
let rlSync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer;

do {
  prompt(MESSAGES["greeting"]);
  prompt(MESSAGES["amount"]);
  let loanAmount = Number(rlSync.question());
  prompt(MESSAGES["duration"]);
  let durationInMonths = Number(rlSync.question());
  prompt(MESSAGES["rate"]);
  let annualRate = Number(rlSync.question());
  
  let monthlyRate = annualRate / 12;
  
  let monthlyPayment;
  
  
  if ((durationInMonths % 1 !== 0) || (durationInMonths === 0) || (loanAmount === 0) || ((loanAmount * 100) % 1 !== 0)) {
    prompt('You did not make a valid entry');
  } else {
    
    if (annualRate === 0) {
      monthlyPayment = loanAmount / durationInMonths;
    } else {
      monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-durationInMonths))));
    }
    
    let result = monthlyPayment.toFixed(2);
    prompt(`You will have a monthly payment of $${result}.`);
  }
  
  prompt(MESSAGES["again"]);
  answer = rlSync.question();
} while (answer[0].toLowerCase() === 'y');