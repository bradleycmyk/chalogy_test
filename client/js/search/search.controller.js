'use strict';
app.controller('searchController', function($scope, searchFactory) {

    $scope.update = function(text) {
        searchFactory.searchDb(text).then(function (data) {
            console.log("search DB function returning data: ", data);
            $scope.products = data
        });
        $scope.text="";
    };

    // $scope.showTheForm = false;



});