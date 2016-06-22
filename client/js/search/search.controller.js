'use strict';
app.controller('searchController', function($scope, ProductFactory, $state, $stateParams) {
	var text = $stateParams.text;
	var keyword = $stateParams.text;

	$scope.alertmsg = "WE ARE SORRY. There are no items to match your search, please rephrase and try again.";
	$scope.suggestion = ["Make sure all words are spelled correctly.", "Try different keywords.", "Try more general keywords"];
	$scope.imgurl = "search-again.jpg";

	// product search 
	if (text == ""){
		console.log("do nothing");
	} else {
		ProductFactory.searchDb(text).then(function(saturdayData) {
		
			if(saturdayData.length === 0) {
				$(".alert-msg").css({"display":"block"});
				$(".giphy").show();
			}
			$scope.products = saturdayData;
		})
	}

	// page search 
	if (keyword == ""){
		console.log("no keywords");
	} else {
		ProductFactory.searchPagesDb(keyword).then(function(pages) {
			$scope.pages = pages;
		})
	}


	// highligting search text !! 

	$(document).ready(function(){

	    function highlightSearchWord() {
		    var text = $stateParams.text;
		    var query = new RegExp("(\\b" + text + "\\b)", "gim");

		    for(var i = 0; i < $(".pages").length; i++) {
		    	var e = $(".pages")[i].innerHTML;
		    	var enew = e.replace(/(<span>|<\/span>)/igm, "");
			    $(".pages")[i].innerHTML = enew;
			    var newe = enew.replace(query, "<span>$1</span>");
			    $(".pages")[i].innerHTML = newe;
		    }
		}
		setTimeout(highlightSearchWord, 1500);

	})

});



