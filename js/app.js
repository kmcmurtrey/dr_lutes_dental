//Highlight nav links when clicked
$('.main-nav li').click(function(e) {
  $('.active').removeClass('active');
  $(this).addClass('active');
});