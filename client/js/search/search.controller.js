'use strict';
app.controller('searchController', function($scope, ProductFactory, $state, $stateParams) {
	var text = $stateParams.text;
	var keyword = $stateParams.text;

	console.log("text: ", text);
	console.log("keyword: ", keyword);

	if (text == ""){
		console.log("do nothing");
	} else {
		ProductFactory.searchDb(text).then(function(saturdayData) {
		
			if(saturdayData.length === 0) {
				$scope.alertmsg = "WE ARE SORRY. There are no items to match your search, please rephrase and try again.";
				$scope.suggestion = ["Make sure all words are spelled correctly.", "Try different keywords.", "Try more general keywords"];
				$scope.imgurl = "search-again.jpg";
				$(".giphy").show();
			}
			$scope.products = saturdayData;
		})
	}

	if (keyword == ""){
		console.log("no keywords");
	} else {
		ProductFactory.searchPagesDb(keyword).then(function(pages) {
		
			// if(pages.length === 0) {
			// 	$scope.alertmsg = "WE ARE SORRY. There are no items to match your search, please rephrase and try again.";
			// 	$scope.suggestion = ["Make sure all words are spelled correctly.", "Try different keywords.", "Try more general keywords"];
			// 	$scope.imgurl = "search-again.jpg";
			// 	$(".giphy").show();
			// }
			$scope.pages = pages;
		})
	}

});



