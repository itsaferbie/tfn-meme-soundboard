$(document).ready(function() {
    $('.audio-content').click(function(event) {
        event.preventDefault();
        $('.audio-file').prop("volume", 0.4);
        $(this).children('.audio-file').get(0).play();
    });
});