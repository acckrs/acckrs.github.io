$(document).ready(function() {
    function checkTwich() {
        $url = "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp";
        $.ajax({
            url: $url,
            dataType: "JSONP",
            type: "GET"
        }).done(function(response) {
            $("#twichLogo").html('<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="twichLogo"><img class="img-thumbnail img-responsive" src="' + response.logo + '"/></div>')
            $("#twichLink").html('<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="twichLink"><a class="btn btn-large btn-block btn-default" href="' + response.url + '" role="button">' + response.name + '</a></div>')
            return console.log(response);

        })
    };
    $("#testTwich").on("click", checkTwich);
});