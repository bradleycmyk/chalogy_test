app.controller('SaturdayProductController', function($scope, $http, ProductFactory, $window, $location) {

  if(sessionStorage.loggedinUser == undefined) {
    if($window.location.href.split("5959/")[1] == "login") {
      $('.login-pop').css({"display":"none"});
    } else {
      $('.login-pop').css({"display":"block"});
    }
  } else {
    $('.login-pop').css({"display":"none"});
  }

  ProductFactory.getSaturdaySkinProducts().then(function(data){
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
