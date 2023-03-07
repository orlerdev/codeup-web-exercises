/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

function convertAddressToObject(address) {
    let arr = address.split(" ");
    let streetNum = arr[0];
    let streetName = `${arr[1]} ${arr[2]}`;
    return { streetNumber: streetNum, streetName: streetName };
}

// console.log(convertAddressToObject("8646 Sunny Oaks"));
// console.log(convertAddressToObject("5408 Villa Nueva"));

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

const totalPets = (petOwners) => {
    let total = 0;
    petOwners.forEach(person => {
        return total += person.pets;
    });
    return total;
};

// console.log(totalPets([{name: 'Fernando Mendoza', pets: 1}, {name: 'Douglas Hirsh', pets: 8}, {name: 'Kenneth Howell', pets: 2}]));

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

const minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
};

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */

drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
];

const sortDrinksByPrice = (drinks) => {
    return drinks.sort((a, b) => a.price - b.price);
};

// console.log(sortDrinksByPrice(drinks));

/*
* Console log the name of each city.
* Console log the name of the name and state.
* Console log all the cities in Texas with a population of over 1 million.
* */

const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];

const cityName = (arr) => {
    arr.forEach(city => {
        console.log(city.name);
    });
};

const cityNameAlt = (arr) => arr.map(city => city.name);

// console.log(cityNameAlt(cities));

const nameAndState = (arr) => {
    arr.forEach(city => {
        console.log(`${city.name}, ${city.state}`);
    });
};

const overOneMil = (arr) => {
    console.log(arr.filter(city => city.population > 1000000 && city.state === "Texas").map(city => city.name));
};

// for (let i = 0; i < cities.length; i++) {
//     if (cities[i].population > 1000000 && cities[i].state === "Texas")
//     console.log(`${cities[i].name}, ${cities[i].state}`);
// }

const isInTexas = (arr) => arr.state === "Texas" && arr.population > 1000000;

const overOneMilAlt = (arr) => console.log(arr.filter(isInTexas).map(city => `${city.name}, ${city.state}`));

// overOneMilAlt(cities)


// cityName(cities);
// nameAndState(cities);
// overOneMil(cities);

const budgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];


const getBudgets = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + curr.budget;
    }, 0);
}

const getBudgetsAlt = (arr) => {
    return arr.reduce((total, person) => total + person.budget, 0)
}

// console.log(getBudgets(budgets));
// console.log(getBudgetsAlt(budgets));

/* KEYWORD CIPHER
* create a function which takes 2 parameters (string, keyword)
* remove any characters within the keyword which occur more than once
* the rest of the alphabet that does not occur within the keyword follow the keyword
* the cipher output is then ran against the regular alphabet and returns the value of the letter as it appears in the regular alphabet to what it is in the cipher.
*
* const cipher = (hello, wednesday) => {
*   let alphaBet = abcdefghijklmnopqrstuvwxyz;
*   let cipherAlphabet = wednsaybcfghijklmopqrtuvwxyz;
*
*   'h' = 'b'
*   'e' = 's'
*   'l' = 'h'
*   'l' = 'h'
*   'o' = 'k'
*
* }
* */

function keywordCipher(string, keyword) {
    const letter = "abcdefghijklmnopqrstuvwxyz";
    const newKey = [...new Set(keyword + letter)]
    return string.toLowerCase().replace(/[a-z]/g, x => newKey[letter.indexOf(x)])
}

// function keywordCipher1(str, keyword) {
//     const encryptKey = [...new Set(keyword + "abcdefghijklmnopqrstuvwxyz")];
//     return str.toLowerCase().replace(/[a-z]/g, (l) => encryptKey[l.charCodeAt() - 97]);
// }

// function keywordCipher2(str, keyword) {
//     const encryptKey = new Map(Array.from(new Set(keyword + "abcdefghijklmnopqrstuvwxyz"), (l, i) => [String.fromCharCode(97 + i), l]))
//     return str.replace(/\w/g, l => encryptKey.get(l.toLowerCase()))
// }

// console.log(keywordCipher("hello", "wednesday"));
// console.log(keywordCipher1("hello", "wednesday"));
// console.log(keywordCipher2("hello", "wednesday"));