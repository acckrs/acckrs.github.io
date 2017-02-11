$(document).ready(function() {
    function checkTwich() {
        $url = "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp";
        $.ajax({
            url: $url,
            dataType: "JSONP",
            type: "GET"
        }).done(function(response) {
            $("#twichLogo").html('<div id="twichLogo"><img class="img-thumbnail img-responsive" src="' + response.logo + '"/></div>')
            return console.log(response);

        })
    };
    //$("#testTwich").on("click", checkTwich);
    $("#onlineTwich").on("click", checkTwich());
    // $("#offlineTwich").on("click", checkTwich(offline));
});