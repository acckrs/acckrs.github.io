
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
            //
        });
    };

    $("#getMessage").on("click", randomQuote);
});
    



