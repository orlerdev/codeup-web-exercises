let fruits = ["bananas", "apples", "oranges", "mangoes", "tomatoes"];

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];
  // console.log(fruit);
}

for (let fruit of fruits) {
  // console.log(fruit);
}

const forEach = (callback) => {
  callback(fruit, index, array);
}

fruits.forEach((fruit, index, array) => {
  // console.log(`The elements follows: ${fruit}`);
  // console.log(`The index follows: ${index}`);
  // console.log(`The array follows: ${array}`);
})

let favFruits = [];
fruits.forEach((fruit, index, array) => {
  if (fruit === "apples" || fruit === "tomatoes") {
    favFruits.push(fruit);
  }
});

let favFruitFilter = fruits.filter((fruit) => fruit === "apples" || fruit === "tomatoes");
// console.log(favFruitFilter);
// console.log(favFruits);

let studentSeating = [
  ["Cynthia", "Marc", "Yamba", "Kelvyn", "Nick", "Jared"],
  ["Sarah", "Joe", "Mathew", "Randy", "Quintyn", "Kaeden", "Damian"]
]

studentSeating.forEach((row) => {
  row.forEach((student) => {
    console.log(student);
  })
})

for (let row of studentSeating) {
  for (let student of row) {
    console.log(student)
  }
}