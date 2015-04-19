/*
 * Curcooma by Henry Zeitler (https://github.com/Freizeitler))
 */

$.fn.curcooma=function(){!function(){$.ajax({async:!1,global:!1,url:"../json/player-data.json",dataType:"json",success:function(a){console.log(a),playerData=a.player,restaurantData=a.restaurant,gameData=a}})}(),function(){$.ajax({async:!1,global:!1,url:"../json/menu-data.json",dataType:"json",success:function(a){console.log(a),mealData=a}})}();switch($(".player-name").text(playerData.name),$(".player-level").text(playerData.level),playerData.type){case 1:playerPic="https://polymer-tut.appspot.com/images/avatar-01.svg";break;case 2:playerPic="https://polymer-tut.appspot.com/images/avatar-07.svg";break;case 3:playerPic="https://polymer-tut.appspot.com/images/avatar-03.svg";break;case 4:playerPic="https://polymer-tut.appspot.com/images/avatar-06.svg";break;case 5:playerPic="https://polymer-tut.appspot.com/images/avatar-08.svg";break;default:playerPic="https://polymer-tut.appspot.com/images/avatar-05.svg"}$(".player-pic img").attr("src",playerPic),$(".restaurant-name").text(restaurantData.name),$(".restaurant-money").text(gameData.balance),$(".restaurant-seats").text(restaurantData.seats)},$(document).ready(function(){$("body").curcooma()});
//# sourceMappingURL=curcooma_engine.js.map