// // function maxSubsetSum(arr) {
// //   let n = arr.length;
// //   let newArr = new Array(n);
// //   newArr[0] = arr[0];
// //   newArr[1] = Math.max(arr[1], newArr[0]);

// //   for (let i = 2; i < n; i++) {
// //     newArr[i] = Math.max(
// //       Math.max(arr[i], arr[i] + newArr[i - 2]),
// //       newArr[i - 1]
// //     );
// //   }
// //   console.log(newArr);
// //   return newArr[n - 1];
// // }

// // console.log(maxSubsetSum([6, 2, 8, 5, 7, 9, 20]));

// // function pow(a, b) {
// //   console.log(a + b);
// // }
// // if (true) {
// //   console.log(true);
// // }

// // var hello = hello;
// // console.log(hello);
// // function compareTriplets(a, b) {
// //   let aPoint = 0;
// //   let bPoint = 0;
// //   let result = [];
// //   for (let i = 0; i < 3; i++) {
// //     if (a[i] !== b[i]) {
// //       a[i] > b[i] ? aPoint++ : bPoint++;
// //     }
// //   }
// //   result.push(aPoint);
// //   result.push(bPoint);
// //   return result;
// // }

// function numSequence(num, x, y) {
//   let newArr = [];
//   let startNum;
//   let stepNum;
//   if (x === 'underfined') {
//     startNum = 1;
//   } else {
//     startNum = x;
//   }
//   if (y === 'underfined') {
//     stepNum = 1;
//   } else {
//     stepNum = y;
//   }
//   // let startNum = x === 0 ? x : x || 1;
//   // let stepNum = y === 0 ? y : y || 1;
//   console.log(startNum);
//   for (let i = 0; i < num; i++) {
//     newArr.push(startNum);
//     startNum += stepNum;
//   }
//   console.log(newArr);
//   return newArr;
// }
// numSequence(5, 0, 6);

// // mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// function mapping(arr) {
//   let newObj = {};
//   for (let word of arr) {
//     newObj[word] = word.toUpperCase();
//   }
//   console.log(newObj);
//   return newObj;
// }

// mapping(['a', 'v', 'y', 'z']);
// // uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"

// function uncensor(a, b) {
//   let x = 0;
//   let newArr = a.split('');
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === '*') {
//       newArr[i] = b[x];
//       x++;
//     }
//   }
//   return newArr.join('');
// }
// console.log(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'));

// function something(a) {
//   if (a[0] != 25) return 'NO';
//   let bills = {
//     25: 1,
//     50: 0,
//   };
//   for (let i = 1; i < a.length; i++) {
//     if (a[i] === 25) {
//       bills['25'] += 1;
//     } else if (a[i] == 50) {
//       bills['50'] += 1;
//       bills['25'] -= 1;
//     } else {
//       bills['50'] > 0
//         ? ((bills['25'] -= 1), (bills['50'] -= 1))
//         : (bills['25'] -= 3);
//     }
//     if (bills['25'] < 0) return 'NO';
//   }
//   return 'YES';
// }
// console.log(something([25, 50, 25, 100, 50]));

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const getRandom = () => {
//   let computer = Math.floor(Math.random() * 9000 + 1000);
//   let str = computer.toString();
//   for (let num of str) {
//     str.indexOf(num) !== str.lastIndexOf(num) ? (str = getRandom()) : str;
//   }
//   return str;
// };
// let computer = getRandom();
// let player = prompt('Hi! What is your number? ');

// const play = () => {
//   // CHECK INPUT Valid
//   let playArr = player.split('');
//   let playerSet = new Set(playArr);
//   console.log(player.length, playerSet.size);
//   if (player.length !== 4 || playerSet.size !== 4) {
//     player = prompt('Hi! enter correct syntax? ');
//     play();
//   }
//   // CHECK INPUT equal COMPUTER
//   else if (computer === player) {
//     console.log('congratulation');
//     return;
//   }
//   // Compare NOW !
//   else {
//     let bulls = 0;
//     let cows = 0;
//     let found = computer.split('').filter((item) => player.includes(item));
//     for (let num of found) {
//       found.length && computer.indexOf(num) === player.indexOf(num)
//         ? bulls++
//         : cows++;
//     }

//     let result = `Hint: ${bulls} bulls ${cows} cows`;
//     console.log(result);
//     player = prompt('Jus one more time?');
//     play();
//   }
// };
// play();

// Test IF ELSE

// console.log('hello 7');

// console.log('hello 8');

// console.log('hello 9');

// helloWorld(7);
function callback() {
  console.log('this is a callback');
}

function helloWorld(ey) {
  if (ey === 6) {
    setTimeout(() => {
      console.log('hello 6');
    }, 0);
  }

  return 6;
}
console.log(helloWorld(6));
