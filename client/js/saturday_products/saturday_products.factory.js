'use strict';

app.factory('SaturdayFactory', function($http) {
    return {
        getSkinCareDb: function() {
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
