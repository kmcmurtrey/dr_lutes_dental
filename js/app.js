//$(funtion() {
//  var pull = $('#pull');
//  var menu = $('nav ul');
//  var menuHeight = menu.height();
//  
//  
//  $(pull).on('click', function(e) {
//    e.preventDefault();
//    menu.slideToggle();
//  });
//});
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