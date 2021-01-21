let userInput = parseInt(prompt(`How much money would you like to withdraw:`));

function atmMachine(userInput) {
  accountMoney = 100000;
  if (accountMoney >= userInput) {
    accountFormula = accountMoney - userInput;
    console.log(
      `Money withdrawn: ${userInput} , money left on your account: ${accountFormula}`
    );
  } else if (accountMoney < userInput) {
    alert(`Not enough money`);
  } else {
    alert(`Please input amount!!!`);
  }
}

atmMachine(userInput);
