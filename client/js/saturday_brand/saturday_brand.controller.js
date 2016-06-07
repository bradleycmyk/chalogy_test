app.controller('SaturdayBrandController', function($scope, $http, $state, $stateParams, $window, $location) {
	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};

  	
});

