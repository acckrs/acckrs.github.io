
$(document).ready(function () {
    function randomQuote() {


        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&callback=trt",
            dataType: "JSONP"
        }).done(function (reponse) {
            console.log(response);
        });
    };

    $("#getMessage").on("click", randomQuote);
});
    



