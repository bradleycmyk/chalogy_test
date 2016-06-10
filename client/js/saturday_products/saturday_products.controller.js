app.controller('SaturdayProductController', function($scope, $http, SaturdayFactory, $window, $location) {
	$scope.msg = "msg from Saturday Product Controller";

	SaturdayFactory.getSkinCareDb().then(function(data){
		$scope.products = data;
	})

	// $scope.isActiveSat = function (route) {
 //    return ($window.location.href.split("5959/")[1].indexOf(route) > -1);
 //  };

  $scope.isActive = function (route) {
      return route == $window.location.href.split("5959/")[1];
    }

  	$(document).ready(function(){
  		if($(window).width() < 1205) {
  			$('#max-width').removeClass('wrapper');
  		} else {
  			// $('#max-width').addClass('wrapper');
  		}
  	})
});
