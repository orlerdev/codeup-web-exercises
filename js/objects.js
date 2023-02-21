(function () {
  "use strict";

  /**
   * TODO:
   * Create an object with firstName and lastName properties that are strings
   * with your first and last name. Store this object in a variable named
   * `person`.
   *
   * Example:
   *  > console.log(person.firstName) // "Rick"
   *  > console.log(person.lastName) // "Sanchez"
   */

  const person = {
    firstName: "Jared",
    lastName: "Orler",
    sayHello: function () {
      return `Hello ${this.firstName} ${this.lastName}`;
    }
  };

  console.log(person.sayHello());

  /**
   * TODO:
   * Add a sayHello method to the person object that returns a greeting using
   * the firstName and lastName properties.
   * console.log the returned message to check your work
   *
   * Example
   * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
   */

  /** TODO:
   * HEB has an offer for the shoppers that buy products amounting to
   * more than $200. If a shopper spends more than $200, they get a 12%
   * discount. Write a JS program, using conditionals, that logs to the
   * browser, how much Ryan, Cameron and George need to pay. We know that
   * Cameron bought $180, Ryan $250 and George $320. Your program will have to
   * display a line with the name of the person, the amount before the
   * discount, the discount, if any, and the amount after the discount.
   *
   * Uncomment the lines below to create an array of objects where each object
   * represents one shopper. Use a foreach loop to iterate through the array,
   * and console.log the relevant messages for each person
   */

  const shoppers = [
    { name: "Cameron", amount: 180 },
    { name: "Ryan", amount: 250 },
    { name: "George", amount: 320 }
  ];

  shoppers.forEach(shopper => {
    const discount = shopper.amount > 200 ? shopper.amount * .12 : 0;
    const total = shopper.amount - discount;
    console.log(`${shopper.name} -- total: ${formatCurrency(shopper.amount)}, discount: ${formatCurrency(discount)}, final total: ${formatCurrency(total)}`);
  });

  /** TODO:
   * Create an array of objects that represent books and store it in a
   * variable named `books`
   . Each object should have a title and an author
   * property. The author property should be an object with properties
   *
   `firstName`
   and
   `lastName`
   . Be creative and add at least 5 books to the
   * array
   *
   * Example:
   * > console.log(books[0].title) // "The Salmon of Doubt"
   * > console.log(books[0].author.firstName) // "Douglas"
   * > console.log(books[0].author.lastName) // "Adams"
   */

  const books = [
    {
      title: "Mexican Gothic",
      author: {
        firstName: "Sylvia",
        lastName: "Moreno"
      }
    }, {
      title: "It Starts With Us",
      author: {
        firstName: "Colleen",
        lastName: "Hoover"
      }
    }, {
      title: "Hell Bent",
      author: {
        firstName: "Leigh",
        lastName: "Bardugo"
      }
    }, {
      title: "The House In The Pines",
      author: {
        firstName: "Ana",
        lastName: "Reyes"
      }
    }, {
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: {
        firstName: "Garbrielle",
        lastName: "Zevin"
      }
    }
  ];

  /**
   * TODO:
   * Loop through the books array and output the following information about
   * each book:
   * - the book number (use the index of the book in the array)
   * - the book title
   * - author's full name (first name + last name)
   *
   * Example Console Output:
   *
   *      Book # 1
   *      Title: The Salmon of Doubt
   *      Author: Douglas Adams
   *      ---
   *      Book # 2
   *      Title: Walkaway
   *      Author: Cory Doctorow
   *      ---
   *      Book # 3
   *      Title: A Brief History of Time
   *      Author: Stephen Hawking
   *      ---
   *      ...
   */

  books.forEach((book, index) => {
    console.log(`Book # ${index}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author.firstName} ${book.author.lastName} ---`);
  });

  /**
   * Bonus:
   * - Create a function named
   `createBook`
   that accepts a title and author
   *   name and returns a book object with the properties described
   *   previously. Refactor your code that creates the books array to instead
   *   use your function.
   * - Create a function named
   `showBookInfo`
   that accepts a book object and
   *   outputs the information described above. Refactor your loop to use your
   *
   `showBookInfo`
   function.
   */
  const createBook = (title, author) => {
    let authorArray = author.split(" ");

    return {
      title: title,
      author: {
        firstName: authorArray[0],
        lastName: authorArray[1]
      }
    };
  };

  const bonusBooks = [];

  const addBook = (arr, func) => {
    arr.push(func);
    return arr;
  };

  addBook(bonusBooks, createBook("Book One", "Author One"));
  addBook(bonusBooks, createBook("Book Two", "Author Two"));
  addBook(bonusBooks, createBook("Book Three", "Author Three"));
  addBook(bonusBooks, createBook("Book Four", "Author Four"));
  addBook(bonusBooks, createBook("Book Five", "Author Five"));
  addBook(bonusBooks, createBook("Book Six", "Author Six"));
  addBook(bonusBooks, createBook("Book Seven", "Author Seven"));
  addBook(bonusBooks, createBook("Book Eight", "Author Eight"));
  addBook(bonusBooks, createBook("Book Nine", "Author Nine"));
  addBook(bonusBooks, createBook("Book Ten", "Author Ten"));

  const showBookInfo = (arr) => {
    return arr.forEach((book, index) => {
      console.log(`BONUS QUESTION:
    Book # ${index + 1}
    Title: ${book.title}
    Author: ${book.author.firstName} ${book.author.lastName}`);
    });
  };

showBookInfo(bonusBooks);

})();
