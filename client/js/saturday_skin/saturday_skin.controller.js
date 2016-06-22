app.controller('SaturdayController', function($scope, $http, $window, $location) {

  if(sessionStorage.loggedinUser == undefined) {
    // console.log("hello no one is logged");
    if($window.location.href.split("5959/")[1] == "login") {
      $('.login-pop').css({"display":"none"});
    } else {
      $('.login-pop').css({"display":"block"});
    }
  } else {
    $('.login-pop').css({"display":"none"});
  }

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
