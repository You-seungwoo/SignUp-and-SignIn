import Enmap from "./enmap.js"; // 여기에서 import 를 찾을 수 없다는 버그가 발생합니다

const Button1 = document.getElementById('signupbutton')// sign up 버튼

Button1.addEventListener('click', function() {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const passwordch = document.getElementById('passwordch').value;
	
	if (password != passwordch) {
		alert("비밀번호 확인이 올바르지 않습니다!")
		return
	}
	
	if (name.length < 3) {
		alert("이름 글자 수는 3글자 이상입니다!")
		return
	}
	
});
