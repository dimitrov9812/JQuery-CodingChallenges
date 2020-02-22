
var rates =[];
var firstCurr;
var firstCurrValue = 0;
var secondCurr;
var secondCurrValue = 0;
var qty = 0;
var result = 0;
getData();
  function getData(movie){
    $.ajax({
        url: "https://api.exchangeratesapi.io/latest",
        method: 'GET',
        dataType: 'JSON',
        success: function(data) 
        {
            rates = data.rates;
            console.log("Success");
        },
        error: function(err) {
          console.log('error:' + err)
        }
      })
}
function getFirstSlect(){
    firstCurr = $("#select-top").val();
    firstCurrValue = rates[firstCurr];
    $("#first-value").html(firstCurr);
    console.log("first select value picked:" + firstCurr);
    console.log("value is: " + firstCurrValue);
}
function getSecondSlect(){
    secondCurr = $("#select-bottom").val();
    secondCurrValue = rates[secondCurr];
    $("#second-value").html(secondCurr);
    console.log("Second select value picked:" + secondCurr);
    console.log("value is: " + secondCurrValue);
}
function getQty(){
    qty = $("#display-qty-text").val();
    $("#value-qty").html(qty);
    console.log("Selected Qty is:" + qty)
}
function replaceQty(){
    qty = result.toFixed(2);
    $("#value-qty").html(qty);
    $("#display-qty-text").val(qty);
    console.log("New" + qty)
}
function calculate() {
    result = qty*(secondCurrValue/firstCurrValue);
    console.log("result is:" +result)
    $("#result").html(result);
    $("#result-text").html(result.toFixed(2))
}   
function action(){
    getFirstSlect();
    getSecondSlect();
    getQty();
    calculate();
}
$(document).ready(function(){
    action();
})

$( "#select-top-field" ).change(function() {
    console.log("Change in the first switch");
    action();
});

$( "#select-bottom-div" ).change(function() {
    console.log("Change in the second switch");
    action();
});
$( "#display-qty-text" ).on("propertychange change keyup paste input", function() {
    console.log("Change in the qty");
    action();
});

$("#swap-butt").click(function (){
    $("#select-top").val(secondCurr);
    $("#select-bottom").val(firstCurr);
    console.log("NEW:"+firstCurr);
    console.log("NEW:"+secondCurr);
    replaceQty();
    getFirstSlect();
    getSecondSlect();
    calculate();
});

    
