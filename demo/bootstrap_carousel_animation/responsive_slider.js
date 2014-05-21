/*!
 * Bootstrap Carousel with Animation
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */

(function($) {
    $.fn.animat = function() {
        img();
		var ts = this;
        var att;
        this.find(".carousel-caption").children().each(function() {
            $(this).css("opacity", 0);
        });
        $(".carousel-caption", this.find(".active")).children().each(function() {
            $(this).css("opacity", 1);
            if ($(this).data("animate")) {
                att = $(this).data("animate");
            }
            $(this).removeClass(att).addClass("animated" + " " + att);
        });
        this.on("slid.bs.carousel", function() {
            $(".carousel-caption").children().each(function() {
                if ($(this).data("animate")) {
                    ass = $(this).data("animate");
                }
                $(this).removeClass(ass).addClass("removed").css("opacity", 0);
            });
            $(".carousel-caption", ts.find(".active")).children().each(function() {
                if ($(this).data("animate")) {
                    att = $(this).data("animate");
                }
                $(this).css("opacity", 1).addClass("animated");
                $(this).css("opacity", 1).removeClass("removed").addClass(att);
            });
        });
        return this;
    };

    function img() {
        $(".item img").css({
            "visibility": "hidden",
            "display": "none"
        });
        var length = $(".item").length;
        var i = 0;
        $(".item img").each(function(i) {
            var imag = $(this).attr('src');
            $("#image_" + (i + 1)).css({
                "background-image": "url(" + imag + ")",
                "height": 500,
                "background-attachment": "fixed",
                "background-size": "cover"
            });
        });
        i++;
    }
    sb()

    function sb() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            $(".carousel-inner .item").css({
                "-webkit-transition": "none"
            })
            $(".carousel-inner .item").css({
                "transition": "none"
            });
        }
    }
})(jQuery);
