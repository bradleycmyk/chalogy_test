app.controller('ProdDetailCtrl', function($scope, $http, $state, $stateParams, ProductFactory, $window) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;

	ProductFactory.getOneItem($stateParams.name).then(function(data){
		$scope.product = data;
	});

	// for tab manipulation
	$scope.tab;
	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	};

	$(document).ready(function(){
		setTimeout(function() {
	      $('#white-wrap-d').removeClass('white-wrap')
	    }, 250);
	})

});
