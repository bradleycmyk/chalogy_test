app.config(function($stateProvider) {
    $stateProvider.state('cha-health-systems', {
        url: '/cha-health-systems',
        templateUrl: '/js/cha_health_system/cha_health_systems.html',
        controller: 'ChaHealthController'
    });
});
