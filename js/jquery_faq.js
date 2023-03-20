const $dd = $('dd');
const $dt = $('dt');
const $highlightButton = $('.highlighter-btn');

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

$highlightButton.on("click", function() {
    $('ul').each(function() {
        $(this).children('li').last().css("backgroundColor", "yellow");
    })
})