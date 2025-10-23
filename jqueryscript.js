// var mainDisplay = document.querySelector("main");
// var loadDisplay = document.querySelector(".load-display");


// mainDisplay.style.display = "none";

// setTimeout(() => {
//     loadDisplay.style.display = "none";
//     mainDisplay.style.display = "block";
    
// }, 5000);

// $("#btn3").click(function(){
//   $("#test3").val("Dolly Duck");
// });
$(document).ready(function () {
   
    $("main").hide();

    setTimeout(() => {
        $(".load-display").hide();
        $("main").show();
    }, 5000);


    $(".signin-button").click(function () {
        
       $(".email-display").text($(".signin-email").val()) 
    })


});