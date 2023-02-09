console.log("Hello from external JavaScript!");
// alert("Welcome to my Website!");
//
// let userFavColor = prompt("What is your favorite color?");
// alert(`Great, ${userFavColor} is my favorite color too!`);

// Create a variable that holds a boolean value for each of the following conditions:
//
//   the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

let username;
let validUserName = false;
let password;
let validPassword = false;

while (!validUserName) {

  username = prompt("Please enter a username. Your username cannot exceed 20 characters.");
  if (username.length > 20 || username.charAt(0) === " ") {
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
  if (password.length < 5 || password.charAt(0) === " " || password.includes(username)) {
    validPassword = false;
    alert("Please enter a valid password");
  } else {
    alert("Thank you");
    validPassword = true;
  }
}
