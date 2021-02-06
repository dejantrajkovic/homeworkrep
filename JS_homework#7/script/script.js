let numberArray = [2, 5, 3, 10, 12, "test"];

function calcuteSum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    number = array[i];
    if (number === parseInt(number)) {
      result += number;
    }
  }
  console.log(result);
}
calcuteSum(numberArray);

function validateNumber(array) {
  for (let i = 0; i < array.length; i++) {
    number = array[i];
    if (number === parseInt(number)) {
      console.log(number);
    } else {
      console.log(`ERROR`);
    }
  }
}

validateNumber(numberArray);
