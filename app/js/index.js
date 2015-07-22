(function(){
  'use strict';

  /* code here! */
  // 首页的轮播图
  var navSwiper = new Swiper('#slide',{
    direction: 'horizontal',
    pagination : '.slide-pagination',
    loop: true,
    autoplay: 1500,
    autoplayDisableOnInteraction: false,
  });

  var newsSwiper1 = new Swiper('#newsSwiper1',{
    pagination : '.news-pagination',
    loop: false,
    // autoplay: 1200,
  });
  var newsSwiper2 = new Swiper('#newsSwiper2',{
    loop: false,
    autoplay: 1200,
    autoplayDisableOnInteraction: false,
  });
  newsSwiper1.params.control = newsSwiper2;
  newsSwiper2.params.control = newsSwiper1;

  // 菜单部分
  $('nav').on('click', function(e){
    e.stopPropagation();
    $('.nav').toggleClass('active');
  });

  $(document.body).on('click', function(){
    $('.nav').removeClass('active');
  });

  // 链接跳转
  $('[data-link]').on('click', function(){
    var link_value = $(this).attr('data-link'),
        link_id = $(this).attr('data-linkId'),
        href = '';
    href = link_id ? link_value + '.html#' + link_id : link_value + '.html'; 
    location.href = href;
    // link_id ? $('body').scrollTop(-100): '';
  });
  
  // 下拉加载
  var num = 3;
  var sum = $('.scroll').children().length;
  $(window).scroll(function(){
   if(num == sum-1){
      $('.scroll-more').html("<i></i>" + "全部加载");
    } else {
      var scrollTop = $(this).scrollTop();
      var scrollHeight = $(document).height();
      var windowHeight = $(this).height();
    　if(scrollTop + windowHeight + 0 >= scrollHeight){
        // $('.scroll-more i').addClass('active');
        // setInterval(function(){
        //   $('.scroll-more i').removeClass('active');
          if(num <= sum){
            $('.scroll > :eq('+ num++ + ')').show();
          }
        // },1000);
        // num++;
      }
  　}
  });

  // 判断hash值是否存在
  // if(location.hash){
  //   var offset_top = $(location.hash).offset().top - 58;
  //   $('html,body').stop().animate({scrollTop:offset_top});
  // }

})();
