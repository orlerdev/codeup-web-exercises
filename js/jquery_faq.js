const $dd = $('dd');
const $dt = $('dt');

$dt.css('cursor', 'pointer');
$('a').click(function(e) {
    e.preventDefault();
    $dd.toggleClass('invisible');
})

$dt.click(function(e) {
    e.preventDefault();
    $(this).toggleClass('highlight');
    $(this).next().toggleClass('invisible');
})

