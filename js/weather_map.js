(async () => {

    const SAlong = -98.48527;
    const SAlat = 29.423017;
    const imperial = "imperial";
    (async () => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${SAlat}&lon=${SAlong}&units=${imperial}&appid=${OWEATHER_KEY}`);
                const data = await res.json();
                console.log(data);
                return data;
            } catch (e) {
                console.log(e.message);
            }
        };
    })();
//<--VARIABLES-->
    const pageContainer = document.querySelector(".page-container");
    const forecastShowBtn = document.querySelector(".five-day-btn");
    const mapShowBtn = document.querySelector(".map-show-btn");
    const currentPop = document.querySelector(".current-pop");
    const mapContainer = document.querySelector(".map-container");
//<--PHOTO ARRAYS-->
    const sunny = ["url('./img/sunny/${randomNum}.png')"];
    const hotDays = ["url('../../assets/img/')"];
    const windyDays = ["url('../../assets/img/')"];
    const cloudyDays = ["url('../../assets/img/')"];
    const rainyDaysUrl = ["url('../../assets/img/')"];
    const snowyDays = ["url('../../assets/img/')"];
    const freezingDays = ["url('../../assets/img/')"];
    const thunderStorms = ["url('../../assets/img/')"];
    const snowStorms = ["url('../../assets/img/')"];
    const coldDays = ["url('../../assets/img/')"];
    const getPhoto = (weather, num) => {
        let weatherArr = [];
//<--ARRAYS-->
    let { day, date, days, month, months, hoursForClock, minutes, ampm } = setTime();
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    };
    const indicatorTabs = document.querySelectorAll(".indicator-tab");
//<--LOADING BACKGROUND-->
    let load = 0;
    let int = setInterval(blurring, 15);
    function blurring() {
        load++;
        if (load > 99) {
            clearInterval(int);
        }
        currentDate.innerText = `${days[day]} ${months[month]}, ${date}`;
        currentTime.textContent = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
        currentTemp.innerText = `${72}ºF`;
        currentPop.innerText = `${30}% chance of ${"rain"}`;
        pageContainer.style.filter = `blur(${scale(load, 0, 100, 15, 0)}px)`;
    }
//<--BACKGROUNDS-->
    let randomNumClouds = randomNumber(1, 8);
    });
    forecastShowBtn.addEventListener("click", () => {
        async function useWeather() {
            let weather = await fetchWeather();
            let currentTemperature = await weather.current.temp;
            let currentUvi = await weather.current.uvi;
            let currentpop = await weather.current.pop;
            let currentSunrise = await weather.current.sunrise;
            let currentSunset = await weather.current.sunset;
            let currentPressure = await weather.current.pressure;
            let currentHumidity = await weather.current.humidity;
            let currentClouds = await weather.current.clouds;
            let currentVisibility = await weather.current.visibility;
            let currentDewPoint = await weather.current.dew_point;
            let currentWeather = await weather.current.weather.main;
            let currentWeatherDesc = await weather.current.weather.description;
            // let dayDate = await weather.daily.dt;
            let dailyTemp = await weather.daily.temp.max;
            let dailySunrise = await weather.daily.sunrise;
            let dailySunset = await weather.daily.sunset;
            let dailyPressure = await weather.daily.pressure;
            let dailyHumidity = await weather.daily.humidity;
            let dailyClouds = await weather.daily.clouds;
            let dailyVisibility = await weather.daily.visibility;
            let dailyDewPoint = await weather.daily.dew_point;
            let dailytUvi = await weather.daily.uvi;
            let dailytpop = await weather.daily.pop;
            let dailyWeather = await weather.daily.weather.main;
            let dailyWeatherDesc = await weather.daily.weather.description;
            cardDate.innerText = `${weather.daily.dt}`;
            sunriseValue.innerText = `${dailySunrise}`;
            uviValue.innerText = `${dailyUvi}`;
            humidityValue.innerText = `${dailyHumidity}`;
            cloudsValue.innerText = `${dailyClouds}`;
            sunsetValue.innerText = `${dailySunset}`;
            pressureValue.innerText = `${dailyPressure}`;
            visibilityValue.innerText = `${dailyVisibility}`;
            dewPointValue.innerText = `${dailyDewPoint}`;
            cardDescription.innerText = `${dailyWeatherDesc}`;
        }
            forecastContainer.classList.toggle("active");
    });
    mapShowBtn.addEventListener("click", () => {
    indicatorTab.addEventListener("click", () => {
    });
})();

// (async () => {
//     //<--VARIABLES-->
//     const SAlong = -98.48527;
//     const SAlat = 29.423017;
//     const imperial = 'imperial';
//     const pageContainer = document.querySelector('.page-container');
//     const forecastShowBtn = document.querySelector('.five-day-btn');
//     const mapShowBtn = document.querySelector('.map-show-btn');
//     const currentPop = document.querySelector('.current-pop');
//     const mapContainer = document.querySelector('.map-container');
//     const fetchWeather = async () => {
//         try {
//             const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${SAlat}&lon=${SAlong}&units=${imperial}&appid=${openWeather}`);
//             const data = await res.json();
//             return data;
//         } catch (e) {
//             console.log(e.message);
//         }
//     };
//     const getPhoto = (weather, num) => {
//         let weatherArr = [];
//
// //<--ARRAYS-->
//         let { day, date, days, month, months, hoursForClock, minutes, ampm } = setTime();
//         let { dateForDisplay, monthA, dayA, dateA, hours, hoursForClockA, minutesA, secondsA, ampmA, daysA, monthsA } = getAPIDate();
//         const scale = (num, in_min, in_max, out_min, out_max) => {
//             return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
//         };
//         const indicatorTabs = document.querySelectorAll('.indicator-tab');
//         const sunny = ['url(\'./img/sunny/${randomNum}.png\')'];
//         const hotDays = ['url(\'../../assets/img/\')'];
//         const windyDays = ['url(\'../../assets/img/\')'];
//         const cloudyDays = ['url(\'../../assets/img/\')'];
//         const rainyDaysUrl = ['url(\'../../assets/img/\')'];
//         const snowyDays = ['url(\'../../assets/img/\')'];
//         const freezingDays = ['url(\'../../assets/img/\')'];
//         const thunderStorms = ['url(\'../../assets/img/\')'];
//         const snowStorms = ['url(\'../../assets/img/\')'];
//         const coldDays = ['url(\'../../assets/img/\')'];
// //<--LOADING BACKGROUND-->
//         let load = 0;
//         let int = setInterval(blurring, 15);
//
//         async function blurring() {
//             load++;
//             if (load > 99) {
//                 clearInterval(int);
//             }
//             currentDate.innerText = `${days[day]} ${months[month]}, ${date}`;
//             currentTime.textContent = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
//             pageContainer.style.filter = `blur(${scale(load, 0, 100, 15, 0)}px)`;
//         }
//
//         async function getCurrentTemp() {
//             let data = await fetchWeather();
//             return currentTemp.innerText = `${Math.floor(data.current.temp)}ºF`;
//         }
//
//         await getCurrentTemp();
// //<--BACKGROUNDS-->
//         let randomNumClouds = randomNumber(1, 8);
//
//         forecastShowBtn.addEventListener('click', async () => {
//             let data = await fetchWeather();
//             let date = new Date(data.current.dt * 1000);
//             console.log(data);
//             console.log(date);
//
//             function getCardTime(unix) {
//                 let dt = new Date(unix);
//                 const hours = dt.getHours();
//                 const hoursForClock = hours >= 13 ? hours % 12 : hours;
//                 const minutes = dt.getMinutes();
//                 const seconds = dt.getSeconds();
//                 const ampm = hours >= 12 ? 'pm' : 'am';
//                 return `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
//             }
//
//             sunriseValue.innerText = `${getCardTime(data.current.sunrise)}`;
//             uviValue.innerText = `${data.current.uvi}`;
//             humidityValue.innerText = `${data.current.humidity}%`;
//             cloudsValue.innerText = `${data.current.clouds}%`;
//             sunsetValue.innerText = `${getCardTime(data.current.sunset)}`;
//             pressureValue.innerText = `${data.current.pressure}pHa`;
//             visibilityValue.innerText = `${Math.floor(data.current.visibility / 1609)}mile(s)`;
//             dewPointValue.innerText = `${Math.floor(data.current.dew_point)}ºF`;
//             cardDescription.innerText = `${data.current.weather.description}`;
//             cardDate.innerText = `${date.getMonth() + 1} / ${date.getDate()}`;
//             tab1.innerText = `${date.getMonth() + 1} / ${date.getDate()}`;
//             date = new Date(data.daily[1].dt * 1000);
//             tab2.innerText = `${date.getMonth() + 1} / ${date.getDate()}`;
//             date = new Date(data.daily[2].dt * 1000);
//             tab3.innerText = `${date.getMonth() + 1} / ${date.getDate()}`;
//             date = new Date(data.daily[3].dt * 1000);
//             tab4.innerText = `${date.getMonth() + 1} / ${date.getDate()}`;
//             date = new Date(data.daily[4].dt * 1000);
//             tab5.innerText = `${date.getMonth() + 1} / ${date.getDate()}`;
//             date = new Date(data.daily[5].dt * 1000);
//             forecastContainer.classList.toggle('active');
//         });
//         let tabs = [...document.querySelectorAll('.indicator-tab')];
//         tabs.forEach(tab => {
//             tab.addEventListener('click', () => {
//                 cardDate.innerText = tab.innerText;
//                 sunriseValue.innerText = '';
//             });
//         });
//     };
// )();