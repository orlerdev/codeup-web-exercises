const identity = (input) => {
  return input;
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const first = (input) => input.charAt(0);
const last = (input) => input.charAt(input.length - 1);

const rest = (input) => input.slice(1);

const reverse = (input) => input.split("").reverse().join("");
const reverse2 = (input) => {
  let reverse = input.split("");
  let reversed = [];
  for (let i = reverse.length - 1; i >= 0; i--) {
    reversed.push(reverse[i]);
  }
  return reversed.join("");
}

const isNumeric = (input) => !isNaN(input);

const count = (input) => input.length;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (numerator, denominator) => numerator / denominator;
const remainder = (number, divisor) => number % divisor;
const square = (a) => a * a;
const square2 = (a) => Math.pow(a, 2);

const sumOfSquares = (a, b) => square(a) + square2(b);
// console.log(sumOfSquares(2, 3));

const doMath = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "%":
      return remainder(a, b);
      break;
    case "^":
      return square(a);
      break;
    default:
      return "Invalid operator";
  }
}

const countWhitespace = (input) => {
  let whitespace = input.split("");
  let whitespaceStart = 0;
  let whitespaceEnd = 0;
  for (let i = 0; i < whitespace.length; i++) {
    if (whitespace[i] !== " ") {
      break;
    } else {
      whitespaceStart++;
    }
  }
  for (let j = whitespace.length - 1; j < whitespace.length; j--) {
    if (whitespace[j] !== " ") {
      break;
    } else {
      whitespaceEnd++;
    }
  }
  return `There are ${whitespaceStart} whitespace characters at the beginning and ${whitespaceEnd} whitespace characters at the end of the string.`;
}
// console.log(countWhitespace(" hello world "));

function aTaleOfTwoStrings(string1, string2) {
  if (string1.includes(string2)) {
    return string1.replace(string2, "");
  } else if (string1.includes(string2)) {
    return string1.replace(/[{string2}]/, "");
    }
    else {
      return string1;
    }
}
// console.log(aTaleOfTwoStrings("hello world world", "cat"));

function lastLetterVerify(str) {
  let strArray = str.split("");
  const lastLetterArr = strArray.filter((element) => /[a-z]/i.test(element));
  return lastLetterArr[lastLetterArr.length - 1] === "a";
}

const letterVerify = (str) => {
  let strArr = str.split("");
  const lastLetter = strArr.findLast((element) => /[a-z]/i.test(element));
  return lastLetter === "a";
}
  // console.log(lastLetterVerify("hello worl a!!!@#$%@  "));
  // console.log(letterVerify("hello world !!!a@#$%@  "))
const whiteSpaceBeginning = (str) => {
  let strArr = str.split("");
  let whitespace = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      whitespace++;
    } else {
      return whitespace;
    }
  }
    return whitespace;
}
// console.log(whiteSpaceBeginning("hello world"));

const returnTrueMessage = () => "Hey, it's true!";
const returnFalseMessage = () => "Hey, it's false!";
const returnMessage = (fn) => fn();
// console.log(returnMessage(returnTrueMessage));
// console.log(returnMessage(returnFalseMessage));


function willLoginUser(username, password, userAge, adminUser) {
  return adminUser && username !== password || userAge >= 18 && username !== password;
}
// console.log(willLoginUser("codeytheduck", "codeytheduck", 18, true));

