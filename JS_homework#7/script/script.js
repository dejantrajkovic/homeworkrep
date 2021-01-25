let numberArray = [2, 5, 3, 10, 12, "test"];

function calcuteSum(array) {
    console.log(array);
    let arraySum = (array[0]) + (array[1]) + (array[2]) + (array[3]) + (array[4]);
    console.log(arraySum);
}

calcuteSum(numberArray);

function validateNumber(number) {
    if (number === parseInt(number)) {
        console.log(number);
    } else {
        console.log(`ERROR`);
    }
}

validateNumber(numberArray[0]);
validateNumber(numberArray[1]);
validateNumber(numberArray[2]);
validateNumber(numberArray[3]);
validateNumber(numberArray[4]);
validateNumber(numberArray[5]);

