// TypeWriter Animation
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 25,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 1000,
    loop: true
  });

// Navigation Menu
$(document).ready(function(){
  $('.menu').click(function(){
    $('ul').toggleClass('active');
  })
})
