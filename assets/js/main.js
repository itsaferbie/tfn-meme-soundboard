$(document).ready(function() {
    $('.audio-content').click(function(event) {
        event.preventDefault();
        $(this).children('.audio-file').get(0).play();
    });
});