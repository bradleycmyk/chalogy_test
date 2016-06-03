app.controller('SaturdayProductController', function($scope, $http, SaturdayFactory, $window, $location) {
	$scope.msg = "msg from Saturday Product Controller";

	SaturdayFactory.getSkinCareDb().then(function(data){
		$scope.products = data;
	})

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};
});
