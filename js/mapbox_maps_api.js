//--      --////--    MAP  --////--      --//
mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-streets-v12",
    center: [-98.4946, 29.4252],
    zoom: 10,
    dragRotate: true
});

//--      --////--    RESTAURANT INFO  --////--      --//
const restaurantList = [
    {
        name: "Cheddars Scratch Kitchen",
        longitude: -98.63649,
        latitude: 29.446645,
        info: "We're all about good food, made well, for a good price. How do we pull that off? By cooking from scratch."
    },
    {
        name: "Cracker Barrel Old Country Store",
        longitude: -98.645133,
        latitude: 29.43675,
        info: "Food With Care\n" +
            "Quite simple, really."
    },
    {
        name: "Texas Roadhouse",
        longitude: -98.70138,
        latitude: 29.4987,
        info: "Legendary Food, Legendary Service"
    }
];
//--      --////--    RESTAURANT SHOW FUNCTION  --////--      --//
restaurantList.forEach(restaurant => {
    const element = document.createElement("div");
    element.className = "marker";
    const marker = new mapboxgl.Marker(element)
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`
            <p class="popup">${restaurant.name}</p>
            <p>${restaurant.info}</p>
        `);
    marker.setPopup(popup);
});

//--      --////--    EVENT LISTENERS  --////--      --//
document.querySelector("#zoomRange").addEventListener("input", e => {
    e.preventDefault();
    map.setZoom(document.querySelector("#zoomRange").value);
});

document.querySelector("#searchInputBtn").addEventListener("click", e => {
    e.preventDefault();
    const address = document.querySelector("#searchInput").value;
    console.log(address);
    geocode("address", MAPBOX_API_TOKEN).then(coordinates => {
        map.setCenter(coordinates);
    });
});

document.querySelector("#markerPopupBtn").addEventListener("click", e => {
    e.preventDefault();
    const address = document.querySelector("#markerPopupInput").value;
    geocode("address", MAPBOX_API_TOKEN).then(coordinates => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        map.setCenter(coordinates);
    });
});
