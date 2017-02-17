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
                    return console.log(response.stream.channel.url + ' is offline')
                } else {
                    $("#twichTable > tbody:last-child").append('<tr>' +
                        '<td><img class="animated fadeInDown img-thumbnail img-responsive" style="width: 10%; height: 10%" src="' + response.stream.channel.logo + '"/></td>' +
                        '<td>' + response.stream.channel.display_name + '</td>' +
                        '<td><a href class="btn btn-large btn-block btn-default" src="' + response.stream.channel.url + '">' + response.stream.channel.url + '</a></td>' +
                        '<td>Online</td>' +
                        '</tr>');

                    return console.log(response);
                }
            })
        };
    }

    function checkOfflineTwiches() {

        $('#twichTable').html('<table item-width="70%" id="twichTable" class="table">' +
            '<thead>' +
            '<tr>' +
            '<th>Channel link</th>' +
            '<th>Channel status</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="twichTableBody">' +
            '<tr>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>');
        $("#twichTableBody").html('<tbody id="twichTableBody"><tr><td></td><td></td><td></td></tr></tbody>');
        for (var i = 0; i < streams.length; i++) {

            $.ajax({
                url: $url + streams[i],
                dataType: "JSONP",
                type: "GET"
            }).done(function(response) {
                if (!response.stream) {
                    $("#twichTable > tbody:last-child").append('<tr>' +
                        '<td><a href class="btn btn-large btn-block btn-default" src="' + response._links.channel + '">' + response._links.channel + '</a></td>' +
                        '<td>Offine</td>' +
                        '</tr>');
                    return console.log(response._links.channel + " is offline")
                } else {
                    return console.log(response._links.channel + " is offline")
                }
            })
        };
    }


    $("#onlineTwich").on("click", checkOnlineTwiches);
    $("#offlineTwich").on("click", checkOfflineTwiches);
});