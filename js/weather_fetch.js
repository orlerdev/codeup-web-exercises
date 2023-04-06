export const fetchWeather = async () => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${SAlat}&lon=${SAlong}&units=${imperial}&appid=${OWEATHER_KEY}`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
};

export function getCardTime(unix) {
    let dt = new Date(unix);
    const hours = dt.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = dt.getMinutes();
    const seconds = dt.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    return `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
}

function geocode(search, token) {
    const baseUrl = 'https://api.mapbox.com';
    const endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + '?' + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}

export function reverseGeocode(coordinates, token) {
    const baseUrl = 'https://api.mapbox.com';
    const endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + ',' + coordinates.lat + '.json' + '?' + 'access_token=' + token)
        .then(function (res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function (data) {
            return data.features[0].place_name;
        });
}
