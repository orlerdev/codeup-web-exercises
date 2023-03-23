document.querySelector("#zoomBtn").addEventListener("click", (e) => {
    e.preventDefault();
    map.setZoom(document.querySelector("#zoomInput").value);
});

document.querySelector("#setMarkerBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const address = document.querySelector("#setMarkerInput").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});