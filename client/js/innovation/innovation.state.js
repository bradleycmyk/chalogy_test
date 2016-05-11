app.config(function($stateProvider) {
    $stateProvider.state('innovation', {
        url: '/innovation',
        templateUrl: '/js/innovation/innovation.html',
        controller: 'InnovationController'
    //     resolve: {
    //     	security: ['$q', function($q) {
    //     		if($scope.loggedIn) {
				// 	return $q.reject("Not Authorized");
				// } else {
				// 	// do something - user is logged in
				// 	console.log("yes ");
				// }
    //     	}]
    //     }
    });
});


