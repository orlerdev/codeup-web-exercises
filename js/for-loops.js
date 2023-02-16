"use strict";
// (() => {
// const getRandomNumInRange = (lower = 0, upper = 10) => {
//   if (isNaN(lower) || isNaN(upper)) {
//     console.error("lower and upper must be valid numbers");
//     return;
//   }
//   lower = Math.ceil(lower);
//   upper = Math.floor(upper);
//   return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// };
// const isEven = (num) => num % 2 === 0;
// const isOdd = (num) => num % 2 !== 0;

function showMultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

//************************** INSTRUCTOR SOLUTION **************************//
//************************** CAN BE REFACTORED TO BE MORE CONCISE **************************//
const multiplicationTableFunction = (num) => {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    let mathPart = parseFloat(num) * i;
    let output = `${num} x ${i} = ${mathPart}\n`;
    table += output;
  }
  return table;
};
let tableForSeven = multiplicationTableFunction(7);
console.log(tableForSeven);

// showMultiplicationTable(7);

function tenRandom(lower, upper) {
  for (let i = 0; i <= 10; i++) {
    let randomNum = getRandomNumInRange(lower, upper);
    let final = isEven(randomNum) ? `${randomNum} is even` : `${randomNum} is odd`;
    console.log(final);
  }
}

// tenRandom(20, 200);

//************************** INSTRUCTOR SOLUTION **************************//
for (let i = 1; i <= 10; i++) {
  let myRandomNumber = getRandomNumberInRange(20, 200);
  if (isEven(myRandomNumber)) {
    console.log(`${myRandomNumber} is even.`);
  } else {
    console.log(`${myRandomNumber} is odd.`);
  }
}

function numRightAngle() {
  for (let i = 1; i <= 9; i++) {
    let varStr = i.toString();
    console.log(`${varStr.repeat(i)}`);
  }
}

// numRightAngle();

//************************** INSTRUCTOR SOLUTION **************************//

// loop 9 times
for (let i = 0; i < 9; i++) {
  let output = `${i + 1}`; // i.toString() would also work
  // loop again with i as declaration : condition is >= 0 : decrement
  for (let j = i; j > 0; j--) {
    let moreNumbers = `${i + 1}`
    output += moreNumbers
  }
  console.log(`${output}`);
}

function subFive() {
  for (let i = 100; i >= 5; i -= 5) {
    console.log(`${i}`);
  }
}

// subFive();
//************************** INSTRUCTOR SOLUTION **************************//
for (let i = 100; i > 0; i -= 5) {

}

// })()