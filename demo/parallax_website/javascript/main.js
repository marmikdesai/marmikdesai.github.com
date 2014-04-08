/*!
 * Parallax Website
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */;
 $(function(){
	height();
	c();
});
$(window).resize(function(){
	height();
});
function height(){
	var wind_height = $(window).height();
	$(".full_scr1").css({"height": wind_height + "px"});
}
function c(){
	if (!(touch())){
		$(".full_scr1 img").css({
			"visibility": "hidden",
			"display": "none"
		});
		var length = $(".full_scr1").length;
		var i = 0;
		$(".full_scr1 .des img").each(function(i) {
			var imag = $(this).attr('src');
			$("#product_" + (i+1)).css({"background-image": "url(" + imag + ")"});
		});i++;
	} else {
		$(".full_scr1 img").css({
			"visibility": "hidden",
			"display": "none"
		});
		var length = $(".full_scr1").length;
		var i = 0;
		$(".full_scr1 .des img").each(function(i) {
			var imag = $(this).attr('src');
			$("#product_" + (i+1)).css({"background-image": "url(" + imag + ")"});
		});i++;
	}
}
function touch() {
	var agent = navigator.userAgent;
	if ( agent.match(/(iPhone|iPod|iPad|Blackberry|Android)/) ) {
		return true;
	}
}