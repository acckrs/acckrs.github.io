
$(document).ready(function () {
    function randomQuote() {


        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?&method=getQuote&format=json&lang=en",
            dataType: "JSONP"
        }).done(function (reponse) {
            console.log(response);
        });
    };

    $("#getMessage").on("click", randomQuote);
});
    



