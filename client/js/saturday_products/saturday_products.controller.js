app.controller('SaturdayProductController', function($scope, $http, SaturdayFactory, $window, $location) {
	$scope.msg = "msg from Saturday Product Controller";

	SaturdayFactory.getSkinCareDb().then(function(data){
		$scope.products = data;
	})



  $scope.isActive = function (route) {
      return route == $window.location.href.split("5959/")[1];
    }

	$(document).ready(function(){
		if($(window).width() < 1205) {
			$('#max-width').removeClass('wrapper');
		} else {
			// $('#max-width').addClass('wrapper');
		}

    // setTimeout(function() {
    //    $rows.removeClass("pageLoad");
    // }, 800);

    setTimeout(function() {
      $('#white-wrap').removeClass('white-wrap')
    }, 250);

    // setTimeout(function() {
    //   $('#white-wrapper').removeClass('white-wrapper')
    // }, 600);
	
  })

});
