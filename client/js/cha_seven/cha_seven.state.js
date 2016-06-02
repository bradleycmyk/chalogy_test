app.config(function($stateProvider) {
    $stateProvider.state('cha_seven', {
        url: '/cha-7',
        templateUrl: '/js/cha_seven/cha_seven.html',
        controller: 'ChaSevenController'
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
