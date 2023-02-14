//*************************************************************************  IDENTITY EXERCISE> ********************************************************** */
const identity = (input) => {
  return input;
};

//*************************************************************************  RANDOM NUMBER RANGE EXERCISE> ********************************************************** */
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//*************************************************************************  FIRST CHAR EXERCISE> ********************************************************** */
const first = (input) => input.charAt(0);

//*************************************************************************  LAST CHAR EXERCISE> ********************************************************** */
const last = (input) => input.charAt(input.length - 1);

//*************************************************************************  EXERCISE> ********************************************************** */
const rest = (input) => input.slice(1);
//*************************************************************************  EXERCISE> ********************************************************** */

const reverse = (input) => input.split("").reverse().join("");
//*************************************************************************  STRING REVERSE EXERCISE> ********************************************************** */

const reverse2 = (input) => {
  let reverse = input.split("");
  let reversed = [];
  for (let i = reverse.length - 1; i >= 0; i--) {
    reversed.push(reverse[i]);
  }
  return reversed.join("");
};
//************************************************************************* IS NUMERIC EXERCISE> ********************************************************** */
const isNumeric = (input) => !isNaN(input);

//*************************************************************************  STRING LENGTH EXERCISE> ********************************************************** */
const count = (input) => input.length;

//*************************************************************************  ADD EXERCISE> ********************************************************** */
const add = (a, b) => a + b;

//*************************************************************************  SUBTRACT EXERCISE> ********************************************************** */
const subtract = (a, b) => a - b;

//*************************************************************************  MULTIPLY EXERCISE> ********************************************************** */
const multiply = (a, b) => a * b;

//*************************************************************************  DIVIDE EXERCISE> ********************************************************** */
const divide = (numerator, denominator) => numerator / denominator;

//*************************************************************************  REMAINDER EXERCISE> ********************************************************** */
const remainder = (number, divisor) => number % divisor;

//*************************************************************************  SQUARE EXERCISE> ********************************************************** */
const square = (a) => a * a;

//*************************************************************************  SQUARE W/ MATH.POW() EXERCISE> ********************************************************** */
const square2 = (a) => Math.pow(a, 2);

//*************************************************************************  EXERCISE> ********************************************************** */
const sumOfSquares = (a, b) => square(a) + square2(b);
// console.log(sumOfSquares(2, 3));

//*************************************************************************  DO MATH EXERCISE> ********************************************************** */
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
};
//*************************************************************************  COUNT WHITE SPACE EXERCISE> ********************************************************** */
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
};
// console.log(countWhitespace(" hello world "));

//*************************************************************************  TWO STRINGS EXERCISE> ********************************************************** */
function aTaleOfTwoStrings(string1, string2) {
  if (string1.includes(string2)) {
    return string1.replace(string2, "");
  } else if (string1.includes(string2)) {
    return string1.replace(/[{string2}]/, "");
  } else {
    return string1;
  }
}

// console.log(aTaleOfTwoStrings("hello world world", "cat"));

//*************************************************************************  LAST LETTER VERIFY EXERCISE> ********************************************************** */
function lastLetterVerify(str) {
  let strArray = str.split("");
  const lastLetterArr = strArray.filter((element) => /[a-z]/i.test(element));
  return lastLetterArr[lastLetterArr.length - 1] === "a";
}

//*************************************************************************  LAST LETTER VERIFY 2 EXERCISE> ********************************************************** */
const letterVerify = (str) => {
  let strArr = str.split("");
  const lastLetter = strArr.findLast((element) => /[a-z]/i.test(element));
  return lastLetter === "a";
};
// console.log(lastLetterVerify("hello worl a!!!@#$%@  "));
// console.log(letterVerify("hello world !!!a@#$%@  "))

//*************************************************************************  WHITE SPACE BEGIN EXERCISE> ********************************************************** */
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
};
// console.log(whiteSpaceBeginning("hello world"));

//*************************************************************************  RETURN TRUE EXERCISE> ********************************************************** */
const returnTrueMessage = () => "Hey, it's true!";

//*************************************************************************  RETURN FALSE EXERCISE> ********************************************************** */
const returnFalseMessage = () => "Hey, it's false!";

//*************************************************************************  RETURN MESSAGE EXERCISE> ********************************************************** */
const returnMessage = (fn) => fn();
// console.log(returnMessage(returnTrueMessage));
// console.log(returnMessage(returnFalseMessage));

//*************************************************************************  LOGIN USER VALIDATION EXERCISE> ********************************************************** */
function willLoginUser(username, password, userAge, adminUser) {
  return adminUser && username !== password || userAge >= 18 && username !== password;
}
// console.log(willLoginUser("codeytheduck", "codeytheduck", 18, true));

//*************************************************************************  ADDITIONAL EXERCISES> ********************************************************** */
const isOdd = (num) => num % 2 !== 0;
const isEven = (num) => num % 2 === 0;
const isFive = (input) => input === 5;
const addFive = (input) => input + 5;
const isMultipleOfFive = (input) => input % 5 === 0;
const isThree = (input) => input === 3;
const isMultipleOfThree = (input) => input % 3 === 0;
const isMultipleOfThreeAndFive = (input) => input % 3 === 0 && input % 5 === 0;
const isMultipleOf = (target, n) => target % n === 0;
const isTrue = (input) => input === true;
const isFalse = (input) => input === false;
const isTruthy = (input) => !!input;
const isFalsy = (input) => !input;
const isVowel = (input) => /[aeiou]/i.test(input);
const isConsonant = (input) => !/[aeiou]/i.test(input);
const isCapital = (input) => /[A-Z]/.test(input);
const isLowerCase = (input) => input === input.toLowerCase();
console.log(isLowerCase("Hello World"));
const hasLowerCase = (input) => /[a-z]/.test(input);
console.log(hasLowerCase("Hello World"));
const isSpace = (input) => input === " ";
const isZero = (input) => input === 0;
const notZero = (input) => input !== 0;
const lowerCase = (input) => input.toLowerCase();
const double = (input) => input * 2;
const triple = (input) => input * 3;
const quadruple = (input) => input * 4;
const half = (input) => input / 2;
const squareRoot = (input) => Math.sqrt(input);


