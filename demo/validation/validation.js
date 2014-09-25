/*!
 * Expanable Search
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
	$("input[type='submit']").on("click", function(){
		
		var typeText = $(this).parents("form").find("input[type='text']");
		var typeTextarea = $(this).parents("form").find("textarea");
		var typeCheckbox = $(this).parents("form").find("input[type='checkbox']");
		var typeRadio =  $(this).parents("form").find("input[type='radio']");
		var typeEmail =  $(this).parents("form").find("input[type='email']");
		
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
			var errorMsg = $(this).data("error");
			var wrongMsg = $(this).data("wrong");
			var emailValue = $(this).val();
		
			function checkEmail(emailValue) {
				alert(36);
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (!regex.test(emailValue)) {
					$(this).parent().find(".error").empty();
					$(this).parent().append("<span class='error'>" + wrongMsg + "</span>");
					$(this).parent().addClass("has-error");
					event.preventDefault();
					return false;
				} else {
					return true;
				}
			}
			if ((emailValue == '')) {
				alert(34);
				$(this).parent().find(".error").empty();
				$(this).parent().append("<span class='error'>" + errorMsg + "</span>");
				$(this).parent().addClass("has-error");
				event.preventDefault();
			} else if (!(emailValue == '')) {
				if ((checkEmail(emailValue))) {
					$(this).parent().find(".error").empty();
					$(this).parent().removeClass("has-error");
				}
			}
		});
		
	});
}