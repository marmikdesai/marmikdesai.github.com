/*!
 * Form Validation
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */
$(function(){
	validation();
});
var radioDiv = ".form-gp";
function inputText(typeText){
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
}
function liveInputText(a){
	var errorMsg = a.data("error");
	var inputValue = a.val();
	if (!(inputValue == '')) {
		a.parent().find(".error").empty();
		a.parent().removeClass("has-error");
	} else {
		a.parent().find(".error").empty();
		a.parent().append("<span class='error'>" + errorMsg + "</span>");
		a.parent().addClass("has-error");
		event.preventDefault();
	}
}
function textarea(typeTextarea){
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
}
function liveTextarea(a){
	var errorMsg = a.data("error");
	var textareaValue = a.val();
	if (!(textareaValue == '')) {
		a.parent().find(".error").empty();
		a.parent().removeClass("has-error");
	} else {
		a.parent().find(".error").empty();
		a.parent().append("<span class='error'>" + errorMsg + "</span>");
		a.parent().addClass("has-error");
		event.preventDefault();
	}
}
function inputCheckbox(typeCheckbox, typeCheckboxChecked){
	var k = 0;
	if(typeCheckboxChecked.length != 1){
		var checkboxHolder = typeCheckbox.parent().parent();
		var errorMsg = checkboxHolder.data("error");
		checkboxHolder.find(".error").remove();
		checkboxHolder.append("<span class='error'>" + errorMsg + "</span>");
		checkboxHolder.addClass("has-error");
		event.preventDefault();
	} else{
		typeCheckbox.parent().parent().find(".error").remove();
		typeCheckbox.parent().parent().removeClass("has-error");
	}
}
function inputRadio(typeRadio, typeRadioChecked){
	var l = 0;
	if(typeRadioChecked.length != 1){
		var radioHolder = typeRadio.parent().parent();
		var errorMsg = radioHolder.data("error");
		radioHolder.find(".error").remove();
		radioHolder.append("<span class='error'>" + errorMsg + "</span>");
		radioHolder.addClass("has-error");
		event.preventDefault();
	} else{
		typeRadio.parent().parent().find(".error").remove();
		typeRadio.parent().parent().removeClass("has-error");
	}
}
function inputemail(typeEmail){
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
}
function liveInputEmail(a){
	var emailValue = a.val();
	var errorMsg = a.data("error");
	var wrongMsg = a.data("wrong");
	if ((emailValue == '')) {
		a.parent().find(".error").empty();
		a.parent().append("<span class='error'>" + errorMsg + "</span>");
		a.parent().addClass("has-error");
		event.preventDefault();
	} else if (!(emailValue == '')) {
		var regex1 = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!regex1.test(emailValue)) {
			a.parent().find(".error").empty();
			a.parent().append("<span class='error'>" + wrongMsg + "</span>");
			a.parent().addClass("has-error");
			event.preventDefault();
			return false;
		} else {
			a.parent().find(".error").empty();
			a.parent().removeClass("has-error");
		}
	}
}
function inputFone(typeNumber){
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
}
function liveInputFone(a){
	var NumberValue = a.val();
	var errorMsg = a.data("error");
	var wrongMsg = a.data("wrong");
	if ((NumberValue == '')) {
		a.parent().find(".error").empty();
		a.parent().append("<span class='error'>" + errorMsg + "</span>");
		a.parent().addClass("has-error");
		event.preventDefault();
	} else if (!(NumberValue == '')) {
		var regex2 = /^[0-9-+]+$/;
		if (!regex2.test(NumberValue)) {
			a.parent().find(".error").empty();
			a.parent().append("<span class='error'>" + wrongMsg + "</span>");
			a.parent().addClass("has-error");
			event.preventDefault();
			return false;
		} else {
			a.parent().find(".error").empty();
			a.parent().removeClass("has-error");
			return true;
		}
	}
}
function validation(){
	$("input[type='submit']").on("click", function(event){
		valid($(this))
	});
	$("input[type='text']").on("keyup", function(event){
		liveInputText($(this));
	});
	$("input[type='email']").on("keyup", function(event){
		liveInputEmail($(this));
	});
	$("input[type='password']").on("keyup", function(event){
		liveInputPassword($(this));
	});
	$("input.phoneValid").on("keyup", function(event){
		liveInputFone($(this));
	});
	$("textarea").on("keyup", function(event){
		liveTextarea($(this));
	});
}
function valid(a){
	var typeText = a.parents("form").find("input[type='text']");
	var typePassword = a.parents("form").find("input[type='password']");
	var typeTextarea = a.parents("form").find("textarea");
	var typeCheckbox = a.parents("form").find("input[type='checkbox']");
	var typeCheckboxChecked = a.parents("form").find("input[type='checkbox']:checked");
	var typeRadio =  a.parents("form").find("input[type='radio']");
	var typeRadioChecked = a.parents("form").find("input[type='radio']:checked");
	var typeEmail =  a.parents("form").find("input[type='email']");
	var typeNumber =  a.parents("form").find(".phoneValid");
	inputText(typeText);
	inputPassword(typePassword);
	textarea(typeTextarea);
	inputCheckbox(typeCheckbox, typeCheckboxChecked);
	inputRadio(typeRadio, typeRadioChecked);
	inputemail(typeEmail);
	inputFone(typeNumber);
};
function inputPassword(typePassword){
	var i = 0;
	typePassword.each(function(i) {
		var errorMsg = $(this).data("error");
		var inputValue = $(this).val();
		if (!(inputValue == '')) {
			$(this).parent().find(".error").empty();
			$(this).parent().removeClass("has-error");
			if (($("#password").val()) == ($("#cPassword").val())){
				alert($("#password").val());
				alert($("#cPassword").val());
				$(this).parent().find(".error").empty();
				$(this).parent().removeClass("has-error");
			} else{
				$(this).parent().find(".error").empty();
				$(this).parent().append("<span class='error'>Password &amp; Conform Password doesn't Match</span>");
				$(this).parent().addClass("has-error");
				event.preventDefault();
			}
		} else {
			$(this).parent().find(".error").empty();
			$(this).parent().append("<span class='error'>" + errorMsg + "</span>");
			$(this).parent().addClass("has-error");
			event.preventDefault();
		}
	});
}
function liveInputPassword(a){
	var i = 0;
	var errorMsg = a.data("error");
	var inputValue = a.val();
	if (!(inputValue == '')) {
		a.parent().find(".error").empty();
		a.parent().removeClass("has-error");
		if (($("#password").val()) == ($("#cPassword").val())){
			$("#password, #cPassword").parent().find(".error").empty();
			$("#password, #cPassword").parent().removeClass("has-error");
		} else{
			$("#password, #cPassword").parent().find(".error").empty();
			$("#password, #cPassword").parent().append("<span class='error'>Password &amp; Conform Password doesn't Match</span>");
			$("#password, #cPassword").parent().addClass("has-error");
			event.preventDefault();
		}
	} else {
		a.parent().find(".error").empty();
		a.parent().append("<span class='error'>" + errorMsg + "</span>");
		a.parent().addClass("has-error");
		event.preventDefault();
	}
}