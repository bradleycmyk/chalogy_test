'use strict'

app.controller('SaturdayBrandController', function($scope, $http, $window, $location) {
	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};
	
	$('#play1').click(function(){
		document.getElementById("vid1").load();
		document.getElementById("vid1").play();

	});
  	
	// function isSecondPage () {
	// 	if $window.location.href.split("brand#")[1] == "secondPage" {
	// 		document.getElementById("vid1").load();
	// 		document.getElementById("vid1").play();
	// 	}
	// }();

	// $scope.isSecondPage = function () {
	// 	if $window.location.href.split("brand#")[1] == "secondPage" {
	// 		document.getElementById("vid1").load();
	// 		document.getElementById("vid1").play();
	// 	}
	// };
	// var isSecondPage = function () {
	// 	if ($window.location.href.split("brand#")[1] == "secondPage") {
	// 		document.getElementById("vid1").load();
	// 		document.getElementById("vid1").play();
	// 	}
	// };


	// $(document).ready(function(){
	// 	if($(window).scrollTop() > 300 && $(window).scrollTop() < 975){
	// 		console.log("hi im in 300 - 975");

	// 	} 
	// })

	

	// isSecondPage();
});

