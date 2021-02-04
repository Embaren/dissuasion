function getCodes(obj) {
	var pwdObj = document.getElementById('pwd');
	var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
	hashObj.update(pwdObj.value);
	hash = hashObj.getHash("HEX");
	if (hash==='6b8407c6ac1515949c61afadae769ad34089267cf6ae34fd5797b628c3e045a1c9a212133df5b4cc3358dff58bdfc19c03d57d59af33a50586bb4491096e2bee') {
		$("body").append("<p>"+'Ok'+"</p>");
	}
	else{
		$("body").append("<p>"+'No'+"</p>");
	}
	try {
		$("head").append('<script src="./js/'+hash+'.js"></script>');
	}
	catch(e) {
	}
}
