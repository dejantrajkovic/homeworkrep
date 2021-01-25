let firstName = ["Bob", "Mike"];
let lastName = ["Ross", "Tyson"];

function fullName(firstName, lastName) {
  for (let i = 0; i < firstName.length; i++) {
    console.log(`${i + 1}.${firstName[i]} ${lastName[i]}`);
  }
}

fullName(firstName, lastName);
