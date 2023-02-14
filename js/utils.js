"use strict";
(() => {
// IIFE - Immediately Invoked Function Expression
//
// *TODO: Even or Odd Numbers
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

// *TODO: Date validation
const isDateValid = (date) => {
  return !Number.isNaN(date.getTime());
};

// *TODO: Date Reformatting
function reformatDate(date) {
  let today = new Date();
  let year = today.getFullYear();
  let dateParts = date.split(" ");
  let month = dateParts[1].split("/")[0];
  let day = dateParts[1].split("/")[1];
  let newDateString = `${month}/${day}/${year}`;
  if (month === 12 && today.getMonth() === 0) {
    year -= 1;
    newDateString = `${month}/${day}/${year}`;
  }
  return newDateString;
}

// *TODO: Currency Formatting
const formatCurrency = (num, lang="en", country="US", style="currency", currency="USD") => {
  return parseFloat(num).toLocaleString(`${lang}-${country}`, { style: style, currency: currency });
}

// *TODO: Do something "x" number of times
const times = (times, func) => {
  if (isNaN(times)) {
    console.error("times to run must be specified");
    return;
  }
  if (typeof func !== "function") {
    console.error(`func must be a vaild function, ${typeof func} provided`);
    return;
  }
  Array.from(Array(times)).forEach(() => {
    func();
  });
};
// times(3, () => console.log("hello"));

// *TODO: Generate a random number within a range
const getRandomNumberInRange = (lower = 0, upper = 10) => {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return;
  }
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

// *TODO: Shorten a string with ellipses
const shorten = (text, length = 10, ellipsisCount = 3) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`expecting a string, ${typeof text} provided`);
    return "";
  }
  if (isNaN(length) || isNaN(ellipsisCount)) {
    console.error("length and ellipsisCount must be valid numbers");
    return;
  }

  if (text.length <= length) {
    return text;
  }
  const ellipsis = Array.from(Array(ellipsisCount)).map(() => ".").join("");
  return `${text.substr(0, length)}${ellipsis}`;
};
// shorten("I am some text", 4, 2);

// *TODO: Remove duplicates from an Array
const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    console.error(`array expected, ${typeof arr} provided`);
    return;
  }
  return [...new Set(arr)];
};
// removeDuplicates(["Tom", "Simon", "Tom", "Sarah"]);

// *TODO: Debounce (delay) a function
const debounce = (func, timeout = 2500) => {
  if (typeof func !== "function") {
    console.error(`func must be a vaild function, ${typeof func} provided`);
    return;
  }
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timout);
  };
};

// *TODO: Measure the performance of a function
const measureTime = (func, label = "default") => {
  if (typeof func !== "function") {
    console.error(`func must be a vaild function, ${typeof func} provided`);
    return;
  }
  console.time(label);
  func();
  console.timeEnd(label);
};

// measureTime("labelOfFunctionTest", function);
function measurePerformance(name, fn, ...args) {
  if (typeof fn !== "function") {
    console.error(`Provide a valid function, ${typeof fn} provided`);
    return;
  }
  console.time(name);
  fn.bind(this, ...args);
  console.timeEnd(name);
}

// *TODO: Slugify a string
const slugify = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof str} provided`);
    return str;
  }
  return text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
// slugify("Hello, everyone!");

// *TODO: CamelCase to SnakeCase
const camelToSnakeCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
// camelToSnakeCase("camelCaseToSnakeCase");

// *TODO: snakeToCamelCase("snake_case_to_camel_case");
const snakeToCamelCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  text.toLowerCase().replace(/([-_][a-z])/g, group => group.toUpperCase().replace("-", "").replace("_", ""));
};

// Email validation
const emailIsValid = (email) => {
  if (!(typeof email === "string" || email instanceof String)) {
    console.error(`string expected, ${typeof email} provided`);
    return false;
  }
  const expression = /\S+@\S+\.\S+/;
  return expression.test(email);
};
// emailIsValid("somebody@somewhere.com"); <true>
// emailIsValid("nobody@nowhere"); <false>

// *TODO: Convert a number to a currency
const convertToCurrency = (num, currency = "USD", locale = "en-US") => {
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency: currency });
  return formatter.format(num);
};

// *TODO: Convert a HTML string to a DOM Object
function parseStringAsHtml(content, selector) {
  const domParser = new DOMParser();
  const parsed = domParser.parseFromString(content, "text/html");
  return parsed.querySelector(selector);
}

// *TODO: Convert Form Data to JSON
function convertFormdataToJsonObject(formData) {
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (Object.hasOwnProperty.call(data, key)) {
      const oldValue = data[key];
      if (!Array.isArray(data[key])) {
        data[key] = [];
        data[key].push(oldValue);
      }
      data[key].push(value);
      continue;
    }
    data[key] = value;
  }
  return data;
}

/*
*TODO: Calculate total age of all users using reduce function
 */
const users = [
  { name: "Marie", age: 25 },
  { name: "Ken", age: 22 },
  { name: "Sara", age: 29 },
  { name: "Geoff", age: 30 }
];
// users.reduce((total, currentUser) => total + currentUser.age, 0);

const reducer = (total, currentUser) => {
  console.log("current total:", total);
  console.log("current user:", currentUser);
  console.log("\n");
  return total + currentUser.age;
};
// users.reduce(reducer, 0);


})();



