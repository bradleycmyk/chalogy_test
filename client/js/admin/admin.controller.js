'use strict'
app.controller('AdminController', function($scope, $http, AdminFactory, $state, $stateParams) {

	$scope.submitItem = function(product){
		AdminFactory.addItem(product).then(function(data){
			$scope.addForm.$setPristine();
			$scope.product = {};
		})
	};

	$scope.allitems = function(){
		AdminFactory.getAllItems().then(function(saturdayData){
            AdminFactory.getAllAurousItems().then(function(aurousData){
            	$scope.allproducts = saturdayData.concat(aurousData);
            	$scope.msg = "welcome";
            })
        });
	};

	$scope.editItem = function(title) {
		console.log("edit function title: ", title);
	};

	$scope.removeItem = function(title) {
		AdminFactory.removeItem(title).then(function(Data){
		});
	};

	$scope.removeAurousItems = function(title) {
		AdminFactory.removeAurousItem(title).then(function(data){
		});
	};
});
