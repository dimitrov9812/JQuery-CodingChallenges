var text;
//get the date

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;


var day = getDayName(today, "EN"); 
console.log(day)

var date = day+", " + mm + '/' + dd;
console.log(date);
console.log(today);
$("#date-text").html(date);
var count = 1;
var visible = 1;
$("#butt-text").click(function(){
    if(visible == 10){
        alert("Maximum tasks filled");
    }
    else{
        //get the task value
        text = $("#text").val();
        console.log(text);
        if(text==" "){
            alert("you cant add an empty task");
        }
        else{
                //create the div
            var div = document.createElement('div');
            div.setAttribute('class', 'task');
            div.setAttribute('id','task-'+count);;
            $("#task-field").append(div);

            //create the checkbox field and append it to the div
            var checkDiv = document.createElement('div');
            checkDiv.setAttribute('class', 'check-div');
            checkDiv.setAttribute('id','check-'+count+"-div");
            $("#task-"+count).append(checkDiv);

            //create the checkboxs itself and append it to the checkbox div
            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('class', 'checkbox');
            checkbox.setAttribute('id','checkbox-'+count);
            $('#check-'+count+"-div").append(checkbox);

            //create the text div
            var textDiv = document.createElement('div');
            textDiv.setAttribute('class', 'text-div');
            textDiv.setAttribute('id','text-div-'+count);
            $("#task-"+count).append(textDiv);

            
            //create the text and append it to the div
            var taskText = document.createElement('p');
            taskText.setAttribute('class', 'task-text');
            taskText.setAttribute('id','task-text-'+count);
            $('#text-div-'+count).append(taskText);
            $("#task-text-"+count).text(text);

            //create the button-div
            var buttonDiv = document.createElement('div');
            buttonDiv.setAttribute('class', 'delete-button-div');
            buttonDiv.setAttribute('id','delete-button-div-'+count);
            $("#task-"+count).append(buttonDiv);

            //create the button
            var button = document.createElement('div');
            button.setAttribute('class', 'delete-button');
            button.setAttribute('id','delete-button-'+count);
            $('#delete-button-div-'+count).append(button);
            $(".delete-button").css('background-image', 'url("/assets/images/thrash.png")');

            count++;
            visible++;
            console.log(count);
            $("#text").val(" ");
        }
       
    }
})
$(document).on('click','.delete-button',function(){
    var id = $(this).attr("id");
    console.log(id);
    var txt = id;
    var numb = txt.match(/\d/g);
    numb = numb.join("");
    $("#task-"+numb).fadeOut(1000);
    visible-=1;
    console.log("VISIBLE"+visible)
})
$(document).on('change','.checkbox',function(){
    if(this.checked) {
        var id = $(this).attr("id");
        console.log(id);
        var txt = id;
        var numb = txt.match(/\d/g);
        numb = numb.join("");
        $("#task-text-"+numb).attr("class","scratched-text")
    }
    else{
        var id = $(this).attr("id");
        console.log(id);
        var txt = id;
        var numb = txt.match(/\d/g);
        numb = numb.join("");
        $("#task-text-"+numb).attr("class","task-text")
    }
});

function getDayName(today, locale)
{
    var date = new Date(today);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

$("#change-butt").click(function(){
    var random = Math.floor(Math.random()*10+1);
    console.log(random);
    if(random == 10){
        $("#image").css('background-image', 'url("/assets/images/nature0.jpg")')
    }
    else{
        $("#image").fadeOut(0.2);
        $("#image").css('background-image', 'url("/assets/images/nature-'+random+'.jpg")')
        $("#image").fadeIn(2000);
    }
})