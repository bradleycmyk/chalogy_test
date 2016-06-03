app.controller('SaturdayController', function($scope, $http, $window, $location) {

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};
});
