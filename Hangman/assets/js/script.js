var word = '';
var dashedWord = '';
var length =0
var w = '';
var mistakes = 0;
$.get('text.txt', function(data){
            //split the word list into an array
            var cardRules = data.split('\n');
            //get the random index of the word
            var random = Math.floor(Math.random()*cardRules.length-1);
            console.log(cardRules.length);
            console.log('random index is: '+random);
            console.log(cardRules[random]);
            console.log("Word with missing words:" + cardRules[random]);
            //for easier spellcheck transform the word to UppperCase
            var wordInCaps = cardRules[random].toUpperCase();
            word=wordInCaps;
            console.log('word in caps:' +wordInCaps);
            w = word.split('');
            for(i=0;i<word.length;i++){
                w[i] = '-';
             }
             console.log("word with dashes: " + w);
            //call the method for hiding the word and displaying the dashes
            var display = hideword(wordInCaps);
           ;
        });

function hideword(word){
    //declare the needed variables
    var charArray = Array.from(word);
    var dashArray = {} ;
    var theDiv = document.getElementById("word-dashes");
    console.log('char array: ' + charArray);
    //loop through each element to make a new object with key value pairs
    charArray.forEach(element => {
        console.log(element);
        dashArray[element]= '-';
    });
    length = charArray.length;
    console.log('number of dashes:' + length);
    //loop through the new object and for each key display a dash on the html
    for(i=0; i<charArray.length;i++){
        theDiv.innerHTML+='_';
    }
    //return the array needed for later
    return dashArray;
}
$('h4').click(function(){
    console.log()
})


$('#check-button').click(function(){
    
    var letter = $('#guess-letter').val().toUpperCase();
    var check = false;
    var id = '#'+letter.toLowerCase();
    var theDiv = document.getElementById("word-dashes");
    
    console.log('word test:' + w);
    console.log('innerhtml is : ' + word);
    console.log('lower letter '+ id);
    console.log(letter);
    //transform the word to dashes only
    
    console.log('word splitted and with dashes:' + w);
    //check the word for correct guesses
    for(i=0;i<word.length;i++){
        if(word[i]==letter){
            console.log('We have the letter - ' + letter + ' in the word');
            var indexToChange = i;
            theDiv.innerHTML='';
            $("#guess-letter").val("")
            for(k=0; k<length;k++){
                if(k==indexToChange){
                w[k] =letter;
                if(!w.includes('-')){
                    congrats();
                }
                break;
                }
            }
            theDiv.innerHTML = w.join("");
            console.log('temporary: ' + w)
            console.log("Mistakes made in the if - " +mistakes)
            $(id).css('color','green');
            continue;
        }
    }
    //check the word for wrong guesses
    for(i=0;i<word.length;i++){
        console.log('checkValue in the begginning of the if: '+check);
        console.log('We dont the letter - ' + letter + ' in the word');
        $("#guess-letter").val("")
        if(word[i]==letter){
            check = true;
            break;
        }
        console.log('checkValue in the end of the if: '+check);
    }
    if(check === false){
        $(id).css('color','red');
        mistakes +=1;
        draw(mistakes);
        $("#wrong-times").css('color','red');
        $("#wrong-times").text(mistakes);
    }
})

//This action occurs if we fully guess the word
function congrats(){
    $("#drawing-display").css("background-color","white");
    $("#drawing-display").css('backgroundImage','none');
    $("#wrong-words").css("visibility","hidden");
    //create the button
    var r = $('<input/>').attr({
        type: "button",
        id: "check-button-2",
        onClick:"refreshPage()",
        value:"RESTART"
    });
    //append it to the div
    $("#drawing-display").append(r);
    $("#wrong-whole").text("YOU WIN!");
}

//This action occurs if we make 6 wrong guesses
function dead(){
    $("#drawing-display").css("background-color","white");
    $("#wrong-words").css("visibility","hidden");
    //create the button
    var r = $('<input/>').attr({
        type: "button",
        id: "check-button-2-loose",
        onClick:"refreshPage()",
        value:"RESTART"
    });
    //append it to the div
    $("#drawing-display").append(r);
    $("#wrong-whole").text("YOU LOOSE!");
}

//Here we will check for the mistakes made and draw the man
function draw(wrong){
    switch(wrong){
        case 1:
            $("#d8").css('visibility','visible');
            $("#drawing-display").css('backgroundImage','url(assets/images/head.png)');
            break;
        case 2:
            $("#d7").css('visibility','visible');
            $("#drawing-display").css('backgroundImage','url(assets/images/head2.png)');
            break;
        case 3:
            $("#d6").css('visibility','visible');
            $("#drawing-display").css('backgroundImage','url(assets/images/leftHand.png)');
            break;
        case 4:
            $("#d5").css('visibility','visible');
            $("#drawing-display").css('backgroundImage','url(assets/images/rightHand.png)');
            break;
        case 5:
            $("#d4").css('visibility','visible');
            $("#drawing-display").css('backgroundImage','url(assets/images/leftLeg.png)');
            break;
        case 6:
            $("#d3").css('visibility','visible');
            $("#drawing-display").css('backgroundImage','url(assets/images/leftLeg.png)');
            dead();
            break;
    }
}

function refreshPage(){
    location.reload();
}
