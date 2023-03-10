let a = 1;
// console.log(a); // 1

let b = a++; // post-increment, so it will add 1 after the next line
// console.log(a++);
// console.log(b); // 1

let c = ++a; // pre-increment, so it will add 1 before the next line
// console.log(++a);
// console.log(c); // 3

// what is the value of a, b, and c?

let d = "hello";
let e = false;

// console.log(d++); // NaN
// console.log(e++); // 1 (JS will interpret false as 0 since 0 is a falsy value))

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// console.log(perplexed + 2); // NaN

let price = 2.7;
// price.toFixed(2);
// console.log(price.toFixed(2)); // "2.70"

let priceString = "2.7";
// price.toFixed(2); // typeof string
// console.log(price.toFixed(2)); // error, cannot call toFixed() on a string
// console.log(parseFloat(price).toFixed(2)); // "2.70" (will work because price is parsed first)

isNaN(0); // false

isNaN(1); // false

isNaN(""); // true

isNaN("string"); // true

isNaN("0"); // true

isNaN("1"); // true

isNaN("3.145"); // true

isNaN(Number.MAX_VALUE); // false

isNaN(Infinity); // false, typeof Infinity === number

isNaN("true"); // true

isNaN(true); // false

isNaN("false"); // true

isNaN(false); // false

// to illustrate why the isNaN() function is needed:
NaN == NaN; // false

!true; // false

!false; // true

!!true; // true

!!false; // false

!!0; // false

!!-0; // false

!!1; // true

!!-1; // true

!!0.1; // true

!!"hello"; // true

!!""; // false

!!""; // false

!!"false"; // true

!!"0"; // true

let sample = "Hello Codeup";
let sampleLength = sample.length;
// console.log(sample.toLowerCase(), sample.toUpperCase());

sample = sample + " Students";
let sampleAlt = `${sample} Students`;
// console.log(sampleAlt);
sample = sample.replace("Students", "Class");

let lowerCaseCIndex = sample.indexOf("c");
let upperCaseCIndex = sample.indexOf("C");

let request = sample.substring(upperCaseCIndex, sample.indexOf("p") + 1);
// console.log(request);

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let pricePerDay = 3;
let totalPrice = pricePerDay * (littleMermaid + brotherBear + hercules);

/* console.log(`The price per day for each movie is $${pricePerDay}.
The total number of days for all movies is ${littleMermaid + brotherBear + hercules}.
The total cost to the customer is ${totalPrice}.`);
  */
// console.log(`The total cost of renting the movies is $${totalPrice.toFixed(2)}.`);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePay = 400 * 6;
let amazonPay = 380 * 4;
let facebookPay = 350 * 10;
let totalPay = googlePay + amazonPay + facebookPay;
let altTotalPay = totalPay.toLocaleString("en-Us", {style: "currency", currency: "USD"});
// console.log(`Your total pay for the week would be $${totalPay.toFixed(2)}.`);
console.log(`Your total pay for the week would be ${altTotalPay}.`);

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let classMax = 30;
let classCount = 24;
let availableSeats = classCount < classMax;
let schedule = false;
let enrollment = availableSeats && !schedule;
// console.log(enrollment);

let classSpaceAlt = true;
let scheduleAlt = false;
let enrollmentAlt = classSpaceAlt && !scheduleAlt;
// console.log(enrollmentAlt);
// console.log(enrollment);

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
let itemCount = 3;
let offerValid = true;
let premiumMembers = false;
let productOffer = premiumMembers || (itemCount > 2 && offerValid);
// console.log(productOffer);

// Create a variable that holds a boolean value for each of the following conditions:
//
//   the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

let username = "codeup";
let password = "notastrongpassword";
let validCharMin = true;
let validUserNameReq = true;
let validUserCharMax = true;
let validPassword = true;
let validUsername = true;
let passCharCount = password.length;
let userCharCount = username.length;

if (password.includes(username)) {
  validPassword = false;
} else if (passCharCount >= 5 && password.charAt(0) !== " " && password.charAt(passCharCount - 1) !== " ") {
  validPassword = true;
}

if (userCharCount < 21 && username.charAt(0) !== " " && username.charAt(userCharCount - 1) !== " ") {
  validUsername = true;
}

// console.log(validPassword, validUsername);

// console.log(!!"0");