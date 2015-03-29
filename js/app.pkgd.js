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
 });
//# sourceMappingURL=app.pkgd.js.map