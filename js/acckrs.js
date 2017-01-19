
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
            //console.log(response.quoteText.toString());
         });
    };
      
    navigator.geolocation.getCurrentPosition(function (position) {
        $lat= position.coords.latitude;
        $long= position.coords.longitude;
        console.log($lat + ' +++++++ ' + $long);
        $weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
        $weatherUrl += '?&' + $.param({
            'units': 'metric',
            'APPID': '1604ef7d90e80da230c66c3f88530623',
            'lat': $lat,
            'lon': $long
        })
        $iconUrl = 'http://openweathermap.org/img/w/';
        $.ajax({
            url: $weatherUrl,
        }).done(function (response) {
            $iconUrl += response.weather[0].icon + '.png';
            console.log(response);
            console.log($iconUrl);
            console.log('temperatura u C: ' + response.main.temp);
            $("#tempC").text(response.main.temp + 'C');
            console.log('temperatura u F: ' + response.main.temp*9/5+32);
            });
    });
      $("#getNewQuote").on("click", randomQuote);
   // $("#checkPosition").on("click", getLocation);
});
    



