$(document).ready(function(){
    $("#menu").on('click',function(){
    $(".nav_bar").toggle()
    });
    $("#menu").on('click',function(){
        $("#arrow").css({"display":"none"})
    })
  
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#client").offset().top
        }, 2000);
    });
 
    $("#services").click(function() {
        $('html, body').animate({
            scrollTop: $(".row_design").offset().top
        }, 2000);
    });
    $("#projects").click(function() {
        $('html, body').animate({
            scrollTop: $(".gallery_image").offset().top
        }, 2000);
    });
    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".footer_icon").offset().top
        }, 2000);
    });
})