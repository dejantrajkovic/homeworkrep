function arraySentence(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  console.log(result);
}

let sentence = ["Hello", " there", " students", " of", " SEDC", "!"];
arraySentence(sentence);
