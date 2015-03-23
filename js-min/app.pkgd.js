/*
 * boilerplate by menadwork kommunikation GmbH (http://www.menadwork.com) (2015-03-23, 23:58)
 */

var getGender=function(){return"male"},playerGender=getGender(),playerType=3,guestCount=12;$.fn.curcooma=function(){var a={user:{gender:playerGender,type:playerType},guestCount:guestCount};$("p").text(a.user.gender)},$(document).ready(function(){$("body").curcooma()});
//# sourceMappingURL=app.pkgd.js.map