import Enmap from "./enmap.js";

const Button1 = document.getElementById('signupbutton')

Button1.addEventListener('click', function() {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const passwordch = document.getElementById('passwordch').value;
	
	if (password != passwordch) {
		alert("비밀번호 확인이 올바르지 않습니다!")
		return
	}
});



app.on('ready', createWindow);