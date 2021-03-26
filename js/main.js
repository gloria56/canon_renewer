var currenIndex = 0;

setInterval(function(){
 if(currenIndex < 2){
   currenIndex ++;
 }else {
   currenIndex = 0;
 }

  var slideposition = currenIndex * (-1024)+"px";
  $('.sliding').animate({top:slideposition},400);
},5000);

$(function(){
  $('.about_open').mouseover(function(){
    $('.about_submenu').css('display','block');
    $('.product_submenu').hide();
  });
  $('.about_submenu').mouseleave(function(){
    $('.about_submenu').css('display','none');
  });
  $('.product_open').mouseover(function(){
    $('.product_submenu').show();
    $('.about_submenu').css('display','none');
  });
  $('.product_submenu').mouseleave(function(){
    $('.product_submenu').hide();
  });

  $('.another').mouseover(function(){
    $('.product_submenu').hide();
    $('.about_submenu').hide();
  });
});
