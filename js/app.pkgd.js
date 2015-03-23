/**
* Curcooma! Game Engine
*
* @desc This is the main function representing the game engine of Curcooma!. 
* @author [@Freizeitler]
* @dependency jQuery, ...
*/
var getGender = function() {
	return 'male';
},
playerGender = getGender(),
playerType = 03,
guestCount = 12;


$.fn.curcooma = function() {
	var settings = {
		user: {
			gender: playerGender,
			type: playerType
		},
		guestCount: guestCount 
	};

	$('p').text(settings.user.gender)
 

};

// init Curcooma!
$(document).ready(function() {
	$('body').curcooma();
});
//# sourceMappingURL=app.pkgd.js.map