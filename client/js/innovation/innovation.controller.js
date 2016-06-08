app.controller('InnovationController', function($scope, $http, $window, $location) {

  	var currentUrl = $window.location.href;
	$scope.url = currentUrl;

  // for carousel autoplay
  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true
  });


    $scope.isActive = function (route) {
	   return route == $window.location.href.split("5959/")[1];
	};

  $('document').ready(function() {
    function parallax(page, speed, top) {
      var scrolled = $(window).scrollTop();
      $('.hept-' + page).css('top', (scrolled * speed) + top + 'px');
    }

    $(window).scroll(function(e) {
      parallax('inn-one', 0.7, 120);
      parallax('inn-two', 0.6, 215);
      parallax('inn-three', 0.5, 725);
      parallax('inn-four', 0.1, 2255);
      parallax('inn-five', 0.05, 2370);
    });
  })

	// $scope.url = currentUrl.split("5959/")[1];
	// $scope.url = "www.techcrunch.com";

});
