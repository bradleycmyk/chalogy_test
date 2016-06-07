app.controller('ChaHealthController', function($scope, $http, $window, $location) {

  var currentUrl = $window.location.href;
	$scope.url = currentUrl;

  $scope.isActive = function (route) {
    return route == $window.location.href.split("5959/")[1];
  };

});
