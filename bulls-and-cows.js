function getRandomNunber() {
  let num = Math.floor(Math.random() * 9000 + 1000);
  //   Check the unique number
  while (new Set(num.toString().split('')).size !== 4) {
    num = Math.floor(Math.random() * 9000 + 1000);
  }
  return num;
}
getRandomNunber();
const message = {
  inputNumber: 'Enter your number(4 unique number):  ',
  invalidSyntax: 'Opps! Incorrect syntax(4 unique number):  ',
  wrongAnswer: 'Wrong Answer....:  ',
  moreAnswer: 'Try 1 more times...',
  rightAnswer: 'You got it !!  Gut job Amazing..',
};
function checkValidInput(playerNumber, notice) {
  const reg = /^\d+$/;
  while (
    new Set(playerNumber.split('')).size !== 4 ||
    !reg.test(playerNumber)
  ) {
    playerNumber = prompt(notice);
  }
  return playerNumber;
}
function checkValidGameMode(input) {
  while (!'eh'.includes(input.toLowerCase())) {
    input = prompt('Incorrect Syntax. Enter E(e) for Easy, H(h) for Hard: ');
  }
  return input;
}
function getBullandCows(sceretNumber, playerNumber) {
  let bulls = 0;
  let cows = 0;
  let found = sceretNumber
    .toString()
    .split('')
    .filter((item) => playerNumber.includes(item));
  for (let num of found) {
    found.length &&
    sceretNumber.toString().indexOf(num) === playerNumber.indexOf(num)
      ? bulls++
      : cows++;
  }
  return { bulls, cows };
}
function endGame(playerName) {
  console.log(`Thanks you ${playerName} , see u`);
  return;
}

function nextGame(playerName) {
  attemps = 0;
  let playAgain = prompt('Play again? (Y)... ');
  playAgain.toLowerCase() === 'y' ? startGame() : endGame(playerName);
}
let hardNumber = 10;
let attemps = 0;
let maxAttemps;
let playerName = prompt('Enter your Name:  ') || 'Player';
// START GAME //
function startGame() {
  let sceretNumber = getRandomNunber();
  console.log(sceretNumber);

  let gameMode = prompt('Enter E(e) for Easy, H(h) for Hard: ');
  gameMode = checkValidGameMode(gameMode);
  gameMode === 'e' ? (maxAttemps = 10000) : (maxAttemps = hardNumber);

  let playerNumber = prompt(message.inputNumber);
  playerNumber = checkValidInput(playerNumber, message.invalidSyntax);

  while (Number(playerNumber) !== sceretNumber) {
    attemps += 1;
    const { bulls, cows } = getBullandCows(sceretNumber, playerNumber);
    console.log(`You have chosen ${playerNumber}  `);
    console.log(
      message.wrongAnswer +
        `You tried ${attemps} times` +
        `${
          gameMode.toLowerCase() !== 'e'
            ? ` You got only ${maxAttemps - attemps} times`
            : 'go ahead ... U can do it'
        }`
    );
    console.log(`Hints : You got ${bulls} bulls and ${cows} cows`);
    console.log('========================================');
    if (attemps === maxAttemps) {
      console.log('You lose ...');
      return nextGame(playerName);
    } else {
      playerNumber = prompt(message.wrongAnswer);
      playerNumber = checkValidInput(playerNumber, message.invalidSyntax);
    }
  }
  console.log(message.rightAnswer);
  nextGame(playerName);
}
startGame();
