//To Do: fix mobile nav on other pages

var menu = $('nav ul');

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