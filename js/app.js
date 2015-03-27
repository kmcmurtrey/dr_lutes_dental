//Mobile navigation

var menu = $('.header-nav-slide');

$('#pull').click(function(e) {
  e.preventDefault();
  menu.slideToggle();
});

$(window).resize(function() {
  var w = $(window).width();
  if(w > 480 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
})


//Image slideshow

function slideSwitch() {
  var $active = $('#slideshow img.active');
  var $next;
  
  if ($active.next().length !== 0) {
    $next = $active.next();
  } else {
    $next = $('#slideshow img').first();
  }
  
  $active.addClass('last-active');
  
  $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 1000, function() {
      $active.removeClass('active last-active');
  })  
}

$(function() {
  setInterval(slideSwitch, 5000);
})









