//--      --////--    JQUERY EQUIVALENT OF AN IIFE FUNCTION  --////--      --//
$(function () {
    //--      --////--    GLOBAL VARIABLES  --////--      --//
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const userInput = [];

    //--      --////--    GLOBAL FUNCTIONS  --////--      --//
    const equalArrays = (arr1, arr2) => {
        return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
    };

    //--      --////--    START SCREEN KEYPRESS LISTENER  --////--      --//

    $(document).keydown(function (e) {
        let key = e.which;
        if (key === 13 && userInput.length !== 10) {
            console.log(`code entered`);
            console.log(userInput);
            console.log(konamiCode);
            console.log(`Correct code not entered`);
            console.log(`Time to move to jungle_load screen`);
            console.log(equalArrays(userInput, konamiCode));
        } else if (key === 13 && userInput.length === 10) {
            console.log(`Successful code entry`);
            console.log(`Load jungle-_load screen with 30 lives`);
            return equalArrays(userInput, konamiCode);
        } else {
            userInput.push(e.which);
        }
    });

    //--      --////--    SELECTOR MOVEMENT FUNCTION  --////--      --//
    $(document).keydown(function (e) {
        let key = e.which;

        if (key === 38) {
            $(".selection-icon").css("bottom", "270px");
            $(".title-blackout").css({
                "bottom": "318px",
                "display": "inline-block"
            });
        } else if (key === 40) {
            $(".selection-icon").css("bottom", "208px");
            $(".title-blackout").css({
                "bottom": "260px",
                "display": "inline-block"
            })
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

});