// let num = 1;
// while (num < 65536) {
//   num = 2 * num;
//   console.log(num);
// }

function iceCream() {
  let conesTotal = Math.floor(Math.random() * 50) + 50;

  do {
    let eachCustomerOrder = Math.floor(Math.random() * 5) + 1;
    if (eachCustomerOrder <= conesTotal) {
    conesTotal -= eachCustomerOrder;
    console.log(`${eachCustomerOrder} cones sold.`);
    } else {
      eachCustomerOrder = conesTotal;
      console.log(`Only ${conesTotal} available ${eachCustomerOrder} sold.`);
      break;
    }
  } while (conesTotal > 0)
}
iceCream();