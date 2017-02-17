var streams = ["brunofin", "comster404", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
$url = "https://wind-bow.gomix.me/twitch-api/streams/";


$(document).ready(function() {
    function checkOnlineTwiches() {
        $("#twichTableBody").html('<tbody id="twichTableBody"><tr><td></td><td></td><td></td></tr></tbody>');
        for (var i = 0; i < streams.length; i++) {

            $.ajax({
                url: $url + streams[i],
                dataType: "JSONP",
                type: "GET"
            }).done(function(response) {
                if (!response.stream) {
                    return console.log(response + " is offline")
                } else {
                    $("#twichTable > tbody:last-child").append('<tr>' +
                        '<td><img class="animated fadeInDown img-thumbnail img-responsive" style="width: 10%; height: 10%" src="' + response.stream.channel.logo + '"/></td>' +
                        '<td>' + response.stream.channel.display_name + '</td>' +
                        '<td><a href class="btn btn-large btn-block btn-default" src="' + response.stream.channel.url + '">' + response.stream.channel.url + '</a></td>' +
                        '</tr>');

                    return console.log(response);
                }
            })
        };
    }

    function checkOnlineTwiches() {
        $("#twichTableBody").html('<tbody id="twichTableBody"><tr><td></td><td></td><td></td></tr></tbody>');
        for (var i = 0; i < streams.length; i++) {

            $.ajax({
                url: $url + streams[i],
                dataType: "JSONP",
                type: "GET"
            }).done(function(response) {
                if (!response.stream) {
                    return console.log(response._links.channel + " is offline")
                } else {
                    $("#twichTable > tbody:last-child").append('<tr>' +
                        '<td><img class="animated fadeInDown img-thumbnail img-responsive" style="width: 10%; height: 10%" src="' + response.stream.channel.logo + '"/></td>' +
                        '<td>' + response.stream.channel.display_name + '</td>' +
                        '<td><a href class="btn btn-large btn-block btn-default" src="' + response.stream.channel.url + '">' + response.stream.channel.url + '</a></td>' +
                        '<td></td>' +
                        '</tr>');

                    return console.log(response);
                }
            })
        };
    }

    function checkOfflineTwiches() {
        $("#twichTableBody").html('<tbody id="twichTableBody"><tr><td></td><td></td><td></td><td></td></tr></tbody>');
        for (var i = 0; i < streams.length; i++) {

            $.ajax({
                url: $url + streams[i],
                dataType: "JSONP",
                type: "GET"
            }).done(function(response) {
                if (!response.stream) {
                    return console.log(response + " is offline")
                } else {
                    $("#twichTable > tbody:last-child").append('<tr>' +
                        '<td><img class="animated fadeInDown img-thumbnail img-responsive" style="width: 10%; height: 10%" src="' + response.stream.channel.logo + '"/></td>' +
                        '<td>' + response.stream.channel.display_name + '</td>' +
                        '<td><a href class="btn btn-large btn-block btn-default" src="' + response.stream.channel.url + '">' + response.stream.channel.url + '</a></td>' +
                        '<td></td>' +
                        '</tr>');

                    return console.log(response);
                }
            })
        };
    }


    $("#onlineTwich").on("click", checkOnlineTwiches);
    $("#offlineTwich").on("click", checkOfflineTwiches);
});