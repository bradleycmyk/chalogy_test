'use strict'
app.controller('socialIconController', function($scope, $http, $window, $location){
	
	var currentUrl = $window.location.href;
	$scope.url = currentUrl;

})