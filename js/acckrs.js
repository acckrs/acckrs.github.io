
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


    $("#getNewQuote").on("click", randomQuote);
  
});
    



