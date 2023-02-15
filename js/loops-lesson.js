"use strict";
// IIFE - Immediately Invoked Function Expression
(() => {
  // let i = 0;
  // while (i <= 10) {
  //   console.log(`Log # ${i}`);
  //   i++;
  // }

  // do {
  //   console.log(`Log # ${i}}`);
  //   i++;
  // } while (i <= 10);

  const factorialLoop = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  };

  // console.log(factorialLoop(5));

  const buildPyramid = (rows) => {
    // loop through rows
    let pyramid = "";
    for (let i = 1; i <= rows; i++) {
      let row = "";
      // loop to add spaces
      for (let j = 1; j <= rows - i; j++) {
        row += " ";
      }
      // loop to add asterisks
      for (let k = 0; k < 2 * i - 1; k++) {
        row += "*"
      }
      pyramid += `\n${row}`;
      console.log(row);
    }
  };

  buildPyramid(5);

})();