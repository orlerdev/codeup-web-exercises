
const skipNum = () => {
  let userNum;
  while (true) {
    userNum = parseFloat(prompt("Enter an odd number between 1 and 50"));
    if (isOdd(userNum) && userNum > 1 && userNum <= 50) {
      break;
    } else {
      alert("invalid number");
    }
  }

  for (let i = 1; i <= 50; i+=2) {
    if (i === userNum) {
      console.log(`Yikes! Skipping number: ${userNum}`);
      continue;
    } else {
      console.log(`Here is an odd number: ${i}`)
    }
  }

}
// skipNum();