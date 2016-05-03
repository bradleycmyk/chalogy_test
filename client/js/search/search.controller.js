'use strict';
app.controller('searchController', function($scope, searchFactory, aurousSearchFactory, $state, $stateParams) {
	var text = $stateParams.text;

	if (text == ""){
		console.log("do nothing");
	} else {
		searchFactory.searchDb(text).then(function (data) {
	        $scope.products = data
    	});

		aurousSearchFactory.searchAurousDb(text).then(function(data){
			$scope.aurousProducts = data;
		})
	}

});



