'use strict';

app.factory('AurousFactory', function($http) {
    return {
        getSkinCareDb: function() {
            console.log("aurous Factory!!!");
            return $http.get('/api/aurous').then(function(response) {
                return response.data;
            });
        },
        getOneSkinCareDb: function(id) {
            return $http.get('api/aurous/' + id).then(function(response) {
                return response.data;
            });
        }
    };
});


