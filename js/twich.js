var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
$url = "https://wind-bow.gomix.me/twitch-api/streams/";


$(document).ready(function() {
    function checkTwich() {
        for (var i = 0; i < streams.length; i++) {

            $.ajax({
                url: $url + streams[i],
                dataType: "JSONP",
                type: "GET"
            }).done(function(response) {
                if (!response.stream) {
                    return console.log(response._links.channel + " is offline")
                } else {
                    $("#twichTable > tbody:last-child").append("<tr><td>Text1</td><td>Text2</td><td>Text3</td></tr>");
                    $("#twichLogo").html('<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="twichLogo"><img class="img-thumbnail img-responsive" src="' + response.stream.channel.logo + '"/></div>')
                    $("#twichLink").html('<div class="animated fadeInDown col-xs-8 col-sm-8 col-md-8 col-lg-8" id="twichLink"><a class="btn btn-large btn-block btn-default" href="' + response.stream.channel.url + '">' + response.stream.channel.display_name + '</a></div>')
                    return console.log(response);
                }
            })
        };
    }
    $("#testTwich").on("click", checkTwich);
});