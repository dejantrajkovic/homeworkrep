function minMax(array) {
  let min = Math.min.apply(Math, array);
  let max = Math.max.apply(Math, array);
  console.log(max, min, min + max);
}
let testArray = [7, 3, 5, "hello"];
minMax(testArray);

function maxMin(array) {
  let max = array[0];
  let min = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index];
    } else if (array[index] < min) {
      min = array[index];
    }
  }
  console.log(max, min, min + max);
}

maxMin(testArray);
