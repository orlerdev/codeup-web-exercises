const log = (num) => {
  if (num > 5) {
    return;
  }
  console.log(num);
  log(num + 1);
}
// log(1);

const randomUntilFive = (result = 0, count = 0) => {
  if (result === 5) {
    console.log(`The random result: ${result}`);
    console.log(`How many times random is executed: ${count}`);
    return;
  }
  result = randomNumber(1, 10);
  count++;
  randomUntilFive(result, count);
}
// randomUntilFive();

const factorialFunction = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialFunction(num -1);
  }
}
// factorialFunction(10);