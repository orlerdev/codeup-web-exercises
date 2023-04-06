export async function blurring() {
    let load = 0;
    let int = setInterval(blurring, 15);

    load++;
    if (load > 99) {
        clearInterval(int);
    }
    currentDate.innerText = `${days[day]} ${months[month]}, ${date}`;
    currentTime.textContent = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    pageContainer.style.filter = `blur(${scale(load, 0, 100, 15, 0)}px)`;
}

pageContainer.style.backgroundImage = `url('./img/sunny/${randomNumSunny}.png`;
forecastCard.style.backgroundImage = `url('./img/rain/${randomNumRain}.png`;



export const removeActiveClass = () => {
    indicatorTabs.forEach(tab => {
        tab.classList.remove('active');
    });
};

export const getPhoto = (weather, num) => {
    let weatherArr = [];
    for (let i = 1; i <= num; i++) {
        weatherArr.push('url(`./img/sunny/${num}.png`)');
        i++;
        num++;
    }
    console.log(weatherArr);
    return weatherArr;
};

const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
            center: [-98.48962, 29.42692], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });
        const codeupMarker = new mapboxgl.Marker()
            .setLngLat([-98.48962, 29.42692])
            .addTo(map);
        const codeupPopup = new mapboxgl.Popup()
            .setHTML('<p class="popup">Codeup!</p>');
        codeupMarker.setPopup(codeupPopup);