"use strict";
// (() => {
const getRandomNumInRange = (lower = 0, upper = 10) => {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return;
  }
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

  function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  // showMultiplicationTable(7);

function tenRandom(lower, upper) {
  for (let i = 0; i <= 10; i++) {
    let randomNum = getRandomNumInRange(lower, upper);
    let final = isEven(randomNum) ? `${randomNum} is even` : `${randomNum} is odd`;
    console.log(final)
  }
}
// tenRandom(20, 200);

function numRightAngle() {
    for (let i = 1; i <= 9; i++) {
      let varStr = i.toString();
      console.log(`${varStr.repeat(i)}`)
    }
}
// numRightAngle();

function subFive() {
    for (let i = 100; i >= 5; i-=5) {
      console.log(`${i}`);
    }
}
// subFive();




// })()