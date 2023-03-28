export function setDateAndTime(dt) {
    const timestamp = new Date();
    const month = timestamp.getMonth();
    const day = timestamp.getDay();
    const date = timestamp.getDate();
    const hours = timestamp.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = timestamp.getMinutes();
    const seconds = timestamp.getSeconds();
    const ampm = hours >= 12 ? "pm" : "am";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return { timestamp, month, day, date, hours, hoursForClock, minutes, seconds, ampm, days, months };
}

export function reformatDate(date) {
    let today = new Date();
    let year = today.getFullyYear();
    let dateParts = today.split(" ");
    let month = dateParts[1].split("/")[0];
    let day = dateParts[1].split("/")[1];
    let newDateString = `${month}/${day}/${year}`;
    if (month === 12 && today.getMonth() === 0) {
        year -= 1;
        newDateString = `${month}/${day}/${year}`;
    }
    return newDateString;
}

export function formatCurrency(num, lang = "en", country = "US", style = "currency", currency = "USD") {
    return parseFloat(num).toLocaleString(`${lang}-${country}`, { style: style, currency: currency });
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return [...new Set(arr)];
    }
}

export const setStylesOnElement = function (styles, element) {
    Object.assign(element.style, styles);
};


const codeUp = {frontend: "javascript", backend: "java", database: "mysql"};
const {frontend, backend, database } = codeUp;
const {frontend: firsthalf, backend: backhalf, database: collection} = codeUp;

console.log(codeUp);
console.log(`${frontend} ${backend} ${database}`);
console.log(`${firsthalf} ${backhalf} ${collection}`);