var timer;
var timerFinish;
var timerSeconds;
function progress(c, a) {
    $("#note_" + c).html('<div class="number"></div><div id="slice"' + (a > 5 ? ' class="mamu"' : "") + '><div class="part"></div>' + (a > 5 ? '<div class="part fill"></div>' : "") + "</div>");
    var b = 360 / 10 * a;
    $("#note_" + c + " #slice .part").css({
        "-moz-transform": "rotate(" + b + "deg)",
        "-webkit-transform": "rotate(" + b + "deg)",
        "-o-transform": "rotate(" + b + "deg)",
        transform: "rotate(" + b + "deg)"
    });
    a = Math.floor(a * 100) / 10;
    arr = a.toString().split(".");
    intPart = arr[0];
    $("#note_" + c + " .number").html('<span class="point">' + intPart + '</span>')
}
function stop(d, b) {
    var c = (timerFinish - (new Date().getTime())) / 1000;
    var a = 10 - ((c / timerSeconds) * 10);
    a = Math.floor(a * 100) / 100;
    if (a <= b) {
        progress(d, a)
    } else {
        b = $("#note_" + d).data("note");
        arr = b.toString().split(".");
        $("#note_" + d + " .number .point").html(arr[0]);
    }
}
function circ() {
    timerSeconds = 3;
    timerFinish = new Date().getTime() + (timerSeconds * 1000);
    $(".mar").each(function(a) {
        note = $("#note_" + a).data("note");
		var mam = note / 10;
        timer = setInterval("stop(" + a + ", " + mam + ")", 0)
    })
};
var parallaxIt = function() {
	$hero = $(".hebc"), $window = $(window);
	if ($hero.length) {
	var heroHeight = $hero.outerHeight(true),
		$heroHeading = $hero.find(".hedc1"),
		parallaxFactor = 0.5;
		$window.on("scroll", function(e) {
			var scrollTop = $window.scrollTop(),
			parallaxOffset = Math.round(scrollTop * parallaxFactor),
			parallaxBgPosition = "50% calc(50% + " + parallaxOffset + "px)";
			parallaxBgPosition2 = "50% -webkit-calc(50% + " + parallaxOffset + "px)";
			if (scrollTop > 0) {
				$heroHeading.css("opacity", 1 - (scrollTop / heroHeight * 1.4));
				$hero.css("background-position", parallaxBgPosition);
				$hero.css("background-position", parallaxBgPosition2)
			} else {
				$heroHeading.css("opacity", 1);
				$hero.css("background-position", "50% 50%")
			}
			if (scrollTop > heroHeight - 140) {
				$(".mhe2").addClass("hid")
			} else {
				$(".mhe2").removeClass("hid")
			}
		})
	} else {
		$(".mhe2").addClass("hid");
		$(".web").addClass("nomast")
	}
};
function resizeMast() {
	$hero = $(".hebc");
	if ($hero.length) {
		$hero.css("height", $(window).height());
		$(".fim1").css("height", ($(window).height()));
	}
}
$(window).load(function() {
	resizeMast();
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android|mobile)/);
	if (agentID) {} else {
		parallaxIt()
	}
});
window.onresize = function(event) {
	resizeMast();
	hed();
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android|mobile)/);
	if (agentID) {} else {
		parallaxIt()
	}
};
jQuery(document).ready(function($) {
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android|mobile)/);
	if (agentID) {
		$(document).ready(hammerIt);
		$(".mhe2").addClass("hid");
		$(".web").addClass("nomast")
	} else {}
}); 
if (("standalone" in window.navigator) && window.navigator.standalone) {
	var a = document.getElementsByTagName("a");
	for (var i = 0; i < a.length; i++) {
		if (!a[i].onclick && a[i].getAttribute("target") != "_blank") {
			a[i].onclick = function() {
				window.location = this.getAttribute("href");
				return false
			}
		}
	}
};
var stopScroll = 0;
var areaVisible = false;
$(window).scroll(function () {
	if (stopScroll == 0) {
		stopScroll = 1;
        var cPosition = $('.anim1').offset();
        var animationStartPoint = cPosition.top - 100;
        var dPosition = $('.anim2').offset();
        var windowPosition = window.pageYOffset;
        if (windowPosition > animationStartPoint && windowPosition < dPosition.top) {
			if (!areaVisible)
				animation(); 
			areaVisible = true;
		} else {
			areaVisible = false;
		}
	}
	setTimeout(function () {
		stopScroll = 0
	}, 10);
});
function animation() {
	$(function () {
		circ();
	});
};
$(document).ready(function(){
	clas();
	main();
	hed();
	var $root = $('html, body');
	$('.mhe8 ul li a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});
	animation();
});
function main(){
	mamu = ($(window).height());
	$(".cool").css({"height": mamu + "px"});
	$(".cool").css({"position": "fixed"}); 
	var hei = $(".main").height();
	var mam = (mamu - hei) / 3;
//	$(".main").css({"top": mam + "px"});
	$(".main").css({"height": mamu + "px"});
}
function clas(){
	$("#fade").addClass("cool");
	$("#light").addClass("main");
}
function popUp(){
		$(".cool").css({"visibility": "visible"});
		$(".cool").animate({
			left:0,
			top:fade,
			opacity: 1
		},1000, function(){
		});
	$("body").addClass("overflow");
	$(".overflow").css({"overflow": "hidden"});
	$(".main").css({"display": "block"});
}
function popUpClose(){
		mamu = ($(window).width());
		$(".cool").animate({
			left:-mamu,
			top:fade,
			opacity: 0
		},1000, function(){
			$(".cool").css({"visibility": "hidden"});
		});
	$("body").removeClass("overflow");
	$("body").css({"overflow": "auto"});
	$(".main").css({"display": "none"});
}
function hed(){
	mamu = ($(window).height());
	$(".hedc1 h1").css({"margin-top": (mamu / 2) + "px"});
	$(".skl1 h2").css({"padding-top": (mamu / 7) + "px"});
	$(".skl1 h2").css({"padding-bottom": (mamu / 10) + "px"});

	wowi = ($(".wok1").width());
	$(".wok1").css({"height": wowi + "px"});
	$(".wok1 a").css({"height": wowi + "px"});
	$(".tecn").css({"height": wowi + "px"});
	
	soci = ($(".fto9").width()) / 2;
	
	soci = ($(".fto5").width());
	$(".fto5 a i").css({"height": soci + "px"});	
}