app.controller('AurousProductsController', function($scope, $http, AurousFactory, $location, $window){

	$scope.msg = "this is msg from Aurous Products Controller";

	AurousFactory.getSkinCareDb().then(function(data){
		console.log("returend data from aurous db: ", data);
		$scope.products = data;
	})

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};
});

