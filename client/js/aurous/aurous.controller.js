app.controller('AurousController', function($scope, $http, $window, $location, AdminFactory){

	// for carousel autoplay
	$('#myCarousel, #myCarousel2 ').carousel({
		interval: 5000,
		cycle: true
	});

	$scope.isActive = function (route) {
   	return route == $window.location.href.split("5959/")[1];
  };

  // testing code for instagram api ! 
	// $scope.pics = [];
 //  $scope.have = [];
	
	// $scope.getPhoto =function () {
	// 	AdminFactory.fetchPhotos(function(data){
	// 		console.log("Data: ", data);
	// 	})
	// }

 //  $scope.getPhoto();

});


