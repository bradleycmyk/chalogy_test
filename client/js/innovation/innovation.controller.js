app.controller('InnovationController', function($scope, $http, $window, $location) {

  	var currentUrl = $window.location.href;
	$scope.url = currentUrl;

  // for carousel autoplay
  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true
  });


    $scope.isActive = function (route) {
	   return route == $window.location.href.split("5959/")[1];
	};

	// $scope.url = currentUrl.split("5959/")[1];
	// $scope.url = "www.techcrunch.com";

});
