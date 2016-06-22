'use strict';

app.factory('ProductFactory', function($http) {
    return {
        getSaturdaySkinProducts: function() {
            return $http.get('/api/products/saturday').then(function(response) {
                console.log("in product factory");
                return response.data;
            });
        },

        getAurousProducts: function() {
            return $http.get('/api/products/aurous').then(function(response) {
                console.log("in product factory");
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
            	console.log("searchDB function in factory returns response: ", response);
                return response.data;
            });
        },

        // search pages 
        searchPagesDb: function(keyword) {
            return $http.get('api/products/pages/' + keyword).then(function(response) {
                console.log("searchDB function in factory pages pages pages response: ", response);
                return response.data;
            });
        }

    };
});
