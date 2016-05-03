'use strict';
app.controller('searchController', function($scope, searchFactory, aurousSearchFactory, $state, $stateParams) {
	// var name = $stateParams.name;
	console.log("$stae.params: ", $state.params);
	console.log("$stateParams: ", $stateParams);

	var text = $stateParams.text;
	console.log("this is text from search from sat-brand: ", text);

	if (text == ""){
		console.log("do nothing");
	} else {
		searchFactory.searchDb(text).then(function (data) {
	        // console.log("search DB jquerying data: ", data);
	        $scope.products = data
    	});

		aurousSearchFactory.searchAurousDb(text).then(function(data){
			console.log("searchDB from aurous factory: ", data);
			$scope.aurousProducts = data;
		})
	}
	
});



