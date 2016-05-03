app.controller('NavBarController', function($scope, $http, $state, $stateParams) {
	$scope.msg = "msg from Saturday Brand Controller";

	$("#callingsearch").click(function(){
		$("#testingsearch").fadeIn(2000).css("display","inline-block").focus();
		$("#callingsearch").css("margin-left", 10);

		var text = $("#testingsearch").val();
		if (text == ""){
			console.log("do nothing");
		} else {
        	$state.go("search", {text: text});
		}
		$("#testingsearch").val("");

	});

	$(document).keypress(function(event) {
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13') {
	    	var text = $("#testingsearch").val();
	    	if (text == ""){
			console.log("do nothing");
			} else {
	        	$state.go("search", {text: text});
			}
			$("#testingsearch").val("");
	    };
	});

});
