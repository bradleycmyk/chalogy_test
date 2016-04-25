'use strict';

app.factory('searchFactory', function($http) {
    return {
        getSkinCareDb: function() {
            console.log("factory getSkinCareDb is called in searchFactory!!!");
            return $http.get('/api/products').then(function(response) {
                return response.data;
            });
        },
        searchDb: function(text) {
            return $http.get('api/products/' + text).then(function(response) {
            	console.log("searchDB function in factory returns response: ", response);
                return response.data;
            });
        }
    };
});

