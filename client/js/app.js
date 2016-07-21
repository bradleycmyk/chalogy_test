var app = angular.module('Chalogy', ['ui.router']);
// var app = angular.module('Chalogy', ['ui.router', 'authHandler']);

app.controller('MainController', function($scope, $rootScope, $window, $state, $timeout){
	$scope.loggedIn = sessionStorage.loggedinUser || undefined;

	$scope.isActiveFor = function (route) {
	    return ($window.location.href.split("5959/")[1].indexOf(route) > -1);
	};

	$scope.isAbout = function () {
		if($window.location.href.split("5959/")[1].indexOf("about") > -1 || window.location.href.split("5959/")[1].indexOf("chaum") > -1 || window.location.href.split("5959/")[1].indexOf("cha-health-systems") > -1  ) {
			return true;
		} else {
			// console.log("something is wrong");
		}
	}

	$(document).ready(function(){
	    $.mobile.loading().hide();
	});

})

app.config(function ($urlRouterProvider, $locationProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/');
});
