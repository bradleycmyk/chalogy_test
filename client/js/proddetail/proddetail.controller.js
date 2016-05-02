app.controller('ProdDetailCtrl', function($scope, $http, $state, $stateParams, prodDetailFactory, recommendationFactory) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;
	console.log("stateParams: ", $stateParams);

	prodDetailFactory.getOneItem($stateParams.name).then(function(data){
		$scope.product = data;
	});

	recommendationFactory.getRecommendation($stateParams.name).then(function(data){
		$scope.recommendations = data;
	});

	// for tab manipulation 
	$scope.tab;
	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	};

	/* jQuery and slick */
	// $(document).ready(function(){

	//     $('.random-box').slick({
 //        	slidesToShow: 4,
 //  			slidesToScroll: 1,
 //  			autoplay: true,
 //  			autoplaySpeed: 3000,
 //  			arrows: true
 //      	});

	// });

});


