var myTime;
$("#new-year-action").click(function start() {
    clearTimeout(myTime);
    var today = new Date();
    var targetDate = new Date("January 1,2021 00:00:00");
    
    //get the current and target date times
    var currentTime = today.getTime();
    var targetDateTime = targetDate.getTime();

    //calculate the time left uniitl the desired date
    var remainingTime = targetDateTime - currentTime;

    //name the variables we will display
    var seconds = Math.floor(remainingTime/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    $("#days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    myTime = setTimeout(start,1000);
});

$("#heart-action").click(function heart() {
    clearTimeout(myTime);
    var today = new Date();
    var targetDate = new Date("February 14,2021 00:00:00");
    
    //get the current and target date times
    var currentTime = today.getTime();
    var targetDateTime = targetDate.getTime();

    //calculate the time left uniitl the desired date
    var remainingTime = targetDateTime - currentTime;

    //name the variables we will display
    var seconds = Math.floor(remainingTime/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    $("#days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    myTime = setTimeout(heart,1000);
});
$("#santa-action").click(function santa() {
    clearTimeout(myTime);
    var today = new Date();
    var targetDate = new Date("December 25,2020 00:00:00");
    
    //get the current and target date times
    var currentTime = today.getTime();
    var targetDateTime = targetDate.getTime();

    //calculate the time left uniitl the desired date
    var remainingTime = targetDateTime - currentTime;

    //name the variables we will display
    var seconds = Math.floor(remainingTime/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    santa,
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    $("#days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    myTime = setTimeout(santa,1000);
});

$("#ghost-action").click(function ghost() {
    clearTimeout(myTime);
    var today = new Date();
    var targetDate = new Date("October 31,2020 00:00:00");
    
    //get the current and target date times
    var currentTime = today.getTime();
    var targetDateTime = targetDate.getTime();

    //calculate the time left uniitl the desired date
    var remainingTime = targetDateTime - currentTime;

    //name the variables we will display
    var seconds = Math.floor(remainingTime/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    $("#days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    myTime = setTimeout(ghost,1000);
});

$("#egg-action").click(function egg() {
    clearTimeout(myTime);
    var today = new Date();
    var targetDate = new Date("April 12,2020 00:00:00");
    
    //get the current and target date times
    var currentTime = today.getTime();
    var targetDateTime = targetDate.getTime();

    //calculate the time left uniitl the desired date
    var remainingTime = targetDateTime - currentTime;

    //name the variables we will display
    var seconds = Math.floor(remainingTime/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    $("#days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    myTime = setTimeout(egg,1000);
});
$("#turkey-action").click(function turkey() {
    clearTimeout(myTime);
    var today = new Date();
    var targetDate = new Date("November 26,2020 00:00:00");
    
    //get the current and target date times
    var currentTime = today.getTime();
    var targetDateTime = targetDate.getTime();

    //calculate the time left uniitl the desired date
    var remainingTime = targetDateTime - currentTime;

    //name the variables we will display
    var seconds = Math.floor(remainingTime/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    $("#days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    myTime = setTimeout(turkey,1000);
});

$("#start-button").click(function start() {
    clearTimeout(myTime);
    var today = new Date();
    var monthString;
    var getDay = $("#day-input").val();
    console.log(getDay)
    var getMonth =$("#month-input").val();
    switch(getMonth){
        case 1:
            monthString="January";
        break
        case 2:
            monthString="February";
        break
        case 3:
            monthString="March";
        break
        case 4:
            monthString="April";
        break
        case 5:
            monthString="May";
        break
        case 6:
            monthString="June";
        break
        case 7:
            monthString="July";
        break
        case 8:
            monthString="August";
        break
        case 9:
            monthString="September";
        break
        case 10:
            monthString="October";
        break
        case 11:
            monthString="November";
        break
        case 12:
            monthString="December";
        break
    }
    var getYear = $("#year-input").val();
    var getHours = $("#hour-input").val();
    var getMinutes = $("#minute-input").val();
    var getSeconds = $("#seconds-input").val();
    var getLocation = $("#location").val();
    var targetDate = new Date(getMonth+" "+getDay+" "+getYear+" "+getHours+":"+getMinutes+":"+getSeconds);
    //get the current and target date times
    var currentTime = today.getTime();
    var targetDateTime = targetDate.getTime();

    //calculate the time left uniitl the desired date
    var remainingTime = targetDateTime - currentTime;

    //name the variables we will display
    var seconds = Math.floor(remainingTime/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    $("#days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);
    $("#city").text(getLocation);

    myTime = setTimeout(start,1000);
});