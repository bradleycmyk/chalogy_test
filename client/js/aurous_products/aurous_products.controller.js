app.controller('AurousProductsController', function($scope, $http, AurousFactory, $location, $window){

	AurousFactory.getSkinCareDb().then(function(data){
		console.log("returend data from aurous db: ", data);
		$scope.products = data;
	})

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};

	$(document).ready(function() {
		$(window).scrollTop(0);
	});
});
