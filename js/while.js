//**************************************************// INSTRUCTOR SOLUTION // **************************************************//
//**************************************************// MULTIPLY ACCUMULATOR BY 2 // **************************************************//
// let num = 1;
// while (num < 65536) {
//   num = 2 * num;
//   console.log(num);
// }

// let i = 1;
// while (i < 65536) {
//   i *= 2;
//   console.log(i);
// }

// Iterates 16 times
// Accumulator continuously multiplies by 2
// .reduce() would work better <maybe>

// let i = 1;
// let accumulator = 2;
// while (i <= 16) {
//
// }

//**************************************************// ICE CREAM CONE SALES // **************************************************//
function iceCream() {
  let conesTotal = Math.floor(Math.random() * 50) + 50;
  console.log(`${conesTotal} cones available.`);

  do {
    let eachCustomerOrder = Math.floor(Math.random() * 5) + 1;
    if (eachCustomerOrder <= conesTotal) {
      conesTotal -= eachCustomerOrder;
      console.log(`${eachCustomerOrder} cones sold.`);
      console.log(`${conesTotal} remaining.`);
    } else {
      eachCustomerOrder = conesTotal;
      console.log(`Only ${conesTotal} available ${eachCustomerOrder} sold.`);
      break;
    }
  } while (conesTotal > 0);
}

iceCream();
//**************************************************// INSTRUCTOR SOLUTION // **************************************************//
// let conesInventory = randomNumber(50, 100);
//
// do {
//   let conesRequested = randomNumber(1, 5);
//   if (conesRequested > conesInventory) {
//     console.log(`${conesRequested} not available, only ${conesInventory} available`);
//   } else {
//     console.log(`${conesRequested} sold....`);
//     conesInventory -= conesRequested;
//   }
//   console.log(`${conesInventory} left`)
// } while (conesInventory > 0);
// console.log(`All of the cones have been sold`);
