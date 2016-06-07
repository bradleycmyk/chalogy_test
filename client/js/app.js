var app = angular.module('Chalogy', ['ui.router', 'authHandler']);

// can define controller for navigation bar here + deal with cookies 

app.controller('MainController', function($scope, $rootScope){
	$scope.loggedIn = sessionStorage.loggedinUser || undefined;

	if(!$scope.loggedIn) {
		// no change ? 
	} else {
		// do something - user is logged in
	}

	$rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error){

	    if(error === "Not Authorized"){
	        $state.go("login");
	    }
	});

	$('li.dropdown a').click(function(e){
		e.preventDefault();
		$('li.dropdown a').removeClass('selected');
		$(this).addClass('selected');
	});
	
})

app.config(function ($urlRouterProvider, $locationProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/');
});