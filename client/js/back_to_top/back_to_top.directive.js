app.directive("backtotop", function(){
	return {
		restrict: "E",
		templateUrl: "/js/back_to_top/back_to_top.html",
		controller: 'BackToTopController'
	};
});
