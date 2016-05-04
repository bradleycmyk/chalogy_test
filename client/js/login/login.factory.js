'use strict';

app.factory('AuthService', function($http) {
    return {
        getSkinCareDb: function() {
            return $http.get('/api/products').then(function(response) {
                return response.data;
            });
        }
    };
});

