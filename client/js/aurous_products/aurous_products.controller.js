app.controller('AurousProductsController', function($scope, $http, ProductFactory, $location, $window){

	ProductFactory.getAurousProducts().then(function(data){
		$scope.products = data;
	})

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};

});
