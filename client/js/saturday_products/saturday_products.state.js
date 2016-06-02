app.config(function($stateProvider){
	$stateProvider.state('saturday_products', {
		url: '/saturday-skin/products',
		templateUrl: '/js/saturday_products/saturday_products.html',
		controller: 'SaturdayProductController',
		activeTab: 'saturdayproducts'
	});
});

