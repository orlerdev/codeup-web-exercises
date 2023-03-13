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

function keywordCipher1(str, keyword) {
    const encryptKey = [...new Set(keyword + "abcdefghijklmnopqrstuvwxyz")];
    return str.toLowerCase().replace(/[a-z]/g, (l) => encryptKey[l.charCodeAt() - 97]);
}

function keywordCipher2(str, keyword) {
    const encryptKey = new Map(Array.from(new Set(keyword + "abcdefghijklmnopqrstuvwxyz"), (l, i) => [String.fromCharCode(97 + i), l]))
    return str.replace(/\w/g, l => encryptKey.get(l.toLowerCase()))
}

// console.log(keywordCipher("hello", "wednesday"));
// console.log(keywordCipher1("hello", "wednesday"));
// console.log(keywordCipher2("hello", "wednesday"));

const moreCars = [
    { make: 'Ford', model: 'Mustang', mileage: 34567 },
    { make: 'Ford', model: 'F-150', mileage: 12345 },
    { make: 'Ford', model: 'Escape', mileage: 45678 },
    { make: 'Chevrolet', model: 'Camaro', mileage: 56789 },
    { make: 'Chevrolet', model: 'Silverado', mileage: 23456 },
    { make: 'Chevrolet', model: 'Equinox', mileage: 78901 },
    { make: 'Buick', model: 'Enclave', mileage: 23456 },
    { make: 'Buick', model: 'Regal', mileage: 56789 },
    { make: 'Jeep', model: 'Wrangler', mileage: 34567 },
    { make: 'Jeep', model: 'Grand Cherokee', mileage: 67890 },
    { make: 'Dodge', model: 'Charger', mileage: 12345 },
    { make: 'Dodge', model: 'Durango', mileage: 45678 },
    { make: 'Lincoln', model: 'MKZ', mileage: 78901 },
    { make: 'Lincoln', model: 'Navigator', mileage: 23456 },
    { make: 'GMC', model: 'Sierra', mileage: 56789 },
    { make: 'GMC', model: 'Terrain', mileage: 34567 },
    { make: 'Ford', model: 'Focus', mileage: 12345 },
    { make: 'Ford', model: 'Explorer', mileage: 45678 },
    { make: 'Chevrolet', model: 'Impala', mileage: 23456 },
    { make: 'Chevrolet', model: 'Suburban', mileage: 78901 },
    { make: 'Buick', model: 'LaCrosse', mileage: 34567 },
    { make: 'Jeep', model: 'Renegade', mileage: 12345 },
    { make: 'Jeep', model: 'Compass', mileage: 45678 },
    { make: 'Dodge', model: 'Challenger', mileage: 78901 },
    { make: 'Lincoln', model: 'Continental', mileage: 23456 },
    { make: 'Lincoln', model: 'Aviator', mileage: 56789 },
    { make: 'GMC', model: 'Yukon', mileage: 34567 },
    { make: 'GMC', model: 'Acadia', mileage: 12345 },
    { make: 'Ford', model: 'Ranger', mileage: 45678 },
    { make: 'Ford', model: 'Bronco', mileage: 78901 },
    { make: 'Chevrolet', model: 'Malibu', mileage: 23456 },
    { make: 'Chevrolet', model: 'Tahoe', mileage: 56789 },
    { make: 'Buick', model: 'Encore', mileage: 34567 },
    { make: 'Jeep', model: 'Cherokee', mileage: 12345 },
    { make: 'Dodge', model: 'Journey', mileage: 45678 },
    { make: 'Lincoln', model: 'Corsair', mileage: 78901 },
    { make: 'GMC', model: 'Canyon', mileage: 23456 },
    { make: 'Honda', model: 'Civic', mileage: 34567 },
    { make: 'Honda', model: 'Accord', mileage: 12345 },
    { make: 'Honda', model: 'CR-V', mileage: 45678 },
    { make: 'Toyota', model: 'Corolla', mileage: 56789 },
    { make: 'Toyota', model: 'Camry', mileage: 23456 },
    { make: 'Toyota', model: 'Rav4', mileage: 78901 },
    { make: 'Kia', model: 'Optima', mileage: 23456 },
    { make: 'Kia', model: 'Sportage', mileage: 56789 },
    { make: 'Kia', model: 'Soul', mileage: 34567 },
    { make: 'Hyundai', model: 'Elantra', mileage: 67890 },
    { make: 'Hyundai', model: 'Sonata', mileage: 12345 },
    { make: 'Hyundai', model: 'Tucson', mileage: 45678 },
    { make: 'Suzuki', model: 'Swift', mileage: 78901 },
    { make: 'Suzuki', model: 'Vitara', mileage: 23456 },
    { make: 'Mazda', model: 'CX-5', mileage: 56789 },
    { make: 'Mazda', model: 'Mazda3', mileage: 34567 },
    { make: 'Daihatsu', model: 'Charade', mileage: 12345 },
    { make: 'Daihatsu', model: 'Mira', mileage: 45678 },
    { make: 'Toyota', model: 'Yaris', mileage: 23456 },
    { make: 'Toyota', model: 'Highlander', mileage: 56789 },
    { make: 'Honda', model: 'Pilot', mileage: 78901 },
    { make: 'Honda', model: 'CR-Z', mileage: 23456 },
    { make: 'Suzuki', model: 'Jimny', mileage: 34567 },
    { make: 'Suzuki', model: 'Celerio', mileage: 12345 },
    { make: 'Mazda', model: 'CX-3', mileage: 45678 },
    { make: 'Mazda', model: 'Mazda6', mileage: 78901 },
    { make: 'Toyota', model: 'Tacoma', mileage: 23456 },
    { make: 'Toyota', model: 'Sienna', mileage: 56789 },
    { make: 'Kia', model: 'Stinger', mileage: 34567 },
    { make: 'Kia', model: 'Niro', mileage: 12345 },
    { make: 'Hyundai', model: 'Venue', mileage: 45678 },
    { make: 'Hyundai', model: 'Santa Fe', mileage: 78901 },
    { make: 'Daihatsu', model: 'Terios', mileage: 23456 },
    { make: 'Daihatsu', model: 'Materia', mileage: 56789 },
    { make: 'Suzuki', model: 'Alto', mileage: 34567 },
    { make: 'Suzuki', model: 'Escudo', mileage: 12345 },
    { make: 'Fiat', model: '500', mileage: 56789 },
    { make: 'Fiat', model: 'Panda', mileage: 98765 },
    { make: 'Fiat', model: 'Tipo', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'C-Class', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'E-Class', mileage: 78901 },
    { make: 'Mercedes-Benz', model: 'S-Class', mileage: 23456 },
    { make: 'BMW', model: '3 Series', mileage: 56789 },
    { make: 'BMW', model: '5 Series', mileage: 98765 },
    { make: 'BMW', model: 'X5', mileage: 23456 },
    { make: 'Volvo', model: 'XC40', mileage: 56789 },
    { make: 'Volvo', model: 'XC60', mileage: 98765 },
    { make: 'Volvo', model: 'XC90', mileage: 12345 },
    { make: 'Audi', model: 'A3', mileage: 78901 },
    { make: 'Audi', model: 'A4', mileage: 23456 },
    { make: 'Audi', model: 'Q5', mileage: 56789 },
    { make: 'Jaguar', model: 'F-PACE', mileage: 23456 },
    { make: 'Jaguar', model: 'XE', mileage: 98765 },
    { make: 'Jaguar', model: 'XF', mileage: 12345 },
    { make: 'Volkswagen', model: 'Golf', mileage: 56789 },
    { make: 'Volkswagen', model: 'Jetta', mileage: 78901 },
    { make: 'Volkswagen', model: 'Tiguan', mileage: 23456 },
    { make: 'Fiat', model: 'Doblo', mileage: 12345 },
    { make: 'Fiat', model: '500L', mileage: 56789 },
    { make: 'Fiat', model: 'Spider', mileage: 98765 },
    { make: 'Mercedes-Benz', model: 'GLE', mileage: 23456 },
    { make: 'Mercedes-Benz', model: 'GLC', mileage: 56789 },
    { make: 'Mercedes-Benz', model: 'GLA', mileage: 78901 },
    { make: 'BMW', model: 'M3', mileage: 23456 },
    { make: 'BMW', model: 'M5', mileage: 56789 },
    { make: 'BMW', model: 'X3', mileage: 98765 },
    { make: 'Volvo', model: 'S60', mileage: 12345 },
    { make: 'Volvo', model: 'S90', mileage: 23456 },
    { make: 'Volvo', model: 'V90', mileage: 56789 },
    { make: 'Audi', model: 'Q3', mileage: 78901 },
    { make: 'Audi', model: 'Q7', mileage: 23456 },
    { make: 'Audi', model: 'TT', mileage: 56789 }
];


// output make model and mileage of every Ford
// moreCars.forEach(function(car) {
//     if (car.make === "Ford") {
//         console.log(car.make, car.model, car.mileage);
//     }
// });

// every model who's make starts with F
// moreCars.forEach(car => {
//     if (car.make.charAt(0) === "F") {
//         console.log(car.model);
//     }
// });

// output make model and mileage for every car with <25k miles
// moreCars.forEach(({make, model, mileage}) => {
//     if (mileage < 25000) {
//         console.log(`${make} ${model} ${mileage}`);
//     }
// })

// function with "car" parameter.....return boolean if car has <50k miles
const lowMileage = ({mileage}) => mileage < 50000;

// console.log(lowMileage( { make: 'Fiat', model: 'Tipo', mileage: 12345 }));

const sortedList = moreCars.sort((a, b) => a.make.localeCompare(b.make));

const sortedCars = (arr) => {
    return arr.sort((a, b) => {
        const el1 = a.make
        const el2 = b.make
        if (el1 < el2) {
            return -1;
        } else if (el1 > el2) {
            return 1;
        } else {
            return 0;
        }
    })
}

// console.log(sortedList);
// console.log(sortedCars(moreCars));

const sortedNumberArray = (array) => array.slice(1).every((element, index) => element >= array[index])

const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

// console.log(sortedNumberArray(c));

const subtract = (a, b) => parseFloat(a) > parseFloat(b) ? a - b : false;

//console.log(subtract("7", "4"));
//console.log(subtract("2", 4));

// create a function named arrayOfMultiples that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches the length
// [7, 14, 21, 28, 35]
// [12, 24, 36, 60, 72, 84, 96, 108, 120]
// [17, 34, 51, 68, 85, 102]

const arrayOfMultiples = (num, length) => {
    const multiplesArr = [];
    for (let i = 0; multipleArr.length <= length; i++) {
        multiplesArr.push(num *= 2);
        i++;
    }
    return multiplesArr;
}

console.log(arrayOfMultiples(7, 5));

// write a function named uniqueSort that returns an array that.....
// 1. removes all duplicates]
// 2. is sorted from least to greatest value

const uniqueSort = (arr) => {

}