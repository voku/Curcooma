/**
 * Curcooma! Game Engine
 *
 * @desc This is the main function representing the game engine of Curcooma!.
 * @author [@Freizeitler]
 * @dependency jQuery, ...
 */

$.fn.curcooma = function() {


		// consume game-data.json
		var getGameData = (function() {
					$.ajax({
						'async': false,
						'global': false,
						'url': '../json/player-data.json',
						'dataType': "json",
						'success': function(data) {
								console.log(data);
								playerData = data.player;
								restaurantData = data.restaurant;
								gameData = data;
						}
					});
				})();

		// populate player section
		$('.player-name').text(playerData.name);
		$('.player-level').text(playerData.level);
		switch (playerData.type) {
			case 1:
				playerPic = 'https://polymer-tut.appspot.com/images/avatar-01.svg';
				break;
			case 2:
				playerPic = 'https://polymer-tut.appspot.com/images/avatar-07.svg';
				break;
			case 3:
				playerPic = 'https://polymer-tut.appspot.com/images/avatar-03.svg';
				break;
			case 4:
				playerPic = 'https://polymer-tut.appspot.com/images/avatar-06.svg';
				break;
			case 5:
				playerPic = 'https://polymer-tut.appspot.com/images/avatar-08.svg';
				break;
			default:
				playerPic = 'https://polymer-tut.appspot.com/images/avatar-05.svg';
		}
		$('.player-pic img').attr('src', playerPic);

		// populate restaurant info
		$('.restaurant-name').text(restaurantData.name);
		$('.restaurant-money').text(gameData.balance);
		$('.restaurant-seats').text(restaurantData.seats);

		// populate main section



};

// init Curcooma!
$(document).ready(function() {
	$('body').curcooma();
});

//# sourceMappingURL=app.pkgd.js.map