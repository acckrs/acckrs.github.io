
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $city = $("#city").val();
    var $address = $("#street").val() + ',' + $("#city").val();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "3ef095bfaadb43e6ab67398da470ed46",
        'q': $city
        
    });
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
  
    // load streetview

    // YOUR CODE GOES HERE!
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    });
    $greeting.text('So you want to live in '+ $("#street").val() + ',' + $("#city").val()+'?').css("color","white")
    $body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + $address + '">')
    return false;
};

$('#form-container').submit(loadData);
