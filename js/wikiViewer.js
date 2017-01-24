$(document).ready(function () {
    $.ajaxSetup({ cache: false });

    $("#search-form").submit(function () {
        var $searchString = $("#searchText").val();
        var $wikiElem = $("#wikipedia-links");
        var $wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=info&inprop=url&callback=wikiCallback&search=" + $searchString;

        // clear out old data before new request
        $wikiElem.text("");



        console.log($searchString);
        $.ajax({
            url: $wikiUrl,
            dataType: "JSONP"
        }).done(function (result) {
            console.log($wikiUrl);
            console.log(result);
            console.log($searchString);
            console.log("Nista");
            $("#wikipedia-links").html('<ul id="wikipedia-links">');
            for (var j = 0; j < result[3].length; j++) {
                $("#wikipedia-links").append('<li><a href="' + result[3][j] + '">' +
                                                result[1][j] + '</a><p>' +
                                                result[2][j] + '</p>'
                    );
                $("#wikipedia-links").append('</ul>');
            }

        });

     /*   $("#searchText").autocomplete({
            source: function (request, response) {
                console.log(request.term);
                $.ajax({
                    url: "http://en.wikipedia.org/w/api.php",
                    dataType: "jsonp",
                    data: {
                        'action': "opensearch",
                        'format': "json",
                        'search': request.term
                    },
                    success: function (data) {
                        response(data[1]);
                    }
                });
            }
        });*/

        return false;
    })


    

  

})
