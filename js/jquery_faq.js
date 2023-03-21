const $dd = $('dd');
const $dt = $('dt');
const $highlightButton = $('.highlighter-btn');
const $pictureFrame = $('.picture-frame');
const $pictureWrapper = $('.picture-wrapper');
const $swapBtn = $('.swap-btn');

$dt.css('cursor', 'pointer');
$('a').click(function(e) {
    e.preventDefault();
    $dd.toggleClass('invisible');
})

$dt.on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass('highlight');
    $(this).next().toggleClass('invisible');
})
//--      --////--    HIGHLIGHT LAST <li>  --////--      --//
$highlightButton.on("click", function() {
    $('ul').each(function() {
        $(this).children('li').last().css("backgroundColor", "yellow");
    })
})
//--      --////--    WHEN <h3> IS CLICKED, ALL <li> GET BOLD  --////--      --//
$('h3').on('click', function() {
    let $nextUl = $(this).next();
    $nextUl.find('li').css("fontWeight", "bold");
})

//--      --////--    WHEN ANY <li> IS CLICKED, THE FIRST <li> OF PARENT <ul> SHOULD BE BLUE  --////--      --//
$('li').on('click', function() {
    let $parentUL = $(this).parent();
    $parentUL.find('li').first().css("color", "blue");
})


//--      --////--    PICTURE SWAP  --////--      --//
//TODO: Bonus
// Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
// The rules are the following:
// The left frame swaps to the right and takes the image from the frame in the center.
// The center frame swaps randomly to either the left or right.
// The right frame swaps to the left and takes the image from the frame in the center.


$swapBtn.on("click", function() {
    let btn = $(this).attr('id');
    let $commonParent = $(this).parents('.row');
    let $images = $commonParent.find('img');
    let imgSources = [];
    $images.each(function() {
        let srcValue = $(this).attr('src');
        imgSources.push(srcValue);
    })
    switch(btn) {
        case 'leftBtn':
            $($images[0]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[0]);
            break;
        case 'middleBtn':
            break;
        case 'rightBtn':
            break;   
    }
})


