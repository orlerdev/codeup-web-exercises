const currentWeather = {
  temperature: 54.5,
  humidity: 28,
  clouds: 0,
  windDirection: "NNE"
}
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
   console.log(Object.entries(hourlyForecast));
})

// DESTRUCTURING THE OBJECT
hourlyWeather.forEach(({ time, temperature, feels_like }) => {
  // console.log(`At ${time} it will be ${temperature} degrees, but it will feel like ${feels_like} degrees.`)
});

const date1 = new Date((Date.UTC(2023, 02, 17, 3, 0, 0)));
// console.log(date1.toLocaleString("en-US"));
