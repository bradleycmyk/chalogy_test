app.controller('SaturdayController', function($scope, $http, $window, $location) {

	$scope.isActiveSat = function (route) {
  	return ($window.location.href.split("5959/")[1].indexOf(route) > -1);
	};

	$scope.isActive = function (route) {
		return route == $window.location.href.split("5959/")[1];
	}
});
