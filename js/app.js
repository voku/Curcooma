/**
 * App scripts
 *
 * @desc Scripts to run the frotend
 * @author [@Freizeitler]
 * @dependency ember.js
 */

// first things first: let's instantiate our app
window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// TODO: move this code into ember.js
$(document).ready(function () {
  var opener = $('.navi-opener'),
      target = $('.navigation');
  opener.on('click', function () {
    if (!target.hasClass('open')) {
      target.addClass('open');
    } else {
      target.removeClass('open');
    }
  });

  $(document).mouseup(function (e) {
    var container = $('.sidebar');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      target.removeClass('open');
    }
  });
});
