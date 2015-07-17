(function(){
  'use strict';

  /* code here! */
  // 首页的轮播图
  var navSwiper = new Swiper('#slide',{
    pagination : '.slide-pagination',
    loop: true,
    autoplay: 1500,//可选选项，自动滑动
    //pagination : '#swiper-pagination1',
  });

  var mySwiper = new Swiper('#news',{
    pagination : '.news-pagination',
    loop: true,
    autoplay: 1200,//可选选项，自动滑动
    //pagination : '#swiper-pagination1',
  });

  // 菜单部分
  $('nav').on('touchend', function(e){
    e.stopPropagation();
    $('.has-child').removeClass('active');
    $('.nav-child').removeClass('active');
    $('.nav').toggleClass('active');
  });

  $('[data-link]').on('touchend', function(){
    var link_value = $(this).attr('data-link'),
        link_id = $(this).attr('data-linkId'),
        href = '';
    href = link_id ? link_value + '.html#' + link_id : link_value + '.html'; 
    location.href = href;
    // link_id ? $('body').scrollTop(-100): '';
  });

  $('.has-child').on('touchend',function(e){
    $(this).siblings('.has-child').removeClass('active');
    $(this).toggleClass('active');
    $(this).siblings('.has-child').next().removeClass('active');
    $(this).next().toggleClass('active');
  });

  $('.nav').on('touchend', function(e){
    e.stopPropagation();
  });
  
  $('body').on('touchend', function(){
    $('.has-child').removeClass('active');
    $('.nav-child').removeClass('active');
    $('.nav').removeClass('active');
  });

  // 下拉加载
  var num = 3;
  var sum = $('.scroll').children().length;
  $(window).scroll(function(){
   if(num == sum-1){
      $('.scroll-more').html("全部加载");
    } else {
      var scrollTop = $(this).scrollTop();
      var scrollHeight = $(document).height();
      var windowHeight = $(this).height();
    　if(scrollTop + windowHeight + 0 >= scrollHeight){
        $('.scroll-more i').addClass('active');
        setInterval(function(){
          $('.scroll-more i').removeClass('active');
          if(num <= sum){
            $('.scroll > :eq('+ num + ')').show();
          }
        },1000);
        num++;
      }
  　}
  });

  // 判断hash值是否存在
  if(location.hash){
    var offset_top = $(location.hash).offset().top - 58;
    $('html,body').stop().animate({scrollTop:offset_top});
  }

})();
