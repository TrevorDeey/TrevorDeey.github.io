$(document).ready(function() {
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    
    var target = $($(this).attr('href'));
    var scrollToPosition = target.offset().top;
    
    $('html, body').animate(
      {
        scrollTop: scrollToPosition
      },
      500,
      'linear'
    );
  });
});