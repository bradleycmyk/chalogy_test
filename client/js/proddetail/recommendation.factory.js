'use strict';

app.factory('recommendationFactory', function($http) {
	return {
		getRecommendation: function(product) {
			return $http.get('api/products/recommendation/' + product).then(function(response){
				return response.data;
			});
		}
	}
})
