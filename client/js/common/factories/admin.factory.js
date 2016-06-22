'use strict';

app.factory('AdminFactory', function($http) {
    return {
        addItem: function(product) {
            console.log("rpdouct in factoru: ", product);
             return $http.post('api/products/add/', product).then(function(response) {
                return response.data;
            });
        },

        getAllItems: function() {
            return $http.get('api/products').then(function(response){
                return response.data;
            })
        },

        removeItem: function(title) {
            console.log("rpdouct in factoru: ", title);
             return $http.post('api/products/prodremove/', title).then(function(response) {
                return response.data;
            });
        },

        getAllAurousItems: function() {
            return $http.get('api/aurous').then(function(response){
                return response.data;
            })
        },

        removeAurousItem: function(title) {
            return $http.post('api/aurous/remove', title).then(function(response){
                console.log("yes2");
                return response.data;
            });
        }

    };
});


