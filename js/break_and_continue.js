const skipNum = () => {
  let userNum;
  while (true) {
    userNum = parseFloat(prompt("Enter an odd number between 1 and 50"));
    if (isOdd(userNum) && userNum >= 1 && userNum <= 50) {
      break;
    } else {
      alert("invalid number");
    }
  }
  for (let i = 1; i <= 50; i += 2) {
    if (i === userNum) {
      console.log(`Yikes! Skipping number: ${userNum}`);
      // continue;
    } else {
      console.log(`Here is an odd number: ${i}`);
    }
  }
};
// skipNum();

//************************** INSTRUCTOR SOLUTION **************************//
let userPrompt;
let userPromptNum;
while (true) {
  userPrompt = prompt(`Enter an ODD number between 1 and 50.`);
  userPromptNum = parseFloat(userPrompt);
  if (isOdd(userPromptNum) && userPromptNum >= 1 && userPromptNum <= 50) {
    break;
  }
}
for (let i = 1; i <= 50; i += 2) {
  if (i === userPromptNum) {
    console.log(`Yikes! Skipping number: ${i}`);
    continue; // skips to the next loop......won't execute the console.log() at the bottom, for this loop only.
  }
  console.log(`Here is an odd number: ${i}`);
}

//************************** ALTERNATIVE SOLUTION WITHOUT BREAK **************************//
let userPromptAlt = prompt(`Enter an ODD number between 1 and 50.`);
let userPromptNumAlt = parseFloat(userPromptAlt);
while (isOdd(userPromptNumAlt) && userPromptNumAlt >= 1 && userPromptNumAlt <= 50) {
  userPromptAlt = prompt(`Enter an ODD number between 1 and 50.`);
  userPromptNumAlt = parseFloat(userPromptAlt);
}
for (let i = 1; i <= 50; i += 2) {
  if (i === userPromptNumAlt) {
    console.log(`Yikes! Skipping number: ${i}`);
    continue; // skips to the next loop......won't execute the console.log() at the bottom, for this loop only.
  }
  console.log(`Here is an odd number: ${i}`);
}


