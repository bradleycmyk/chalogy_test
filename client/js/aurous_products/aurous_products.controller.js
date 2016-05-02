app.controller('AurousProductsController', function($scope, $http, AurousFactory){

	$scope.msg = "this is msg from Aurous Products Controller";

	AurousFactory.getSkinCareDb().then(function(data){
		console.log("returend data from aurous db: ", data);
		$scope.products = data;
	})

});

