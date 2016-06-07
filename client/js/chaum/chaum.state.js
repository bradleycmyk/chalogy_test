app.config(function($stateProvider) {
    $stateProvider.state('chaum', {
        url: '/chaum',
        templateUrl: '/js/chaum/chaum.html',
        controller: 'ChaumController'
    });
});
