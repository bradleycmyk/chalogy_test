'use strict';
app.controller('searchController', function($scope, searchFactory, aurousSearchFactory, $state, $stateParams) {
	var text = $stateParams.text;

	if (text == ""){
		console.log("do nothing");
	} else {
		searchFactory.searchDb(text).then(function(saturdayData) {
			aurousSearchFactory.searchAurousDb(text).then(function(aurousData){
				if(saturdayData.concat(aurousData).length === 0) {
					console.log("no matching data");
					$scope.alertmsg = "no matching data found please search again";
					$scope.imgurl = "search-again.jpg";
					$(".giphy").show();
				}
				$scope.products = saturdayData.concat(aurousData);
			})
		})
	}

});



