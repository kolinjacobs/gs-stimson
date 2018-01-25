import $ from "jquery";

var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function(direction) {
    var mediaStats = $('.media-stats-num');
    countUp(mediaStats, () => {
      mediaStats.removeClass('media-stats-num');
    });
  },
  offset: '100%'
});

var waypoint2 = new Waypoint({
  element: document.getElementById('basic-waypoint2'),
  handler: function(direction) {
    var mediaStats = $('.engagement-stats-num');
    countUp(mediaStats, () => {
      mediaStats.removeClass('engagement-stats-num');
    });
  },
  offset: '100%'
});


var waypoint3 = new Waypoint({
  element: document.getElementById('basic-waypoint3'),
  handler: function(direction)  {
    $('.circle').removeClass('hide');
    $('.circle-before').removeClass('circle-before');
  },
  offset: '90%'
});

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var countUp = (nums, complete) => {
  nums.each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text().split(',').join('')
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(numberWithCommas(Math.ceil(now)));
      }
    });
  });
  complete();
}