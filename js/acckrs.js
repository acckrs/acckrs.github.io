
$(document).ready(function () {
    function randomQuote() {
        var $url = "http://api.forismatic.com/api/1.0/";
        $url += '?&' + $.param({
            'method': 'getQuote',
            'format': 'jsonp',
            'lang': 'en'
            
        })+'&jsonp=?';

        $.ajax({
            url: $url,
            dataType: "JSONP"
        }).done(function (response) {
            $("#quoteText").text(response.quoteText);
            $("#quoteAuthor").text(response.quoteAuthor);
            $("#tweetQuote").attr("href", "http://twitter.com/home/?status=" + response.quoteText + '(' + response.quoteAuthor + ')');
            console.log(response.quoteText.toString());
            //
        });
    };
   // function getLocation() {
    //    navigator.geolocation.getCurrentPosition(function (position) {
      //      console.log(position.coords.latitude + ".........." + position.coords.longitude);
        //});
    // };
    var $lat = '';
    var $long='';
    navigator.geolocation.getCurrentPosition(function (position) {
        $lat= position.coords.latitude;
        $long= position.coords.longitude;
        //96
    });
    console.log('Latitude is: '+$lat + ' and the longitude is: ' + $longe;
    $("#getNewQuote").on("click", randomQuote);
   // $("#checkPosition").on("click", getLocation);
});
    



