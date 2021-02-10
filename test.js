function getRandomNunber() {
  let num = Math.floor(Math.random() * 9000 + 1000);
  //   Check the unique number
  while (new Set(num.toString().split('')).size !== 4) {
    console.log(num);
    num = Math.floor(Math.random() * 9000 + 1000);
  }
  return num;
}
getRandomNunber();
