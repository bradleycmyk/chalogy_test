'use strict';

app.controller('AurousProdDetailCtrl', function($scope, $http, $state, $stateParams, ProductFactory) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;
	console.log("stateParams: ", $stateParams);

	ProductFactory.getOneItem($stateParams.name).then(function(data){
		$scope.product = data;
	});

	// for carousel autoplay
	$('#myCarousel').carousel({
	  interval: 3000,
	  cycle: true
	}); 

});


