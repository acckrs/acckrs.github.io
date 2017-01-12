
$(document).ready(function () {
    function randomQuote() {


        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?&method=getQuote&format=jsonp&lang=en&jsonp=?",
            dataType: "JSONP"
        }).done(function (reponse) {
            console.log(response.quoteAuthor);
        });
    };

    $("#getMessage").on("click", randomQuote);
});
    



