app.controller('AurousProductsController', function($scope, $http, ProductFactory, $location, $window){

	ProductFactory.getAurousProducts().then(function(data){
		console.log("returend data from aurous db: ", data);
		$scope.products = data;
	})

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};

});
