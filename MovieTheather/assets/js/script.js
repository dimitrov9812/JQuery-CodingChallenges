 var buttarr1 = [];
 var numberOfSeats = 0;
 var finalPrice = 0;
 var movieInfo ={
     title : "",
     duration : "",
     description : "",
     poster : "",
     score : "",
     date : ""
 }
//Create the three types of images
    //create the texts for the legend
    var legendTextOne = document.createElement('h5');
    legendTextOne.id = "legend-text-1";
    legendTextOne.innerHTML = "N/A";
    var legendTextTwo = document.createElement('h5');
    legendTextTwo.id = "legend-text-2";
    legendTextTwo.innerHTML = "Selected";
    var legendTextThree = document.createElement('h5');
    legendTextThree.id = "legend-text-3";
    legendTextThree.innerHTML = "Occupied";

    //create the different types of buttons
    var freeSeat = document.createElement('button');
    freeSeat.id="freeSeat";
    freeSeat.classList.add("seat-button");

    var selectedSeat = document.createElement('button');
    selectedSeat.id="selectedSeat";
    selectedSeat.classList.add("seat-button");
    
    var occupiedSeat = document.createElement('button');
    occupiedSeat.id="occupiedSeat";
    occupiedSeat.classList.add("seat-button");
$(document).ready(function(){
    
    //Append the texts to the image
    $("#left-image").append(legendTextOne);  
    $("#middle-image").append(legendTextTwo);    
    $("#right-image").append(legendTextThree); 

    placeSeats();
})

function placeSeats(){
    //Create a loop for placing the seats 
for (let index = 1; index <= 6; index++) {
    for (let i = 1; i <= 10; i++) {
        //loop each cel

        //check if cell number = 3 or 8 and skill giving it image
        if(i==3 || i==8){
            continue;
        }
        else{
            switch(index){
                case 5:
                    switch(i){
                        case 6:
                        case 7:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).append(seat);
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).append(seat);
                            break;
                    }
                    break;
                case 4:
                    switch(i){
                        case 4:
                        case 5:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).append(seat);
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).append(seat);
                            break;
                    }
                    break;
                case 2:
                    switch(i){
                        case 9:
                        case 2:
                        case 4:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).append(seat);
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).append(seat);
                            break;
                    }
                    break;
                case 6:
                    switch(i){
                        case 9:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).append(seat);
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).append(seat);
                            break;
                    }
                    break;
                    default:
                        var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).append(seat);
                        break;
            }
        }
    }
}
}


function removeSeats(){
    //Create a loop for placing the seats 
for (let index = 1; index <= 6; index++) {
    for (let i = 1; i <= 10; i++) {
        //loop each cel
        console.log('in remove seats')
        //check if cell number = 3 or 8 and skill giving it image
        if(i==3 || i==8){
            continue;
        }
        else{
            switch(index){
                case 5:
                    switch(i){
                        case 6:
                        case 7:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).empty();
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).empty();
                            break;
                    }
                    break;
                case 4:
                    switch(i){
                        case 4:
                        case 5:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).empty();
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).empty();
                            break;
                    }
                    break;
                case 2:
                    switch(i){
                        case 9:
                        case 2:
                        case 4:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).empty();
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).empty();
                            break;
                    }
                    break;
                case 6:
                    switch(i){
                        case 9:
                            var seat = document.createElement('input');
                            seat.id="occupiedSeat";
                            seat.type = "button";
                            buttarr1+=seat;
                            $("#"+index+"-"+i).empty();
                            break;
                            default:
                                var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).empty();
                            break;
                    }
                    break;
                    default:
                        var seat = document.createElement('input');
                                seat.id="seat-butt-"+index+'-'+i;
                                seat.type = "button";
                                seat.classList.add("seat-button");
                                buttarr1+=seat;
                                $("#"+index+"-"+i).empty();
                        break;
            }
        }
    }
}
}
$(document).on('click', '.seat-button', function() {
        var option = $("#select").val();
        price = 0;
        console.log("return: "+option);
        switch(option){
            case "Avengers: Endgame":
                price= 8;
                break;
            case "Predestination":
                price= 11;
                break;
            case "Harry Potter":
                price= 8;
                break;
            case "The Witcher":
                price= 9;
                break;
            case "The curious case of Benjamin Button":
                price= 10;
                break;
            default:
                    price = 20;
                break;
        }
        var currentId = this.id;
        console.log(currentId);
        $("#"+currentId).attr('class', 'reservedSeat');
        numberOfSeats++;
        finalPrice = numberOfSeats*price;
        console.log("Number of seats"+numberOfSeats);
        $("#number-of-seats").html(numberOfSeats);
        $("#price").html(finalPrice);
});
$(document).on('click', '.reservedSeat', function() {
    var currentId = this.id;
    console.log(currentId);
    $("#"+currentId).attr('class', 'seat-button');
    numberOfSeats--;
    finalPrice = numberOfSeats*price;
    console.log("Number of seats"+numberOfSeats);
    $("#number-of-seats").html(numberOfSeats);
    $("#price").html(finalPrice);
});


$( "#select" ).change(function() {
    removeSeats();
    numberOfSeats=0;
    price=0;
    finalPrice= 0;
    $("#number-of-seats").html(numberOfSeats);
    $("#price").html(finalPrice);
    placeSeats();

  var movie = $("#select").val();
    displayMovie(movie);
  });

  function displayMovie(movie){
    $.ajax({
        url: "https://api.themoviedb.org/3/search/movie?api_key=2774e8d9cf7be7186f2dcd76f02a37a7&query="+movie,
        method: 'GET',
        dataType: 'JSON',
        success: function(data) {
            console.log(data);
          var movie = data.results[0];
          movieInfo.title = movie.title;
          movieInfo.description = movie.overview;
          movieInfo.poster = movie.poster_path;
          movieInfo.score = movie.vote_average;
          movieInfo.date = movie.release_date;
          console.log("Name is: " + movieInfo.title);
          console.log("description: "+ movieInfo.description);
          console.log("poster-Url"+ movieInfo.poster);
          console.log("Score"+ movieInfo.score);
          console.log("date:"+ movieInfo.date);
          setMovie(movieInfo.title,movieInfo.poster,movieInfo.description,movieInfo.score,movieInfo.date)
        },
        error: function(err) {
          console.log('error:' + err)
        }
      })
  }

  function setMovie(title,image,description,score,date){
      $("#movie-name-field").html(title);
      $("#date-field").html(date);
      $("#movie-image-field").css('background-image', 'url("http://image.tmdb.org/t/p/w185/'+image+'")');
      console.log("http://image.tmdb.org/t/p/w185/"+ image);
      $("#desc-field").html(description);
      $("#score-field").html(score);
  }

  $("#search-butt").click(function(){
      var title = $("#search-text").val();
      displayMovie(title);
      removeSeats();
      placeSeats();
      $("#opt-6").html(title);
      console.log("Hello"+$("#select").prop("selectedIndex", 0).val());
  })