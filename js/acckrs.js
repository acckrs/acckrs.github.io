
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
    var latitude = '';
    var longitude = '';
    navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude.toString();
        longitude = position.coords.longitude.toString();
        //
    });
    console.log('Latitude is: '+latitude + ' and the longitude is: ' + longitude);
    $("#getNewQuote").on("click", randomQuote);
   // $("#checkPosition").on("click", getLocation);
});
    



