$(".yes-button").click(function() {
  $(".Part-Two-Yes").show();
  $(".button").hide();
  $(".title").hide();
  $(".firstImage").hide();
});

$(".continue-p3").dblclick(function(){
    $(".Part-Three-Yes").show();
    $(".Part-Two-Yes").hide();
});

$(".question1").click(function(){
    $(".Part-Four-Q1").show();
    $(".Part-Three-Yes").hide();
});

$(".continue-p5").dblclick(function(){
    $(".Part-Five-Yes").show();
    $(".Part-Four-Q1").hide();
});

$(".continue-goodend").click(function(){
    $(".Story-Ending-Yes").show();
    $(".Part-Five-Yes").hide();
});

$(".question2").click(function(){
    $(".Part-Four-Q2").show();
    $(".Part-Three-Yes").hide();
});

$(".resetprev").click(function(){
    $(".Part-Three-Yes").show();
    $(".Part-Four-Q2").hide();
});

$(".resetbegin").click(function(){
    $(".title").show();
    $(".firstImage").show();
    $(".button").show();
    $(".Part-Four-Q2").hide();
});

$(".no-button").click(function() {
  $(".Part-Two-No").show();
  $(".title").hide();
  $(".firstImage").hide();
  $(".button").hide();
});

$(".continue-badend").click(function(){
    $(".Story-Ending-No").show();
    $(".Part-Two-No").hide();
});

$(".resetbegingood").click(function(){
    $(".title").show();
    $(".firstImage").show();
    $(".button").show();
    $(".Story-Ending-Yes").hide();
});

$(".resetbeginbad").click(function(){
    $(".title").show();
    $(".firstImage").show();
    $(".button").show();
    $(".Story-Ending-No").hide();
});