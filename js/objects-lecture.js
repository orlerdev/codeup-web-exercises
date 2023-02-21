const currentWeather = {
  temperature: 54.5,
  humidity: 28,
  clouds: 0,
  windDirection: "NNE"
};
// console.log(currentWeather.temperature); // dot notation // cannot use variables
// console.log(currentWeather["temperature"]); // bracket notation // can use variables

function displayWeatherProperty(prop) {
  // console.log(currentWeather[prop]);
}

// console.log(displayWeatherProperty("humidity"));

for (let prop in currentWeather) {
  // console.log(prop);
  // console.log(currentWeather[prop]);
  // console.log(prop + ": " + currentWeather[prop]);
}

// console.log(Object.keys(currentWeather));
// console.log(Object.values(currentWeather));
// console.log(Object.entries(currentWeather));

currentWeather.temperature = 63.7;
delete currentWeather.humidity;
currentWeather.rain = false;

for (let key in currentWeather) {
  // console.log(key);
  // console.log(currentWeather[key]);
}
// console.log(Object.values(currentWeather));
// console.log(Object.keys(currentWeather));
// console.log(Object.entries(currentWeather));

const hourlyWeather = [
  { // [0]
    time: "08:00",
    temperature: 78.91,
    feels_like: 78.91
  },
  { // [1]
    time: "09:00",
    temperature: 79.57,
    feels_like: 79.57
  },
  { // [2]
    time: "10:00",
    temperature: 81.46,
    feels_like: 86.04
  },
  { // [3]
    time: "11:00",
    temperature: 84.49,
    feels_like: 89.24
  }
];

for (let forecast of hourlyWeather) {
//  console.log(hourlyWeather.indexOf(forecast));
}

// hourlyWeather.forEach(hourlyForecast => console.log(hourlyForecast.time));

hourlyWeather.forEach(hourlyForecast => {
  // console.log(Object.entries(hourlyForecast));
});

// DESTRUCTURING THE OBJECT
hourlyWeather.forEach(({ time, temperature, feels_like }) => {
  // console.log(`At ${time} it will be ${temperature} degrees, but it will feel like ${feels_like} degrees.`)
});

const date1 = new Date((Date.UTC(2023, 2, 17, 3, 0, 0)));
// console.log(date1.toLocaleString("en-US"));

// OBJECTS <things it "is" | properties> && <things it "does" | methods> //

const fighter = {
  name: "Arata",
  hitPoints: 18,
  maxDamage: 8,
};

const fighter2 = {
  name: "Bigfoot",
  hitPoints: 17,
  maxDamage: 10,
};

const monster = {
  name: "Goblin",
  hitPoints: 8,
  maxDamage: 6
};

// *********************************** // SEPARATE OUTPUT FROM LOGIC // *********************************** //
// CONTROLLER AND VIEW OBJECTS ARE PART OF A DESIGN PATTERN CALLED MODEL-VIEW-CONTROLLER
// MVC PATTERN for shorthand
// INDUSTRY STANDARD FOR GAME DEVELOPMENT

// CONTROLLER HAS METHODS THAT CONTROL EFFECTS ON GAME STATE
// VIEW ALLOWS FOR SEPARATE CONCERNS OF DEVELOPMENT
// PROGRAM LOGIC IS NOT DEPENDENT ON OUTPUT


const controller = {
  attack: function (attacker, defender) {
    const startingHp = defender.hitPoints;
    const damage = Math.ceil(Math.random() * attacker.maxDamage);
    defender.hitPoints -= damage;
    view.displayAttackResults(attacker.name, defender.name, startingHp, defender.hitPoints, damage,)
  }
};

const view = {
  displayAttackResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack, damage) {
    console.log(`${defenderName} has ${hpBeforeAttack} hit points.`);
    console.log(`${attackerName} attacks!`);
    console.log(`${attackerName} does ${damage} hit points!`);
    hpAfterAttack <= 0 ? console.log(`${attackerName} has defeated ${defenderName}!`) : console.log(`${defenderName} has ${hpAfterAttack} hit points left!`);
  }
}
// console.log(controller.attack(fighter, monster));

function Goblin(name) {
  this.name = name;
  this.hitPoints = 8;
  this.maxDamage = 6;
}

const goblinFactory = (name, hitPoints, maxDamage) => {
  hitPoints = 8
  maxDamage = 6
  return { name, hitPoints, maxDamage };
}

const goblin11 = goblinFactory("goblin11");
const goblin21 = goblinFactory("goblin21");
const goblin31 =  goblinFactory("goblin31");

const goblin1 = new Goblin("goblin1");
const goblin2 = new Goblin("goblin2");
const goblin3 = new Goblin("goblin3");

// console.log(goblin1)
// console.log(goblin2)
// console.log(goblin3)
// console.log(goblin11)
// console.log(goblin21)
// console.log(goblin31)

const goblinArr = [goblin1,goblin2,goblin3,goblin11,goblin21,goblin31];

// console.log(goblinArr.forEach(goblin => console.log(goblin.name)));
// console.log(goblin11 === goblin21);
// console.log(goblin1 === goblin2);

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice"
console.log(name, color, number, food);
console.log({name, color, number, food});


