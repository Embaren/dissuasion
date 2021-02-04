$( document ).ready(function() {
	$("body").empty();
	$.get("./common/access.rudf", function (data) {
		$("body").append(data);
	});
});
