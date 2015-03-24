/*
 * boilerplate by menadwork kommunikation GmbH (http://www.menadwork.com) (2015-03-24, 17:08)
 */

$.fn.curcooma=function(){var a=null,b=(function(){return $.ajax({async:!1,global:!1,url:"../json/game-data.json",dataType:"json",success:function(b){a=b,console.log(b)}}),a}(),function(){return a.gender}),c=b(),d=3,e=12,f={user:{gender:c,type:d},guestCount:e};$("p").text(f.user.gender)},$(document).ready(function(){$("body").curcooma()});
//# sourceMappingURL=app.js.map