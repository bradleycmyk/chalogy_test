'use strict';
app.controller('searchController', function($scope, ProductFactory, $state, $stateParams) {
	var text = $stateParams.text;

	if (text == ""){
		console.log("do nothing");
	} else {
		ProductFactory.searchDb(text).then(function(saturdayData) {
		
			if(saturdayData.length === 0) {
				console.log("no matching data");
				$scope.alertmsg = "WE ARE SORRY. There are no items to match your search, please rephrase and try again.";
				$scope.suggestion = ["Make sure all words are spelled correctly.", "Try different keywords.", "Try more general keywords"];
				$scope.imgurl = "search-again.jpg";
				$(".giphy").show();
			}
			$scope.products = saturdayData;
			
		})
	}

});



