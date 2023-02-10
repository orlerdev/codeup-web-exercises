// console.log("Hello from external JavaScript!");
// alert("Welcome to my Website!");
//
// let userFavColor = prompt("What is your favorite color?");
// alert(`Great, ${userFavColor} is my favorite color too!`);

/* Create a variable that holds a boolean value for each of the following conditions:
 The password must be at least 5 characters.
 The password must not include the username.
 The username must be no more than 20 characters.
 Neither the username nor password can start or end with whitespace.
*/

if (confirm("Would you like to complete the Username and Password Exercise?")) {
  let username;
  let validUserName = false;
  let password;
  let validPassword = false;

  while (!validUserName) {

    username = prompt("Please enter a username. Your username cannot exceed 20 characters.");
    if (username.length > 20 || username.startsWith(" ") || username.endsWith(" ")) {
      validUserName = false;
      alert("Invalid username. Please note requirements");
    } else {
      alert("Thank you");
      validUserName = true;
    }
  }

  while (!validPassword) {

    password = prompt("Please create a password. Your password must be at least 5 characters and cannot contain your username.");
    console.log(password.length, password.charAt(0), password.includes(username));
    if (password.length < 5 || password.startsWith(" ") || password.endsWith(" ") || password.includes(username)) {
      validPassword = false;
      alert("Please enter a valid password");
    } else {
      alert("Thank you");
      validPassword = true;
    }
  }
}

/*
Movies: The Little Mermaid, Brother Bear, and Hercules
Number of Days for each movie: 3, 5, 1
Price per movie: $3.00 per day
 */
if (confirm("Would you like to complete the Movie Rental Exercise?")) {
  let pricePerDay = parseFloat(prompt("How much does it cost to rent a movie for one day?"));
  let firstMovie = prompt("What is the name of the first movie?");
  let firstMovieCount = parseFloat(prompt(`How many days would you like to rent ${firstMovie}?`));
  if (!confirm("Are you sure?")) {
    firstMovieCount = parseFloat(prompt("Please enter the correct number of days."));
  }

  let secondMovie = prompt("What is the name of the second movie?");
  let secondMovieCount = parseFloat(prompt(`How many days would you like to rent ${secondMovie}?`));
  if (!confirm("Are you sure?")) {
    secondMovieCount = parseFloat(prompt("Please enter the correct number of days."));
  }

  let thirdMovie = prompt("What is the name of the third movie?");
  let thirdMovieCount = parseFloat(prompt(`How many days would you like to rent ${thirdMovie}?`));
  if (!confirm("Are you sure?")) {
    thirdMovieCount = parseFloat(prompt("Please enter the correct number of days."));
  }

  let totalCost = (firstMovieCount + secondMovieCount + thirdMovieCount) * pricePerDay;
  let userCost = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
  alert(`Thank you for your order. Your total will be ${userCost}.`);
}

/*
Google rate: $400.00 per hour
Amazon rate: $380.00 per hour
Facebook rate: $350.00 per hour
 */
if (confirm("Would you like to complete the Salary Exercise?")) {

  let googleRate = parseFloat(prompt("How much are you paid by Google per hour?"));
  let googleHours = parseFloat(prompt("Enter the number of hours that you worked for Google."));
  if (!confirm("Are you sure?")) {
    googleHours = parseFloat(prompt("Please enter the correct number of hours.")) * googleRate;
  }
  let googleEarnings = googleHours * googleRate;

  let amazonRate = parseFloat(prompt("How much are you paid by Amazon per hour?"));
  let amazonHours = parseFloat(prompt("Enter the number of hours that you worked for Amazon."));
  if (!confirm("Are you sure?")) {
    amazonHours = parseFloat(prompt("Please enter the correct number of hours.")) * amazonRate;
  }
  let amazonEarnings = amazonHours * amazonRate;

  let facebookRate = parseFloat(prompt("How much are you paid by Facebook per hour?"));
  let facebookHours = parseFloat(prompt("Enter the number of hours that you worked for Facebook."));
  if (!confirm("Are you sure?")) {
    facebookHours = parseFloat(prompt("Please enter the correct number of hours.")) * 350;
  }
  let facebookEarnings = facebookHours * facebookRate;

  let totalEarnings = (amazonEarnings + googleEarnings + facebookEarnings).toLocaleString("en-US", { style: "currency", currency: "USD" });

  alert(`Thank you. Your total earnings for the reported period are ${totalEarnings}.`);
}

/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
 */

if (confirm("Would you like to complete the Enrollment Exercise?")) {
  let classMax = parseInt(prompt("What is the maximum amount of students allowed to attend this class?"));
  if (!confirm("Are you sure?")) {
    classMax = parseInt(prompt("Please enter the correct maximum number of students."));
  }
  let currentClassCount = parseInt(prompt("What is the current number of students enrolled in this class?"));
  if (!confirm("Are you sure?")) {
    currentClassCount = parseInt(prompt("Please enter the correct number of students enrolled."));
  }
  let scheduleConflict = parseInt(prompt("Does the student have a schedule conflict? Enter 'yes' or 'no'."));
  if (!confirm("Are you sure?")) {
    scheduleConflict = parseInt(prompt("Please enter 'yes' or 'no'."));
  }
  scheduleConflict = scheduleConflict.toLowerCase() === "yes";
  let allowedToEnroll = (currentClassCount < classMax) && !scheduleConflict;

  allowedToEnroll ? alert("The student is allowed to enroll.") : alert("The student is not allowed to enroll at this time.");
}

if (confirm("Would you like to complete the Shopper Exercise?")) {
  let minCartValue = 2;
  let numberOfItems = parseInt(prompt("How many items are you purchasing?"));
  let premiumMember = prompt("Are you a premium member? Enter 'yes' or 'no'.");
  premiumMember = premiumMember.toLowerCase() === "yes";
  let offerExpired = prompt("Is the offer expired? Enter 'yes' or 'no'.");
  offerExpired = offerExpired.toLowerCase() === "yes";
  let canPurchase = (numberOfItems >= minCartValue && !offerExpired) || (premiumMember && !offerExpired);
  canPurchase ? alert(`The customer can purchase ${numberOfItems})`) : alert("The customer cannot purchase at this time.");

}
