'use strict';

app.factory('ProductFactory', function($http) {
    return {
        getSkinCareDb: function() {
            return $http.get('/api/products/saturday').then(function(response) {
                console.log("in product factory");
                return response.data;
            });
        },

        getSkinCareAurousDb: function() {
            return $http.get('/api/products/aurous').then(function(response) {
                console.log("in product factory");
                return response.data;
            });
        }

    };
});
