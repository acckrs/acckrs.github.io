$(document).ready(function() {
    function checkTwich() {
        $url = "https://api.twitch.tv/kraken/streams/freecodecamp?callback=?;"
        $.ajax({
            url: $url,
            dataType: "JSONP",
            type: "GET"
        }).done(function(response) {
            console.log(response);
        })
    };
    $("#testTwich").on("click", checkTwich);
});