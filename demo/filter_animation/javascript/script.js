/*!
 * jQuery Filter with Animation effect
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */
function mam(){
	var sli2 = $(".sli1").outerWidth();
	$('.sli1').css({'height': sli2 + 'px'});
	$('.sli1 a').css({'height': sli2 + 'px'});
}

var anim = "flash";

function slid(){
	$('.mai1 li').each(function(i) {
		$(this).addClass('ma_' + [i]);
	});	
	$('.mai1 li').click(function(){
		var clic = $(this).attr("data-category");
		var clicked_element = clic.split(" ");
			clicked_element_string = clicked_element.toString();
			$(".sli1").css({"display":"none"});
			var length = $(".sli1").length;
			var i=0;
			var fu = new Array;
			if(i<length){
				$(".sli1").each(function(){
					fu = $(this).attr("data-category");
					var output = fu.split(" ");
					var j=0;
					if(j<output.length){
						var found = $.inArray(clicked_element_string, output) == -1
						if(!(found)){
							$(this).css({"display": "block"});
						}
							animation();
					}j++;
				});
			}i++;
		});		
	};
	function animation(){
		if($(".sli1").filter(":visible")) {
			$(".sli1").addClass("animated");
			$(".sli1").addClass(anim);
		}
	}
$(document).ready(function(){
	mam();
	slid();
});