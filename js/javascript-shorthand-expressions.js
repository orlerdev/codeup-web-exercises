//**************************************************// SHORT-CIRCUIT EVALUATION // **************************************************//
if (variable1 !== null || variable1 !== undefined || variable1 !== "") {
  let variable2 = variable1;
}

//**************************************************// shorthand // **************************************************//
const variable2 = variable1 || 'new';
// if you set variable1 to false or 0, the value 'new' will be assigned

//**************************************************// DECLARING VARIABLES // **************************************************//
let x;
let y;
let z = 3;

//**************************************************// shorthand // **************************************************//
let x, y, z = 3;

//**************************************************// FOR LOOP // **************************************************//
const fruits = ["mango", "peach", "banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//**************************************************// shorthand // **************************************************//
//**************************************************// for loop // **************************************************//
for (let fruit of fruits) {
  console.log(fruit);
}

//**************************************************// indices of for loop // **************************************************//
for (let index in fruits) {
  console.log(index);
}

//**************************************************// keys of objects // **************************************************//
const obj = {country: "USA", state: "Texas", city: "San Antonio"};
for (let key in obj) {
  console.log(key);
}

//**************************************************// Array.forEach // **************************************************//
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);


//**************************************************// Array.find() // **************************************************//
const pets = [
  { type: 'Dog', name: 'Max'},
  { type: 'Cat', name: 'Karl'},
  { type: 'Dog', name: 'Tommy'},
]

function findDog(name) {
  for(let i = 0; i<pets.length; ++i) {
    if(pets[i].type === 'Dog' && pets[i].name === name) {
      return pets[i];
    }
  }
}

//**************************************************// shorthand           // **************************************************//
pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');
console.log(pet); // { type: 'Dog', name: 'Tommy' }


let test1 = Math.floor(4.9) === 4;
let test2 = ~~4.9 === 4;


//SAME
const num1 = parseInt("100");
const num2 = +"100";
//SAME
const num3 = parseFloat("100.01");
const num4 = +"100.01";

