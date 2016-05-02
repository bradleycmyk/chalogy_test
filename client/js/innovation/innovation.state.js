app.config(function($stateProvider) {
    $stateProvider.state('innovation', {
        url: '/innovation',
        templateUrl: '/js/innovation/innovation.html',
        controller: 'InnovationController'
    });
});
