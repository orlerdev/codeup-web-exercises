//--      --////--    JQUERY  --////--      --//
let $jQueryParent = $("#paragraph-parent");
//--      --////--    CANNOT USE NODE METHODS LIKE:  --////--      --//
//--      --////--    jQueryParent.style.color = "red"  --////--      --//

//--      --////--    VANILLA JS   --////--      --//
let vanillaParent = document.querySelector("#paragraph-parent");

$jQueryParent.css({
    "fontWeight": "600",
    "textTransform": "uppercase",
    "fontStyle": "italic"
})

