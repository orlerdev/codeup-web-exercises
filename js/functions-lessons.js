"use strict";
// Always wrap your code in an IIFE (Immediately Invoked Function Expression)
(() => {
// traditional function declaration
// hoisted function
// can be declared anywhere in the code and will still work

  function sayHello() {
    console.log("Hello");
  }

  sayHello();

// arrow function declaration
// not hoisted
// must be declared before it is called
  const helloWorld = () => {
    console.log("Hello World");
  };

  helloWorld();

  const helloAlt = (name) => {
    console.log(`Hello ${name}.`);
  };

  helloAlt("John");
  helloAlt("Jane");
  helloAlt("Jared");

  const anotherHello = (name) => {
    return `Hello ${name}.`;
  };

  let firstHello = anotherHello("John");
  let secondHello = anotherHello("Jane");
  let thirdHello = anotherHello("Jared");

  console.log(firstHello);
  console.log(secondHello);
  console.log(thirdHello);

  const parseDiscordName = (name) => {
    let guildCharEnd = name.indexOf("]") + 1;
    let guildName = name.substring(0, guildCharEnd);
    let userName = name.substring(guildCharEnd);
    let message = `The user's name is ${userName} and their guild is ${guildName}.`;
    console.log(message);
    let nameArray = [userName, guildName];
    let altMessage = `The user's name is ${nameArray[0]} and their guild is ${nameArray[1]}.`;
    console.log(altMessage);
    return nameArray;
  };

  let discordName = parseDiscordName("[AMCX]Jared");
  console.log(discordName);
  console.log(discordName[0]);
  console.log(discordName[1]);

// variables declared within a function are only accessible within that function (block scope)
  const highFive = (name1, name2) => {
    let message = `${name1} gives ${name2} a high five!`;
    return message;
  };

// return statement and curly braces are optional if the function is only one line
  const altHighFive = (name1, name2) => `${name1} gives ${name2} a high five!`;

// regular arrow function
  let firstRound = highFive("Jojo", "Jackson");
  console.log(firstRound);
  console.log(highFive("Penny", "Dana"));

// implicit return arrow function
  let secondRound = altHighFive("Jojo", "Jackson");
  console.log(secondRound);
  console.log(altHighFive("Penny", "Dana"));

  /*
  Create an arrow function isEven(num) that takes an integer as an argument.
  The function should return true if the number is even and false if it is not.
   */

  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => {
    let result = num % 2 !== 0;
    return result;
  }

  let firstOddTry = isOdd(2);
  let secondOddTry = isOdd(3);
  console.log(firstOddTry);
  console.log(secondOddTry);
  let firstTry = isEven(2);
  let secondTry = isEven(3);
  console.log(firstTry);
  console.log(secondTry);

  let peopleCount = 46;
  console.log(isEven(peopleCount));
  console.log(isOdd(peopleCount));

// ANONYMOUS FUNCTIONS

// IIFE - Immediately Invoked Function Expression arrow function.
  (() => {
    // variables are block scoped
    // any functionality here is run immediately
  })();
// IIFE - Immediately Invoked Function Expression regular function.
  (function () {
    // variables are block scoped
    // any functionality here is run immediately
  })();

})();
