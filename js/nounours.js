function getCodes(obj) {
	pwdObj = document.getElementById('pwd');
	hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
	hashObj.update(pwdObj.value);
	hash = hashObj.getHash("HEX");
	try {
		$("body").append('<script src="./js/'+hash+'.js"></script>');
	}
	catch(e) {
	}
}
