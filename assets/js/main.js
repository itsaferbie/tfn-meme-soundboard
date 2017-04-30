$(document).ready(function() {
    $('a').click(function(event) {
        event.preventDefault();
        $(this).children('audio').get(0).play();
    });
});