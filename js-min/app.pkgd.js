/*
 * Curcooma by Henry Zeitler (https://github.com/Freizeitler))
 */

$(document).ready(function(){var a=$(".navi-opener"),b=$(".navigation");a.on("click",function(){b.hasClass("open")?b.removeClass("open"):b.addClass("open")}),$(document).mouseup(function(a){var c=$(".sidebar");c.is(a.target)||0!==c.has(a.target).length||b.removeClass("open")})});
//# sourceMappingURL=app.pkgd.js.map