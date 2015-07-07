(function(){
  'use strict';

  /* code here! */
  var nav = document.querySelector('nav'),
      nav_l = document.querySelector('.nav');
      
  document.addEventListener('click', function(){
    nav_l.className = 'nav';
  });

  nav.addEventListener('click', function(e){
    e.stopPropagation();
    nav_l.className == 'nav' ? nav_l.className += ' active' : nav_l.className = 'nav';
  });

  // 获取导航条
  // var nav = $('nav'),
  // 		nav_l = $('.nav');

  // $('main').click(function(){
  // 	$('.nav').hasClass('active') ? $('.nav').removeClass('active') : ' ';
  // });

  // nav.click(function(e){
  // 	e.stopPropagation();
  // 	nav_l.toggleClass('active');
  // });

})();


