'use strict'
app.controller('AdminController', function($scope, $http, AdminFactory) {

	$scope.submitItem = function(product){
		console.log("product", product);
		AdminFactory.addItem(product).then(function(data){
			console.log("data added to db: ", data);
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
		console.log("remove function title: ", title);
		AdminFactory.removeItem(title).then(function(Data){
			// console.log("what's data here are we reaching here?");
			// AdminFactory.removeAurousItem(title).then(function(aurousData){
			// 	console.log("item has been removed !");
			// });
			console.log("returned data: ", data);
		});
	};


	$scope.removeAurousItems = function(title) {
		AdminFactory.removeAurousItem(title).then(function(data){
			console.log("data removed: ", data);
		});
	};

});




