function preTest(input) {
  let variable = input;
  let preIncrementValue = variable.valueOf();
  let preIncrementInput = ++variable;
  let preIncrementInputType = typeof (preIncrementInput);
  return `Pre Increment Input: ${input} \ntype= ${preIncrementInputType}, input value = ${input.valueOf()}, value= ${preIncrementValue}, result= ${preIncrementInput}`;
}

function postTest(input) {
  let variable = input;
  let postIncrementValue = variable.valueOf();
  let postIncrementInput = variable++;
  let postIncrementInputType = typeof (postIncrementInput);
  return `Post Increment Input: ${input} \ntype= ${postIncrementInputType}, input value = ${input.valueOf()}, value= ${postIncrementValue}, result= ${postIncrementInput}`;
}

function parsedTest(input) {
  let variable = input;
  let parsedValue = variable.valueOf();
  let parsedInput = parseInt(variable) + 1;
  let parsedInputType = typeof (parsedInput);
  return `Parsed Int Input: ${input} \ntype= ${parsedInputType}, input value = ${input.valueOf()}, value= ${parsedValue}, result= ${parsedInput}`;
}

function floatParsedTest(input) {
  let variable = input;
  let floatParsedValue = variable.valueOf();
  let floatParsedInput = parseFloat(variable) + 1;
  let floatParsedInputType = typeof (floatParsedInput);
  return `Parsed Float Input: ${input} \ntype= ${floatParsedInputType}, input value = ${input.valueOf()}, value= ${floatParsedValue}, result= ${floatParsedInput}`;
}

function incrementPre(input) {
  return ++input;
}

function incrementPost(input) {
  return input++;
}

function preParsedInput(input) {
  return 1 + parseInt(input);
}
function postParsedInput(input) {
  return parseInt(input) + 1;
}

function floatPreParsedInput(input) {
  return parseFloat(input) + 1;
}

function floatPostParsedInput(input) {
  return 1 + parseFloat(input);
}

// console.log(`${incrementPre(1)}\n`);
// console.log(`${incrementPost(1)}\n`);
// console.log(`${preParsedInput(1)}\n`);
// console.log(`${postParsedInput(1)}`);
// console.log(`${floatPreParsedInput(1)}\n`);
// console.log(`${floatPostParsedInput(1)}\n`);

// console.log(`${incrementPre("1")}\n`);
// console.log(`${incrementPost("1")}\n`);
// console.log(`${preParsedInput("1")}\n`);
// console.log(`${postParsedInput("1")}\n`);
// console.log(`${floatPreParsedInput("1")}\n`);
// console.log(`${floatPostParsedInput("1")}\n`);

// console.log(`${incrementPre(true)}\n`);
// console.log(`${incrementPost(true)}\n`);
// console.log(`${preParsedInput(true)}\n`);
// console.log(`${postParsedInput(true)}\n`);
// console.log(`${floatPreParsedInput(true)}\n`);
// console.log(`${floatPostParsedInput(true)}\n`);
console.log(`${parsedTest(true)}\n`);
console.log(`${floatParsedTest(true)}\n`);
console.log(`${preTest(true)}\n`);
console.log(`${postTest(true)}\n`);


// console.log(`${incrementPre(false)}\n`);
// console.log(`${incrementPost(false)}\n`);
// console.log(`${preParsedInput(false)}\n`);
// console.log(`${postParsedInput(false)}\n`);
// console.log(`${floatPreParsedInput(false)}\n`);
// console.log(`${floatPostParsedInput(false)}\n`);
console.log(`${parsedTest(false)}\n`);
console.log(`${floatParsedTest(false)}\n`);
console.log(`${preTest(false)}\n`);
console.log(`${postTest(false)}\n`);
