var animals = ["Cats", "Dogs", "Birds", "Fish",];

function renderButtons () {
    $("#buttons").empty();
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons").append(a);
    }
}

$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var searchTerm = $("#searchbox").val();
        $("#searchbox").text("");
        $("#buttons").append("<button id='button'>" + searchTerm + "</button>");

        animals.push(searchTerm);
        console.log(animals);

    });

    $("#buttons").on("click", function (event) {
        event.preventDefault();
        var searchTerm = $("#searchbox").val();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=&api_key=XTfIqK52UP014oNtjgckUK4TpsGCFzyT&q=" + searchTerm;
        console.log(searchTerm);
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                var imageUrl = response.data[0].images.fixed_height.url;
                console.log(imageUrl);
                var selectedImage = $("<img src='" + imageUrl + "'>");
                console.log(selectedImage);

                $("#images").prepend(selectedImage);
            });


    });

});
