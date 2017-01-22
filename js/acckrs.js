
$(document).ready(function () {
    function randomQuote() {
        var $url = "http://api.forismatic.com/api/1.0/";
        $url += '?&' + $.param({
            'method': 'getQuote',
            'format': 'jsonp',
            'lang': 'en'
            //'callback':'test'
        })+'&jsonp=?';

        $.ajax({
            url: $url,
            dataType: "JSONP",
            type: "GET",
            
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
            //'callback': 'test'
        })
        $iconUrl = 'http://openweathermap.org/img/w/';
        $.ajax({
            url: $weatherUrl,
            type:"GET"
        }).done(function (response) {
            $temp = {
                "c": Math.round(response.main.temp) + ' C  ' + response.weather[0].description,
                "f": Math.round(response.main.temp * 9 / 5 + 32) + ' F  ' + response.weather[0].description
            };
            $iconUrl += response.weather[0].icon + '.png';
            //$tempC = Math.round(response.main.temp) + "C  " + response.weather[0].description;
            console.log(response);
            console.log('temperatura u C: ' + Math.round(response.main.temp));
            $("#tempC").text($temp['c']);
            //$("#weatherIcon").attr("src", $iconUrl);
            console.log('temperatura u F: ' + response.main.temp*9/5+32);
            });
    });
   // $("#weatherIcon").on("click", $iconUrl);
      $("#getNewQuote").on("click", randomQuote);
    // $("#checkPosition").on("click", getLocation);
      $("#tempC").on('click', function () {
          var current = $(this).data('nexttemp');
          $("#tempC").text($temp[current]);
          //
          if (current == 'c') {
              $(this).data('nexttemp', 'f');
              return;
          }
          $(this).data('nexttemp', 'c');

      });
});
    



