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

	$timeout(function() {console.log("set time out function called ")}, 2000);

	// $scope.isSecondPage = function () {
	// 	if ($window.location.href.split("brand#")[1] == "secondPage") {
	// 		document.getElementById("vid1").load();
	// 		document.getElementById("vid1").play();
	// 	}
	// };

	// window.onload = function() {
 //    	if(!window.location.hash) {
 //        	window.location = window.location + '#loaded';
 //        	window.location.reload();
 //    	}
	// }
	
	// $(document).ready(function(){    
	//     //Check if the current URL contains '#'
	//     if(document.URL.indexOf("#")==-1){
	//         // Set the URL to whatever it was plus "#".
	//         url = document.URL+"#";
	//         location = "#";

	//         //Reload the page
	//         location.reload(true);
	//     }
	// });

	window.onload = function () {
	    if (! localStorage.justOnce) {
	        localStorage.setItem("justOnce", "true");
	        window.location.reload();
	    }
	}
	
})

app.config(function ($urlRouterProvider, $locationProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/');
});
