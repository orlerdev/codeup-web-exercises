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
//--      --////--    VARIABLES  --////--      --//

//--      --////--    DATE & TIME VARIABLES  --////--      --//
const headerDay = document.querySelector(".header-day");
const headerDate = document.querySelector(".header-date");
const headerTime = document.querySelector(".header-time");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//--      --////--    LEFT SECTION VARIABLES  --////--      --//
const slideContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
const tabContainer = document.querySelector(".day-indicator-col");

//--      --////--    ARRAYS  --////--      --//
const indicatorArray = [...document.querySelectorAll(".indicator-tab")];
let indicatorsLength = indicatorArray.length;

//--      --////--    PHOTO ARRAYS  --////--      --//
const sunnyDays = [];
const hotDays = [];
const windyDays = [];
const cloudyDays = [];
const rainyDaysUrl = [];
const snowyDays = [];
const freezingDays = [];
const thunderStorms = [];
const snowStorms = [];
const coldDays = [];

//--      --////--    UTILITY FUNCTIONS  --////--      --//
const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

downBtn.addEventListener("click", () => changeSlide("down"));
upBtn.addEventListener("click", () => changeSlide("up"));
slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

const getWeatherPhoto = (weatherArr, randomNum) => {
    return `url('weatherArr[randomNum]'`;
};

let activeSlide = 0;
const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight;
    if (direction === "down") {
        activeSlide++;
        if (activeSlide > slidesLength - 1) {
            activeSlide = 0;
            slideLeft.style.transition = "none";
        }
    } else if (direction === "up") {
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = slidesLength - 1;
            slideLeft.style.transition = "none";
        }
    }
    slideRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
    slideRight.style.backgroundImage = 'url("../../assets/img/sunset-cliff.jpeg")';
    indicatorArray.forEach(tab => tab.classList.remove("active"));
    indicatorArray[activeSlide].classList.add("active");
    setTimeout(() => {
        slideLeft.style.transition = "";
    }, 800);
};

const setStylesOnElement = function(styles, element){
    Object.assign(element.style, styles);
}

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    headerDay.innerHTML = `${days[day]}`;
    headerDate.innerHTML = `${months[month]}, ${date}`;
    headerTime.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};
setTime();
setInterval(setTime, 60000);

//TODO: create function to retrieve weather, use default longLat values

//TODO: create a function for geocoding calls
