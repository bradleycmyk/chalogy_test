'use strict';

app.factory('homeFactory', function($http) {
    return {
        getSkinCareDb: function() {
            console.log("factory getSkinCareDb is called");
            return $http.get('/api/products').then(function(response) {
                return response.data;
            });
        },
        getOneSkinCareDb: function(id) {
            return $http.get('api/products/' + id).then(function(response) {
                return response.data;
            });
        }
    };
});