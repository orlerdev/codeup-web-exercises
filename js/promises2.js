(async() => {

    const characterSearch = document.querySelector("#character-input");
    const planetSearch = document.querySelector("#planet-input");
    const filmSearch = document.querySelector("#film-input");
    const searchOutputs = document.querySelector(".outputs");
    const planetsList = document.querySelector(".character-results");
    const characterList = document.querySelector(".character-results");
    const filmList = document.querySelector(".film-results");
    const charBtn = document.querySelector(".char-btn");
    const filmBtn = document.querySelector(".film-btn");
    const planetBtn = document.querySelector(".planet-btn");

    const getPlanetName = async (planetName) => {
        try {
            const url = (`https://swapi.dev/planets/?search=${planetName}`);
            const res = await (url);
            const data = await res.json();
            return data.name;
        } catch (e) {
            console.log(e.message);
        }
    };

    const getCharacters = async (characterName) => {
        try {
            const url = (`https://swapi.dev/people/?search=${characterName}`);
            const res = await (url);
            const data = await res.json();
            let character = {
                name: `${data.name}`,
                eyeColor: `${data.eye_color}`
            };
            return character;
        } catch (e) {
            console.log(e.message);
        }
    };

    const getFilm = async (filmTitle) => {
        try {
            const url = (`https://swapi.dev/films/?search=${filmTitle}`);
            const res = await (url);
            const data = await res.json();
            return data;
        } catch (e) {
            console.log(e.message);
        }
    };
    filmBtn.addEventListener("click", (e) => {
        console.log("event fired");
        e.preventDefault();
        let filmResult = getFilm(`e.value`);
        console.log(filmResult);
        filmList.appendChild(document.createElement("li")).innerText = filmResult;
    });
    charBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("event fired");
        let characterResult = getCharacters(`e.value`);
        console.log(characterResult);
        characterList.appendChild(document.createElement("li")).innerText = characterResult;
    });
    planetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("event fired");
        let planetResult = getPlanetName(`e.value`);
        console.log(planetResult);
        planetsList.appendChild(document.createElement("li")).innerText = planetResult;
    });

})();