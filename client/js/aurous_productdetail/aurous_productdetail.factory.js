'use strict';

app.factory('AurousprodDetailFactory', function($http) {
	return {
		getOneItem: function(name){
			return $http.get('api/aurous/products/' + name).then(function(response) {
                return response.data;
            });
		},
		getRecommendation: function(product) {
			return $http.get('api/aurous/recommendation/' + product).then(function(response){
				console.log("response from db: ", response);
				return response.data;
			});
		}
	}
})
