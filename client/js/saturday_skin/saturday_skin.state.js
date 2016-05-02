app.config(function($stateProvider){
	$stateProvider.state('saturday_skin', {
		url: '/saturday-skin',
		templateUrl: '/js/saturday_skin/saturday_skin.html',
		controller: 'SaturdayController'
	});
});

