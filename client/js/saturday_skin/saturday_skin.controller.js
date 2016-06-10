app.controller('SaturdayController', function($scope, $http, $window, $location) {

	$scope.isActiveSat = function (route) {
		// if (route == $window.location.href.split("5959/")[1] || route == $window.location.href.split("5959/")[1]/products) {
		// 	return true;
		// }
    	// return route == $window.location.href.split("5959/")[1];

    	return ($window.location.href.split("5959/")[1].indexOf(route) > -1);
  	};

  	$scope.isActive = function (route) {
  		return route == $window.location.href.split("5959/")[1];
  	}
});
