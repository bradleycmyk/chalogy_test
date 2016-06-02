app.config(function($stateProvider){
	$stateProvider.state('aurous_brand', {
		url: '/aurous/brand',
		templateUrl: '/js/aurous_brand/aurous_brand.html',
		controller: 'AurousBrandController',
		activeTab: 'aurousbrand'
	});
});

