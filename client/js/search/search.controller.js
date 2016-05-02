'use strict';
app.controller('searchController', function($scope, searchFactory, $state, $stateParams) {
	// var name = $stateParams.name;
	console.log("$stae.params: ", $state.params);
	console.log("$stateParams: ", $stateParams);

	var text = $stateParams.text;
	console.log("this is text from search from sat-brand: ", text);

	if (text == ""){
		console.log("do nothing");
	} else {
		searchFactory.searchDb(text).then(function (data) {
        console.log("search DB jquerying data: ", data);
        $scope.products = data
    	});
	}
	
	// search 
	$("#callsearch").click(function(){
		console.log("button clicked!");
	
		// $("#testsearch").animate({left:200, opacity:"show"}, 1500);
		$("#testsearch").fadeIn(2000).css("display","inline-block");
		$("#callsearch").css("margin-left", 10);

		var text = $("#testsearch").val();
		if (text == ""){
			console.log("do nothing");
		} else {
			searchFactory.searchDb(text).then(function (data) {
            console.log("search DB jquerying data: ", data);
            $scope.products = data
        	});
		}
		$("#testsearch").val("");
	});

	$(document).keypress(function(event) {
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13') {
	    	// alert("key prssed 11 2131 !");
	    	var text = $("#testsearch").val();
			console.log("text in js: ", text);

	    	if (text == ""){
			console.log("do nothing");
			} else {
				searchFactory.searchDb(text).then(function (data) {
	            console.log("search DB jquerying data: ", data);
	            $scope.products = data
	        	});
			}
			$("#testsearch").val("");
	    };  
	});

});



