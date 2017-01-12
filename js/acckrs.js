
function randomQuote() {
    

    $.ajax({
        url: "http://api.forismatic.com/api/1.0/?",
        dataType: "JSONP",
        data: "method=getQuote&format=jsonp&lang=en&callback=quote",
    }).done(function (reponse) {
        console.log(response);
    });
};
   
    $("#getMessage").on("click",randomQuote);
    



