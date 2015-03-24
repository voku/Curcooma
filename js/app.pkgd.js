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
            }
          });
        })();

    // populate player section
    $('.player-name').text(playerData.name);
    switch (playerData.type) {
		  case 1:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+1';
		    break;
		  case 2:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+2';
		    break;
		  case 3:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+3';
		    break;
		  case 4:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+4';
		    break;
		  case 5:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+5';
		    break;
		  default:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+1';
		}
    $('.player-pic img').attr('src', playerPic);


};

// init Curcooma!
$(document).ready(function() {
	$('body').curcooma();
});

//# sourceMappingURL=app.pkgd.js.map