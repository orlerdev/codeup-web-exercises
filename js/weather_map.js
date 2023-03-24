//--      --////--    OPENWEATHERMAP API fetch FOR WEATHER  --////--      --//
// (async () => {
//     const longSA = -98.4946;
//     const latSA = 29.4252;
//     const imperial = 'imperial';
//     const fetchSanAntonio = async () => {
//         try {
//             const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latSA}&lon=${longSA}&units=imperial&appid=${OWEATHER_KEY}`);
//             const data = await res.json();
//             console.log(data);
//             document.querySelector('h1').innerHTML = `${data.current.temp}`;
//             console.log(`The current temp is: ${data.current.temp}`);
//         } catch (e) {
//             console.log(e.message);
//         }
//     };
//     await fetchSanAntonio();
// })();

const headerDay = document.querySelector('.header-day');
const headerDate = document.querySelector('.header-date');
const headerTime = document.querySelector('.header-time');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    headerDay.innerHTML = `${days[day]}`;
    headerDate.innerHTML = `${months[month]}, ${date}`;
    headerTime.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
};
setTime()
setInterval(setTime, 60000)


//TODO: create function to retrieve weather, use default longLat values

//TODO: create a function for geocoding calls

