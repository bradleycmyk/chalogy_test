app.controller('SaturdayProductController', function($scope, $http, ProductFactory, $window, $location) {

  if(sessionStorage.loggedinUser == undefined) {
    // console.log("hello no one is logged");
    if($window.location.href.split("5959/")[1] == "login") {
      $('.login-pop').css({"display":"none"});
      console.log("do nothing");
    } else {
      $('.login-pop').css({"display":"block"});
    }
  } else {
    console.log("who's logged in??");
    $('.login-pop').css({"display":"none"});
  }

	// SaturdayFactory.getSkinCareDb().then(function(data){
	// 	$scope.products = data;
	// })

  ProductFactory.getSkinCareDb().then(function(data){
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

    setTimeout(function() {
      $('#white-wrap').removeClass('white-wrap')
    }, 250);	
  })

});
