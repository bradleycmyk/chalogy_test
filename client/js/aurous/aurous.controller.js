app.controller('AurousController', function($scope, $http, $window, $location){

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
	
	// for carousel autoplay
	$('#myCarousel, #myCarousel2 ').carousel({
		interval: 5000,
		cycle: true
	});

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};
});
