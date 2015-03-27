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
  
  //Loop the $next image back to the beginning of the stack
  if ($active.next().length !== 0) {
    $next = $active.next();
  } else {
    $next = $('#slideshow img').first();
  }
  
  //Add .last-active so the .active img will fade back with a lower z-index
  $active.addClass('last-active');
  
  //Add .active to $next img. Use animate() to change the opacity and remove the classes from $active
  $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 1000, function() {
      $active.removeClass('active last-active');
  })  
}

//Call the slideSwitch() function every 5 seconds
$(function() {
  setInterval(slideSwitch, 5000);
})









