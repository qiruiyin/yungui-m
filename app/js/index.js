(function(){
  'use strict';

  /* code here! */
  // 获取导航条
  var nav = $('nav'),
  		nav_l = $('.nav');

  $('main').click(function(){
  	$('.nav').hasClass('active') ? $('.nav').removeClass('active') : ' ';
  });

  nav.click(function(e){
  	e.stopPropagation();
  	nav_l.toggleClass('active');
  });

})();
