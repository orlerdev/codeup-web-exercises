const sunny = ['url(\'./img/sunny/${randomNum}.png\')'];
const hotDays = ['url(\'../../assets/img/\')'];
const windyDays = ['url(\'../../assets/img/\')'];
const cloudyDays = ['url(\'../../assets/img/\')'];
const rainyDaysUrl = ['url(\'../../assets/img/\')'];
const snowyDays = ['url(\'../../assets/img/\')'];
const freezingDays = ['url(\'../../assets/img/\')'];
const thunderStorms = ['url(\'../../assets/img/\')'];
const snowStorms = ['url(\'../../assets/img/\')'];
const coldDays = ['url(\'../../assets/img/\')'];

const SAlong = -98.48527;
const SAlat = 29.423017;
const imperial = 'imperial';

let { day, date, days, month, months, hoursForClock, minutes, ampm } = setTime();
let { dateForDisplay, monthA, dayA, dateA, hours, hoursForClockA, minutesA, secondsA, ampmA, daysA, monthsA } = getAPIDate();
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let randomNumClouds = randomNumber(1, 8);
let randomNumFogMist = randomNumber(1, 4);
let randomNumNight = randomNumber(1, 14);
let randomNumRain = randomNumber(1, 14);
let randomNumSnow = randomNumber(1, 21);
let randomNumSunny = randomNumber(1, 18);
let randomNumSunrise = randomNumber(1, 10);
let randomNumSunset = randomNumber(1, 6);
let randomNumStorm = randomNumber(1, 6);