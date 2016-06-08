app.controller('ChaumController', function($scope, $http, $window, $location) {

  var currentUrl = $window.location.href;
	$scope.url = currentUrl;

  $scope.isActive = function (route) {
    return route == $window.location.href.split("5959/")[1];
  };

  $('document').ready(function() {
    function parallax(page, speed, top) {
      var scrolled = $(window).scrollTop();
      $('.hept-' + page).css('top', (scrolled * speed) + top + 'px');
    }

    $(window).scroll(function(e) {
      parallax('chaum-one', 0.5, 695);
      parallax('chaum-two', 0.3, 1050);
    });
  })

});
