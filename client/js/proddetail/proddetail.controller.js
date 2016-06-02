app.controller('ProdDetailCtrl', function($scope, $http, $state, $stateParams, prodDetailFactory, recommendationFactory) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;

	prodDetailFactory.getOneItem($stateParams.name).then(function(data){
		$scope.product = data;
	});

	recommendationFactory.getRecommendation($stateParams.name).then(function(data){
		$scope.recommendations = data;
	});

	// for tab manipulation
	$scope.tab;
	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	};

});
