// TypeWriter Animation
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 25,
  backSpeed: 25,
  backDelay: 1000,
  startDelay: 1000,
  loop: true
});

// Navigation Animation
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('.menu-toggle').toggleClass('active')
    $('nav').toggleClass('active')
  })
})
