$(document).ready(function () {
    function randomQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
            success: function (response) {
                $("#random-quote").html("<p id='random-quote'>" + response.quoteText + "</p>");

                $("#quoteAuthor").html("<p id='quoteAuthor'>" + response.quoteAuthor + " </p>");
               /* $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
                  ' (' + response.quoteAuthor + ')');*/
            }
        });
    }
    $(function () {
        randomQuote();
    });

    $("#getMessage").on("click", function () {
        randomQuote();
    });
});


