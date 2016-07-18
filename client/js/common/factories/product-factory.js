'use strict';

app.factory('ProductFactory', function($http) {
    return {
        getSaturdaySkinProducts: function() {
            return $http.get('/api/products/saturday').then(function(response) {
                return response.data;
            });
        },

        getAurousProducts: function() {
            return $http.get('/api/products/aurous').then(function(response) {
                return response.data;
            });
        },

        // used in both aurous and sat-skin prod detail pages 
        getOneItem: function(name){
			return $http.get('api/products/' + name).then(function(response) {
                return response.data;
            });
		},

		// search
		searchDb: function(text) {
            return $http.get('api/products/search/' + text).then(function(response) {
                return response.data;
            });
        },

        // search pages 
        searchPagesDb: function(keyword) {
            return $http.get('api/products/pages/' + keyword).then(function(response) {
                return response.data;
            });
        }

    };
});
