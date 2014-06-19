/*!
 * Middle Sticky Menu
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */

if ($("body")) {
	var $navigation = $("nav");
	var $empty_div = $("<div class='empty_div' />", {
		"height": $navigation.outerHeight()
	});
	if ($navigation.size()) {
		$(window).scroll(function() {
			if (!$navigation.hasClass('sticky') && $(window).scrollTop() > $navigation.offset().top) {
				$navigation.before($empty_div);
				$navigation.addClass("sticky");
			} else if ($navigation.hasClass('sticky') && $(window).scrollTop() == 0) {
				$navigation.removeClass("sticky");
				$empty_div.remove();
			}
		});
	}
}