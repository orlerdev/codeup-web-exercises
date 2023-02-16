(function () {
  "use strict";

  /**
   * TODO:
   * Create an array of 4 people's names and store it in a variable called
   * 'names'.
   */
  let names = ["Bruno", "Rhihanna", "Adele", "Boyce"];

  /**
   * TODO:
   * Create a log statement that will log the number of elements in the names
   * array.
   */
  console.log(`${names.length}`);

  /**
   * TODO:
   * Create log statements that will print each of the names individually by
   * accessing each element's index.
   */
  console.log(`Individual console.log: ${names[0]}`);
  console.log(`Individual console.log: ${names[1]}`);
  console.log(`Individual console.log: ${names[2]}`);
  console.log(`Individual console.log: ${names[3]}`);

  /**
   * TODO:
   * Write some code that uses a for loop to log every item in the names
   * array.
   */
  for (name of names) {
    console.log(`Shorthand console.log: ${name}`);
  }

  for (let i = 0; i < names.length; i++) {
    console.log(`For loop console.log: ${names[i]}`);
  }

  /**
   * TODO:
   * Refactor your above code to use a `forEach` loop
   */
  names.forEach((name) => console.log(`For Each console.log: ${name}`));

  /**
   * TODO:
   * Create the following three functions, each will accept an array and
   * return an an element from it
   * - first: returns the first item in the array
   * - second: returns the second item in the array
   * - last: returns the last item in the array
   *
   * Example:
   *  > first([1, 2, 3, 4, 5]) // returns 1
   *  > second([1, 2, 3, 4, 5]) // returns 2
   *  > last([1, 2, 3, 4, 5]) // return 5
   */
  const arr = [1, 2, 3, 4, 5];

  const first = (arr) => {
    return arr[0];
  };
  const second = (arr) => {
    return arr[1];
  };
  const third = (arr) => {
    return arr[4];
  };

  console.log(`${first(arr)} \n${second(arr)} \n${third(arr)}`);

})();
