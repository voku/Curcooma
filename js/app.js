/**
* Curcooma! Game Engine
*
* @desc This is the main function representing the game engine of Curcooma!. 
* @author [@Freizeitler]
* @dependency jQuery, ...
*/

$.fn.curcooma = function(playerGender, playerType, restaurantRevenue) {
	var settings = {
		user: {
			gender: playerGender,
			type: playerType
		},
		revenue: restaurantRevenue
	}

};

// init Curcooma!
$(document).ready(function() {
	$('body').curcooma();
});