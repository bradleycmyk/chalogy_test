app.controller('AurousController', function($scope, $http){

	$scope.msg = "this is msg from AurousController";

	// for carousel autoplay
	$('#myCarousel').carousel({
		interval: 3000,
		cycle: true
	});
});
