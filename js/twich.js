$(document).ready(function() {
    function checkTwich() {
        $url = "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp";
        $.ajax({
            url: $url,
            dataType: "JSONP",
            type: "GET"
        }).done(function(response) {
            $("#twichLogo").html('<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" id="twichLogo"><img class="img-thumbnail img-responsive" src="' + response.logo + '"/></div>')
            $("#twichLink").html('<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" id="twichLink"><a class="btn btn-large btn-block btn-default" href="' + response.url + '" role="button">' + response.name + '</a></div>')
            return console.log(response);

        })
    };
    $("#testTwich").on("click", checkTwich);
});