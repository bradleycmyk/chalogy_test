'use strict';

app.controller('AurousProdDetailCtrl', function($scope, $http, $state, $stateParams, AurousprodDetailFactory) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;
	console.log("stateParams: ", $stateParams);

	AurousprodDetailFactory.getOneItem($stateParams.name).then(function(data){
		$scope.product = data;
	});

	AurousprodDetailFactory.getRecommendation($stateParams.name).then(function(data){
		console.log("returned data from db in controller: ", data);
		$scope.recommendations = data;
	});

});


