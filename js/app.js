/**
 * Curcooma! Game Engine
 *
 * @desc This is the main function representing the game engine of Curcooma!.
 * @author [@Freizeitler]
 * @dependency jQuery, ...
 */

$.fn.curcooma = function() {

    // consume game-data.json
    var gameData = null,
        getGameData = (function() {
            $.ajax({
                'async': false,
                'global': false,
                'url': '../json/game-data.json',
                'dataType': "json",
                'success': function(data) {
                    gameData = data;
                    console.log(data);
                }
            });
            return gameData;
        })(),
        getGender = function() {
            return gameData.gender;
        },
        playerGender = getGender(),
        playerType = 03,
        guestCount = 12;

    // Overall settings
    var settings = {
        user: {
            gender: playerGender,
            type: playerType
        },
        guestCount: guestCount
    };


    $('p').text(settings.user.gender);


};

// init Curcooma!
$(document).ready(function() {
    $('body').curcooma();
});
