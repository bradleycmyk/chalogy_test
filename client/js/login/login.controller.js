app.controller('loginController', function($scope, $http, $window, $location, loginFactory) {

    if(sessionStorage.loggedinUser)

    console.log("users: ", user);
	$scope.userLogin = function(users){
        loginFactory.getUser(users).then(function(loggedin){
        	console.log("loggedin : ", loggedin);
            sessionStorage.loggedinUser = loggedin.email;
            $window.location.href = '/';
        }).catch(function(e){
            console.log("your password and id do not match");
        });
    };
})
