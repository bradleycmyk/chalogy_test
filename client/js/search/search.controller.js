'use strict';
app.controller('searchController', function($scope, ProductFactory, $state, $stateParams) {
	var text = $stateParams.text;
	var keyword = $stateParams.text;

	$scope.alertmsg = "WE ARE SORRY. There are no items to match your search, please rephrase and try again.";
	$scope.suggestion = ["Make sure all words are spelled correctly.", "Try different keywords.", "Try more general keywords"];
	$scope.imgurl = "search-again.jpg";


	//function for decoding HTML entities that are present in JSON data
	function decodeHtml(html) {
			//creates dummy textarea element
	    var txt = document.createElement("textarea");

			//sets HTML in dummy as the passed variable
	    txt.innerHTML = html;

			//returns the dummy element, which will automagically evaluate the HTML entities to their proper symbols
	    return txt.value;
	}


	// product search
	if (text == ""){
		console.log("do nothing");
	} else {
		ProductFactory.searchDb(text).then(function(saturdayData) {
			if(saturdayData.length === 0) {
				$(".products_results").css({"display":"none"});
				ProductFactory.searchPagesDb(keyword).then(function(pages) {
					if(pages.length === 0) {
						$(".pages_results").css({"display":"none"});
						$('.alert-msg').css({'display':'block'});
					}
				})
			}

			//loop through all of the returned PRODUCTS and apply the decoding function to the JSON
			for (var j in saturdayData) {
				saturdayData[j].description = decodeHtml(saturdayData[j].description);
			}

			$scope.products = saturdayData;
		})
	}

	// page search
	if (keyword == ""){
		console.log("no keywords");
	} else {
		ProductFactory.searchPagesDb(keyword).then(function(pages) {
			if(pages.length === 0) {
				$(".pages_results").css({"display":"none"});
				ProductFactory.searchDb(text).then(function(saturdayData) {
					if(saturdayData.length === 0) {
						$(".products_results").css({"display":"none"});
						$('.alert-msg').css({'display':'block'});
					}
				})
			}

			//loop through all of the returned PAGES and apply the decoding function to the JSON
			for (var i in pages) {
				pages[i].description = decodeHtml(pages[i].description);
			}

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
