let Fraction = require("fraction.js");

function egyptian(targetValue) {
  let denominators = [];
  let unitDenominator = 1;
  while (targetValue > 0) {
    let unitFraction = new Fraction(1, unitDenominator);
    if (unitFraction <= targetValue) {
      targetValue = targetValue.sub(unitFraction);
      denominators.push(unitDenominator);
    }
    unitDenominator += 1;
  }
  return denominators;
}

function unegyptian(denominators) {
  return denominators.reduce(
    (accum, num) => accum + new Fraction(1, num), new Fraction(0)
  );
}