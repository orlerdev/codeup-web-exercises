const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

//<--takes a function, which uses each element as the parameter for that function-->
//<--the same .forEach could be written like:-->
// prices.forEach(function(price) {
//     console.log(price);
// });
prices.forEach(price => console.log(price));

//<--.map -->
const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    console.log(total);
    return total;
});

console.log(prices);
console.log(pricesAfterTax);

const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const usedCarPrices = usedCars.map(car => car.price);

let reducedUsedCarPrices = usedCarPrices.reduce((acc, price) => acc + price);

const averageCarValue = usedCarPrices.reduce((total, price) => (total + price), 0 / usedCarPrices.length);

const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

const allNumsTotal = aHundredNums.reduce((total, number) => total + number);

const totalMileage = cars.reduce((acc, curr) => {
    return acc + curr.mileage;
}, 0);

// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: "Bubbles",
        age: 10,
        isTrained: false
    },
    {
        dogName: "Lexie",
        age: 3,
        isTrained: true
    },
    {
        dogName: "Doggy",
        age: 5,
        isTrained: false
    },
    {
        dogName: "Flopper",
        age: 3,
        isTrained: true
    },
    {
        dogName: "Lexie",
        age: 1,
        isTrained: true
    },
    {
        dogName: "Skip",
        age: 7,
        isTrained: true
    },
    {
        dogName: "Blue",
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
const exOne = dogs.map(dog => dog.dogName);
console.log("Exercise 1:");
console.log(exOne);

// TODO 2: using map, create a new array of dog ages from the dogs array
console.log("Exercise 2:");
const exTwo = dogs.map(dog => dog.age);
console.log(exTwo);

// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values

// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log("Exercise 4:");

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log("Exercise 5:");

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log("Exercise 6:");

// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log("Exercise 7:");

// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log("Exercise 8:");

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log("Exercise 9:");

// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log("Exercise 10:");

// TODO 11: what is the average age of dogs that are trained?
console.log("Exercise 11:");

// TODO 12: what is the average length of names of untrained dogs?
console.log("Exercise 12:");

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log("Exercise 13:");

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log("Exercise 14:");

