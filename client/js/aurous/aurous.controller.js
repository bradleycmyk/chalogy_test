app.controller('AurousController', function($scope, $http, $window, $location){

	// for carousel autoplay
	$('#myCarousel').carousel({
		interval: 5000,
		cycle: true
	});

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};
});
