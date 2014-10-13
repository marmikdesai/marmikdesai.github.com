/*!
 * Form Validation
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */
$(function(){
	$('input').iCheck({
		checkboxClass: 'icheckbox_minimal',
		radioClass: 'iradio_minimal',
		increaseArea: '20%'
	});
	validation();
});
	var radioDiv = ".form-gp";
function validation(){
	$("input[type='submit']").on("click", function(event){
		
		var typeText = $(this).parents("form").find("input[type='text']");
		var typeTextarea = $(this).parents("form").find("textarea");
		var typeCheckbox = $(this).parents("form").find("input[type='checkbox']");
		var typeRadio =  $(this).parents("form").find("input[type='radio']");
		var typeEmail =  $(this).parents("form").find("input[type='email']");
		var typeNumber =  $(this).parents("form").find("#phone, #phone1");
				
		var i = 0;
		typeText.each(function(i) {
			var errorMsg = $(this).data("error");
			var inputValue = $(this).val();
			
			if (!(inputValue == '')) {
				$(this).parent().find(".error").empty();
				$(this).parent().removeClass("has-error");
			} else {
				$(this).parent().find(".error").empty();
				$(this).parent().append("<span class='error'>" + errorMsg + "</span>");
				$(this).parent().addClass("has-error");
				event.preventDefault();
			}
		});
		
		var j = 0;
		typeTextarea.each(function(j) {
			var errorMsg = $(this).data("error");
			var textareaValue = $(this).val();
			
			if (!(textareaValue == '')) {
				$(this).parent().find(".error").empty();
				$(this).parent().removeClass("has-error");
			} else {
				$(this).parent().find(".error").empty();
				$(this).parent().append("<span class='error'>" + errorMsg + "</span>");
				$(this).parent().addClass("has-error");
				event.preventDefault();
			}
		});
		
		var k = 0;
		typeCheckbox.each(function(j) {
			var errorMsg = $(this).data("error");
			
			if ($(this).is(':checked')) {
				$(this).parent().parent().find(".error").empty();
				$(this).parent().parent().removeClass("has-error");
			} else {
				$(this).parent().parent().find(".error").empty();
				$(this).parent().parent().append("<span class='error'>" + errorMsg + "</span>");
				$(this).parent().parent().addClass("has-error");
				event.preventDefault();
			}
		});
		
		var l = 0;
		typeRadio.each(function(l) {
			var errorMsg = $(this).parents(radioDiv).data("error");
			
			if ($("input[type='radio']").is(':checked')) {
				$(this).parents(radioDiv).find(".error").empty();
				$(this).parents(radioDiv).removeClass("has-error");
			} else {
				$(this).parents(radioDiv).find(".error").empty();
				$(this).parents(radioDiv).append("<span class='error'>" + errorMsg + "</span>");
				$(this).parents(radioDiv).addClass("has-error");
				event.preventDefault();
			}
		});
		
		var m = 0;
		typeEmail.each(function(m) {
			var emailValue = $(this).val();
			var errorMsg = $(this).data("error");
			var wrongMsg = $(this).data("wrong");
		
			if ((emailValue == '')) {
				$(this).parent().find(".error").empty();
				$(this).parent().append("<span class='error'>" + errorMsg + "</span>");
				$(this).parent().addClass("has-error");
				event.preventDefault();
			} else if (!(emailValue == '')) {
				var n = 0
				$(this).each(function(n) {
					var regex1 = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					if (!regex1.test(emailValue)) {
						$(this).parent().find(".error").empty();
						$(this).parent().append("<span class='error'>" + wrongMsg + "</span>");
						$(this).parent().addClass("has-error");
						event.preventDefault();
						return false;
					} else {
						$(this).parent().find(".error").empty();
						$(this).parent().removeClass("has-error");
					}
				});
			}
		});

		for (var p1 = 0; p1 < typeNumber.length; p1++) {
			var p = 0;
			typeNumber.each(function(p) {
				var NumberValue = $(this).val();
				var errorMsg = $(this).data("error");
				var wrongMsg = $(this).data("wrong");
				if ((NumberValue == '')) {
					$(this).parent().find(".error").empty();
					$(this).parent().append("<span class='error'>" + errorMsg + "</span>");
					$(this).parent().addClass("has-error");
					event.preventDefault();
				} else if (!(NumberValue == '')) {
					var q = 0;
					$(this).each(function(q) {
						var regex2 = /^[0-9-+]+$/;
						if (!regex2.test(NumberValue)) {
							$(this).parent().find(".error").empty();
							$(this).parent().append("<span class='error'>" + wrongMsg + "</span>");
							$(this).parent().addClass("has-error");
							event.preventDefault();
							return false;
						} else {
							$(this).parent().find(".error").empty();
							$(this).parent().removeClass("has-error");
							return true;
						}
					});
				}
			});
		}
	});
}