searchBtn.addEventListener('click', (e) => {
    console.log('event fired');
    console.log(searchInput.value.length);
    if (searchInput.value.length === 0) {
        console.log('event fired');
        hiddenSearch.classList.toggle('active');
        searchInput.focus();
    }
});

searchInput.addEventListener('input', e => {
    let address = searchInput.value;
    console.log(address);
    geocode(address, MAPBOX_API_TOKEN).then(coordinates => {
        const newMarker = new mapboxgl.Marker({
            'draggable': 'true'
        })
            .setLngLat(coordinates)
            .addTo(map);
        map.setCenter(coordinates);
    });
    mapContainer.classList.add('active');
});

document.addEventListener('click', e => {
    const isClickInside = searchInput.contains(e.target);
    if (!isClickInside) {
        searchInput.classList.remove('active');
    }
});

document.addEventListener('click', e => {

});

forecastShowBtn.addEventListener('click', async () => {
    let data = await fetchWeather();
    let date = new Date(data.current.dt * 1000);
    console.log(data);
    console.log(date);
    getCardTime(data.current.dt);
});

mapShowBtn.addEventListener('click', () => {
    mapContainer.classList.toggle('active');
    if (forecastContainer.classList.contains('active')) {
        forecastContainer.classList.remove('active');
    }
});

indicatorTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        removeActiveClass();
        tab.classList.add('active');
    });
});

async function getCurrentTemp() {
    let data = await fetchWeather();
    return currentTemp.innerText = `${Math.floor(data.current.temp)}ºF`;
}

await getCurrentTemp();