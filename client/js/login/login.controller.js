app.controller('loginController', function($scope, $http, $window, $location, AuthService, loginFactory) {
	
	$scope.userLogin = function(users){
        // loginFactory.checkUser(users).then(function(loggedin){
        // 	console.log("loggedin : ", loggedin);
        //     sessionStorage.loggedinUser = loggedin.email;
        //     $window.location.href = '/';
        // }).catch(function(e){
        //     console.log("your password and id do not match");
        // });

        loginFactory.getUser(users).then(function(loggedin){
        	console.log("loggedin : ", loggedin);
            sessionStorage.loggedinUser = loggedin.email;
            $window.location.href = '/';
        }).catch(function(e){
            console.log("your password and id do not match");
        });
    };


})