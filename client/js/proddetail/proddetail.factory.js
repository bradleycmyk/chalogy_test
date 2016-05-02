'use strict';

app.factory('prodDetailFactory', function($http) {
	return {
		getOneItem: function(name){
			return $http.get('api/products/saturday/' + name).then(function(response) {
                return response.data;
            });
		}
	}
})
