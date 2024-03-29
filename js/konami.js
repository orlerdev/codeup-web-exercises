//--      --////--    JQUERY EQUIVALENT OF AN IIFE FUNCTION  --////--      --//
// $(function () {
    //--      --////--    GLOBAL VARIABLES  --////--      --//
    const konamiCode = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65"];
    let userInput = [];
    const titleStarter = document.querySelector('.title-starter');
    const titleMusic = document.querySelector('#title-music');
    const gameOverMusic = document.querySelector("#game-over-music");
    const jungleLevelMusic = document.querySelector("#jungle-level-music");




    //--      --////--    GLOBAL FUNCTIONS  --////--      --//
    const equalArrays = (arr1, arr2) => {
        return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
    };
    
    //--      --////--    TITLE MUSIC ADDITION  --////--      --//
// $(".title-starter").append("<audio id=\"music-title-music\" src=\"../assets/audio/title_music.mp3\"></audio>");
// $("#music-title-music").get(0).play();

window.addEventListener('animationend', function(titleStarter) {
    titleMusic.play()
})

window.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key === '13' && userInput.length !== 10) {
        userInput = [];
        gameOverMusic.play();
    } else if (key ==='13' && userInput.length === 10) {
        alert("You have 30 lives!");
        jungleLevelMusic.play();
        return equalArrays(userInput, konamiCode);
    } else {
        userInput.push(e.key)
    }
})


    //--      --////--    START SCREEN KEYPRESS LISTENER  --////--      --//
//    $(document).keydown(function (e) {
//        let key = e.which;
//        // titleMusic.play();
//        if (key === 13 && userInput.length !== 10) {
//            alert(`Correct code not entered`);
//            userInput = [];
//            gameOverMusic.play()
//        } else if (key === 13 && userInput.length === 10) {
//            alert("You have 30 lives!")
//            jungleLevelMusic.play()
//            return equalArrays(userInput, konamiCode);
//        } else {
//            userInput.push(e.which);
//        }
//    });

    //--      --////--    SELECTOR MOVEMENT FUNCTION  --////--      --//
    $(document).keydown(function (e) {
        let key = e.which;

        if (key === 38) {
            $(".selection-icon").css("bottom", "207px");
            // $(".title-blackout").css({
            //     "bottom": "318px",
            //     "display": "inline-block"
            // });
        } else if (key === 40) {
            $(".selection-icon").css("bottom", "160px");
            // $(".title-blackout").css({
            //     "bottom": "260px",
            //     "display": "inline-block"
            // })
        } else {
            $(".title-blackout").css("display", "none");
        }
    });

    //--      --////--    KEYPRESS LOG FUNCTIONS  --////--      --//
// $(document).keydown(function (e) {
//     if (e.which === 13) {
//         console.log("enter key pressed");
//     }
// });

    $(document).keydown(function (e) {
        if (e.which === 38) {
            console.log("up arrow pressed");
        }
    });

    $(document).keydown(function (e) {
        if (e.which === 40) {
            console.log("down pressed");
        }
    });

    $(document).keydown(function (e) {
        if (e.which === 37) {
            console.log("left arrow pressed");
        }
    });

    $(document).keydown(function (e) {
        if (e.which === 39) {
            console.log("right arrow pressed pressed");
        }
    });

    $(document).keydown(function (e) {
        if (e.which === 66) {
            console.log("b key pressed");
        }
    });

    $(document).keydown(function (e) {
        if (e.which === 65) {
            console.log("a key pressed");
        }
    });
    


