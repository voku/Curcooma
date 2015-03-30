/*
 * boilerplate by menadwork kommunikation GmbH (http://www.menadwork.com) (2015-03-30, 20:56)
 */

$(document).ready(function(){var a=$(".navi-opener"),b=$(".navigation");a.on("click",function(){b.hasClass("open")?b.removeClass("open"):b.addClass("open")}),$(document).mouseup(function(a){var c=$(".sidebar");c.is(a.target)||0!==c.has(a.target).length||b.removeClass("open")})}),$(document).ready(function(){var a=$(".content-nav li");a.on("click",function(){a.removeClass("active"),$(this).addClass("active")})});
//# sourceMappingURL=app.pkgd.js.map