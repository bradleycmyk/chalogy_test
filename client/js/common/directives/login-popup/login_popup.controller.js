app.controller('LoginPopupController', function($scope, $http, $window, $location) {
	if(sessionStorage.loggedinUser == undefined) {
	    if($window.location.href.split("5959/")[1] == "login") {
	      $('.login-pop').css({"display":"none"});
	    } else {
	      $('.login-pop').css({"display":"block"});
	    }
	} else {
	    $('.login-pop').css({"display":"none"});
	}
})
