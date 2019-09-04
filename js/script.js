$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  dots: true,
});
var colors = ["red", "orange", "pink", "green", "blue"];
var currentIndex = 0;

$(".slider").on("afterChange", function (){
    $(".wrapper").css("background-color", colors[currentIndex++%colors.length]);
});