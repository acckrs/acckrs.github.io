
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $city = $("#city").val();
    var $address = $("#street").val() + ',' + $("#city").val();
    var $url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    $url += '?' + $.param({
        'api-key': "3ef095bfaadb43e6ab67398da470ed46",
        'q': $city
        
    });
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
  
    // load streetview

    // YOUR CODE GOES HERE!
    $.ajax({
        url: $url,
    }).done(function (result) {
       // $("#nytimes-header").text('New York Times Articles About' + $city);
        $("#nytimes-articles").html('<ul id="nytimes-articles" class="article-list">')
        for (var i = 0; i < result.response.docs.length; i++) {
            $("#nytimes-articles").append('<li class="article"><a href="' + result.response.docs[i].web_url + '">' + 
                                                                    result.response.docs[i].headline.main + '</a><p>' +
                                                                    result.response.docs[i].lead_paragraph+'</p></li>');
                };
        $("#nytimes-articles").append('</ul>')
    });
         
     
   


    $greeting.text('So you want to live in '+ $("#street").val() + ',' + $("#city").val()+'?').css("color","white")
    $body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + $address + '&key=AIzaSyAXt_KiHM2AXMqnwRCMHSYmjIbb6wgu5BU">')
    return false;
};

$('#form-container').submit(loadData);
