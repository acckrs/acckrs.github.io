
$(document).ready(function () {
    function randomQuote() {


        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?",
            
            data: "method=getQuote&format=jsonp&lang=en",
        }).done(function (reponse) {
            console.log(response);
        });
    };

    $("#getMessage").on("click", randomQuote);
});
    



