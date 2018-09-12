var animals = ["Cats", "Dogs", "Birds", "Fish",];

function buttonWork() { 
    var animal =  $("#searchbox").val();
    console.log(animal);
        var queryURL = "https://api.giphy.com/v1/gifs/random?q=&api_key=XTfIqK52UP014oNtjgckUK4TpsGCFzyT&tag=" + animal;

     $.ajax({
        url: queryURL,
        method: "GET"
      })
            .then(function (response) {
                console.log(response);
                var imageUrl = response.data.images.fixed_height.url;
                console.log(imageUrl);
                var selectedImage = $("<img src='" + imageUrl + "'>");
                console.log(selectedImage);

                $("#images").prepend(selectedImage);
            });
}

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


    renderButtons();

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var searchTerm = $("#searchbox").val();
        animals.push(searchTerm);
        renderButtons(); 
        console.log(animals);

    });

    $("#buttons").on("click", function (event) {
        event.preventDefault();
        buttonWork();
    });

});
