// fetch("https://swapi.dev/api/films/1/")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         return data;
//     })
//     .catch(error => {
//         console.log(error.message);
//         return error;
//     });

const fetchMovie = async (movie = 1) => {
    try {
        const res = await fetch(`https://swapi.dev/api/films/${movie}`)
        const data = await res.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e.message);
    }
}


const getCharacter = async (character = 1) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${character}/`);
        const data = await res.json();
        console.log(data);
        return await data;
    } catch (e) {
        console.log(e.message);
    }
}

(async() => {
    const luke = await getCharacter(1);
})();


