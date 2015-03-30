/**
 * App scripts
 *
 * @desc Scripts to run the frotend
 * @author [@Freizeitler]
 * @dependency jQuery, ...
 */

 $(document).ready(function() {
 		var opener = $('.navi-opener'),
 		target = $('.navigation');
 		opener.on('click', function() {
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

 $(document).ready(function() {
 		var clickTarget = $('.content-nav li');
 		clickTarget.on('click', function() {
 			clickTarget.removeClass('active');
 			$(this).addClass('active');
 		});
 });