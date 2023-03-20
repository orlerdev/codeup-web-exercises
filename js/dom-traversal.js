const $box = $('.box');
const $box1 = $('#box1');

$box.on("click", function() {
    // hide the boxes in the OTHER container
    $(this).parents('.container').siblings('.container').find($box).fadeToggle();
} )

//--      --////--    CRAWLING UP THE DOM  --////--      --//
$box1.parents(".container");
$box1.closest('.column');

//--      --////--    CRAWLING DOWN THE DOM  --////--      --//

$box1.find();
$box1.children();

//--      --////--    CRAWLING SIDEWAYS  --////--      --//
$box1.siblings();

//--      --////--    UTILITY METHODS  --////--      --//

$('.dropdown-toggle').on("click", function() {
    $(this).parents('.dropdown-parent').toggleClass('open');
})

