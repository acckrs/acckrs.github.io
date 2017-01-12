$(document).ready(function () {
    function randomQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&callback=wiki",
            success: function (response) {
              

                console.log(response);

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


