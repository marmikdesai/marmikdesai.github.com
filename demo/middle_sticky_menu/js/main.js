/*!
 * Middle Sticky Menu
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */
$(function(){
	sticky_menu();
});
$(window).scroll(function() {
	sticky_menu()
});
function sticky_menu(){
	var $navigation = $("nav");	
	if ($(window).scrollTop() >= $navigation.height()) {
		$navigation.addClass("sticky");
	} else if ($navigation.hasClass('sticky')) {
		$navigation.removeClass("sticky");
	}
}