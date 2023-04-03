const setFavorite = async (movie) => {
    try {
        let url = `http://localhost:3000/favorites`;
    let options = {
        method: "POST",
        header: {
            "Authorization": ``
        },
        body: JSON.stringify(movieData)
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
    } catch (e) {
        console.log(e.message);
    }
};