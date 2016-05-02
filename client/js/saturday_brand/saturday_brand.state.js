app.config(function($stateProvider){
	$stateProvider.state('saturday_brand', {
		url: '/saturday-skin/brand',
		templateUrl: '/js/saturday_brand/saturday_brand.html',
		controller: 'SaturdayBrandController'
	});
});

