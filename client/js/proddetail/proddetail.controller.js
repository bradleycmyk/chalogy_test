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


	// carousel ! 
	// Instantiate the Bootstrap carousel
	$('.multi-item-carousel').carousel({
	  interval: false
	});

	// for every slide in carousel, copy the next slide's item in the slide.
	// Do the same for the next, next item.
	// $('.multi-item-carousel .item').each(function(){
	//   var next = $(this).next();
	//   if (!next.length) {
	//     next = $(this).siblings(':first');
	//   }
	//   next.children(':first-child').clone().appendTo($(this));
	  
	//   if (next.next().length>0) {
	//     next.next().children(':first-child').clone().appendTo($(this));
	//   } else {
	//   	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	//   }
	// });

	
});


