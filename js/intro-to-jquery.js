// jQuery("h3").click(function() {
//     $(this).next().slideToggle(500);
// })

let string = "Test string";

$("h3").click(function() {
    console.log(`You can use template literals to return ${string} values`)
})

// let libraryText = $("#library").text();
// console.log(libraryText); //--      --////--    jQuery  --////--      --//
// $("#library").text(`${libraryText} is a library.`) //--      --////--    #library now shows "jQuery is a library."  --////--      --//

//--      --////--    JQUERY REFERENCES  --////--      --//
// THIS ACCOMPLISHES THE SAME THING AS ABOVE
// DOES NOT THROW AN ERROR
let $libraryReference = $("#library");
let libraryText = $libraryReference.text();
console.log(libraryText);
$libraryReference.text(`${libraryText} is a library`);

//--      --////--    SETTING VARIABLES  --////--      --//
// -logging libraryText will still return the original value of $libraryReference.text()
// because it stores the value before it was mutated
// -using the text() method on the element will return  the updated value

console.log(libraryText); //--      --////--    jQuery  --////--      --//
console.log($libraryReference.text()); //--      --////--    jQuery is a library  --////--      --//

//--      --////--    CHANGE A SINGLE CSS PROPERTY  --////--      --//
$("p, li").text("jQuery takes over").css("color", "hotpink");

//--      --////--    CHANGE MULTIPLE CSS PROPERTIES  --////--      --//
// -- you need to pass an object with the properties in order to change multiple properties
$("li").css({
    "color": "dodgerblue",
    "font-weight": "bold",
    "font-size": "36px"
})