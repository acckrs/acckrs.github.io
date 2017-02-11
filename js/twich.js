$(document).ready(function() {
    function checkTwich() {
        $url = "https://wind-bow.gomix.me/twitch-api/channels/esl_sc2";
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