app.config(function($stateProvider){
	$stateProvider.state('aurous_products', {
		url: '/aurous/products',
		templateUrl: '/js/aurous_products/aurous_products.html',
		controller: 'AurousProductsController'
	});
});



