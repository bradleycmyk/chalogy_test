app.controller('AurousProductsController', function($scope, $http, ProductFactory, $location, $window){

	if(sessionStorage.loggedinUser == undefined) {
		// console.log("hello no one is logged");
		if($window.location.href.split("5959/")[1] == "login") {
			$('.login-pop').css({"display":"none"});
			console.log("do nothing");
		} else {
			$('.login-pop').css({"display":"block"});
		}
	} else {
		console.log("who's logged in??");
		$('.login-pop').css({"display":"none"});
	}

	ProductFactory.getSkinCareAurousDb().then(function(data){
		console.log("returend data from aurous db: ", data);
		$scope.products = data;
	})

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};

});
