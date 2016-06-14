app.controller('ProdDetailCtrl', function($scope, $http, $state, $stateParams, prodDetailFactory, recommendationFactory, $window) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;

	prodDetailFactory.getOneItem($stateParams.name).then(function(data){
		$scope.product = data;

	});

	recommendationFactory.getRecommendation($stateParams.name).then(function(data){
		$scope.recommendations = data;
	});

	// for tab manipulation
	$scope.tab;
	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	};

	// $scope.isActive = function (route) {
	//     return ($window.location.href.split("5959/")[1].indexOf(route) > -1);
	//  };

	$(document).ready(function(){
		setTimeout(function() {
	      $('#white-wrap-d').removeClass('white-wrap')
	    }, 250);
	})

});
