import $ from 'jquery';



$(document).ready(function(){
 var labels = $('.gi-label');
  labels.hover(function() {
    labels.stop( true, true );
    labels.css({opacity: 0.5});
    labels.removeClass('icon-show');
    loop(labels.index(this));
  });


  function loop(i) {
      $(labels[i])
        .animate({opacity: 1}, {
          duration: 100,
          complete: function() {
            $(this).toggleClass('icon-show');
          }
        })
        .animate({opacity: 1}, 3000 )
        .animate({opacity: 0.5}, {
          duration: 1000,
          complete: function() {
            $(this).toggleClass('icon-show');
            var next = i+1 == labels.length ? 0 : i+1 ;
            loop(next);
            return;
          }
        }
        );
      return;
  }
  loop(0);


});



