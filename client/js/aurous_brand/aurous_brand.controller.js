app.controller('AurousBrandController', function($scope, $http, $window, $location){

	$scope.msg = "this is msg from AurousBrandController";

	  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true
  });

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};
});