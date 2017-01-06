$("#text1").css("color", "#cc3300");
$("#text2").addClass("animated fadeInDown"); 
$("#about").addClass("lead well");
$("#contact").addClass("h3 well");
$("#contact_text").addClass("well col-xs-12");
$("#quote_text").addClass("blockquote well col-xs-12");
$("#footer_text").addClass("row text-center");

$(document).ready(function () {
    function randomQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
            success: function (response) {
                $("#random-quote").html("<p id='random-quote'>" +
                  response.quoteText + "</p>");

                $("#quoteAuthor").html("<p id='quoteAuthor'>" + response.quoteAuthor + " </p>");
                $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
                  ' (' + response.quoteAuthor + ')');
            }
        });
    }
    $(function () {
        randomQuote();
    });

    $("#getMessage").click(function () {
        randomQuote();
    });
});



