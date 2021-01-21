let userInput = parseInt(prompt(`Please enter your birth year:`));

let zodiacFormula = (userInput - 4) % 12;

if (zodiacFormula === 0) {
  console.log(`Rat`);
} else if (zodiacFormula === 1) {
  console.log(`Ox`);
} else if (zodiacFormula === 2) {
  console.log(`Tiger`);
} else if (zodiacFormula === 3) {
  console.log(`Rabbit`);
} else if (zodiacFormula === 4) {
  console.log(`Dragon`);
} else if (zodiacFormula === 5) {
  console.log(`Snake`);
} else if (zodiacFormula === 6) {
  console.log(`Horse`);
} else if (zodiacFormula === 7) {
  console.log(`Goat`);
} else if (zodiacFormula === 8) {
  console.log(`Monkey`);
} else if (zodiacFormula === 9) {
  console.log(`Rooster`);
} else if (zodiacFormula === 10) {
  console.log(`Dog`);
} else if (zodiacFormula === 11) {
  console.log(`Pig`);
} else {
  alert(`Cant help you sry`);
}
