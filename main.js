// GET RANDOM NUMBER FOR COMPUTER
function getRandom() {
  let randomN = Math.floor(Math.random() * 9000 + 1000);
  let str = randomN.toString();
  for (let num of str) {
    str.indexOf(num) !== str.lastIndexOf(num) ? (str = getRandom()) : str;
  }
  return str;
}
let computer = getRandom();
console.log(computer);
// KEEP TRACKING ATTEMPS UNTIL PLAYER SOLVED THE PUZZLE
let attemps = 0;
// GET USER NAME
let playerName = prompt('Hello! What is your name? ') || 'player';
//SET GAME LEVEL
let hardMode = 3;
let gameMode = prompt('Select a game mode: Easy or Difficult ? (E / D):  ');
let maxAttemps = null;
let player;
checkGameMode();
function checkGameMode() {
  if (gameMode === 'E' || gameMode === 'e') {
    maxAttemps = 1000;
    //PLAYER ENTER GUESS NUMBER
    player = prompt(`Hi ${playerName}! Take a guess: `);
    validInput(player);
  } else if (gameMode === 'D' || gameMode === 'd') {
    maxAttemps = hardMode;
    //PLAYER ENTER GUESS NUMBER
    player = prompt(`Hi ${playerName}! Take a guess: `);
    validInput(player);
  } else {
    gameMode = prompt('Please enter : E(e) or D(d)  ');
    checkGameMode();
  }
}
// CHECK VALID INPUT
function validInput(player) {
  for (let num of player) {
    if (
      player.length !== 4 ||
      player.indexOf(num) !== player.lastIndexOf(num) ||
      !'0123456789'.includes(num) // numbers Only
    ) {
      //Recall to Valid input
      player = prompt('Please enter 4 - digit number with unique digits:  ');
      validInput(player);
      // IMPORTANT . without BREAK .... code still check another num and something was not expected !!!
      break;
    }
  }
  play(player);
}
// GIVE HINTS
function getHint() {
  let bulls = 0;
  let cows = 0;
  let found = computer.split('').filter((item) => player.includes(item));
  for (let num of found) {
    found.length && computer.indexOf(num) === player.indexOf(num)
      ? bulls++
      : cows++;
  }
  /// MESSAGES WHEN PLAYER HITS NO DIGITS
  const messages = [
    'That was impressive!',
    "That's a great job!",
    "You're doing awesome!",
    'You must have been practicing!',
    "You're smarter than you think!",
  ];
  if (bulls === 0 && cows === 0) {
    let randomMes = Math.floor(Math.random() * messages.length);
    console.log(messages[randomMes]);
  }
  let result = `Hint: ${bulls}  bulls(correct: value and position) ${cows} cows(correct: value)`;
  console.log(result);
}
// NOTICE HOW MANY TIMES LEFT IN HARD MODE
function getNotice() {
  let notice =
    maxAttemps !== hardMode
      ? `${attemps} attemps`
      : `${attemps} attemps. You have ${maxAttemps - attemps} times left!`;
  console.log(notice);
  console.log('====================================================');
}
//CONTINUE PLAYING AND GO TO THE NEXT ROUND
function toNextRound() {
  let nextRound = prompt('Do you want to play again? (Y/N):  ');
  if (nextRound === 'Y' || nextRound === 'y') {
    attemps = 0;
    getRandom();
    computer = getRandom();
    console.log(computer);
    gameMode = prompt(
      'Select a game mode: Easy or Difficult(Required)? (E / D):  '
    );
    checkGameMode();
  } else {
    return console.log('See you later');
  }
}
//START GAME
function play(player) {
  attemps++;
  //// COMPARE INPUT TO COMPUTER'S VALUE
  if (player === computer) {
    console.log(`Incredible ${playerName}! You win`);
    /// ASK IF PLAYER WANT TO PLAY AGAIN
    return toNextRound();
  }
  //CHECK GAME OVER CONDITION ON HARD MODE
  if (attemps === maxAttemps) {
    console.log(`Opps!! GameOver ..Correct answer is ${computer}. `);
    return toNextRound();
  }
  // CASE : NOT MATCH => GIVE HINT TO PLAYER
  console.log(`You have chosen : ${player}`);
  getHint();
  // POP UP COUNTDOWN NOTICE IF PLAYER CHOOSE HARD MODE
  getNotice();
  // CONTINUE GAME IF ANSWER WRONG IS
  player = prompt(` ${playerName}, guess again?:   `);
  validInput(player);
  play();
}
