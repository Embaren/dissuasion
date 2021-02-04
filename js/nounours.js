function getCodes(obj) {
	pwdObj = document.getElementById('pwd');
	hashObj = jsSHA("SHA-512", "TEXT", {numRounds: 1});
	hashObj.update(pwdObj.value);
	hash = hashObj.getHash("HEX");
	try {
		$("head").append('<script src="./js/'+hash+'.js"></script>');
	}
	catch(e) {
	}
}
