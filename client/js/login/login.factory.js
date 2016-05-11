"use strict";

app.factory('loginFactory', function($http, AuthService){
	return {
		// checkUser : function (users) {
		// 	var datafromdb = AuthService.login(users)
		// 	console.log("auth factory: ", datafromdb);

		// 	return AuthService.login(users);
		// },

		getUser: function(users) {
            return $http.post('/api/user/', users).then(function(response){
            	return response.data;
            });
		}
	};
});