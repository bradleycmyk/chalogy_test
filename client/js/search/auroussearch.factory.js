'use strict';

app.factory('aurousSearchFactory', function($http) {
    return {
        searchAurousDb: function(text) {
            return $http.get('api/aurous/search/' + text).then(function(response) {
            	console.log("searchDB function in Aurous factory returns response: ", response);
                return response.data;
            });
        }
    };
});

// try add route to aurous search 
