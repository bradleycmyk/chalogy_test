app.controller('SaturdayProductController', function($scope, $http, SaturdayFactory) {
	$scope.msg = "msg from Saturday Product Controller";

	SaturdayFactory.getSkinCareDb().then(function(data){
		$scope.products = data;
	})
});
