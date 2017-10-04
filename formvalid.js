function formValidation(){

	var username=document.getElementById("username");
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	var repeatpassword=document.getElementById("repeatpassword");

	if(inputUserName(username,"*for your username please use alphabets only")){
		if(emailValidation(email,"*please enter a valid email address")){
			if(password(password,"*password pattern not correct"))
				{if(repeatpassword(repeatpassword,"*password not matching"))
			{return true;}}}	
		}return false
	}

	function inputUserName(inputtext, alertMsg){
		var alphaExp=/^[0-9a-zA-Z]+$/;
		if (inputtext.value.match(alphaExp)) {
			return true;
		} else {
document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}

function emailValidation(inputtext, alertMsg){
	var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
	if (inputtext.value.match(emailExp)) {
		return true;
	} else {
document.getElementById('p2').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}

function password(inputtext, alertMsg){
	var pwdExp = ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,});
	if (inputtext.value.match(pwdExp)) {
		return true;
	} else {
document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}
function repeatpassword(inputtext, alertMsg){
	var reppwdExp = ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,});
	if (inputtext.value.match(reppwdExp)) {
		return true;
	} else {
document.getElementById('p4').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}





}