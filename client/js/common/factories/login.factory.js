"use strict";

app.factory('loginFactory', function($http){
	return {
		getUser: function(users) {
            return $http.post('/api/user/', users).then(function(response){
            	return response.data;
            });
		}
	};
});