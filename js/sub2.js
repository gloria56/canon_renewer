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
  // imgClick();
});

// $('img').on('click',function(){
//   fnImgPop('img');
// });

// function imgClick (){
//     var imgList = $('.poster');
//     for(var clickImg = 0; clickImg < imgList.length; clickImg ++){
//       var url = imgList[clickImg].src;
//       imgList[clickImg].click({url_:url},function(e){
//         fnImgPop(e.data.url_);
//       });
//     }
// }

function fnImgPop(url){
 var img=new Image();
 img.src=url;
 var img_width=img.width;
 var win_width=img.width+25;
 var img_height=img.height;
 var win=img.height+30;
 var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+img_height+', menubars=no, scrollbars=auto');
 OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
}
