app.controller('ChaHealthController', function($scope, $http, $window, $location) {

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
      parallax('chs-one', 0.2, 695);
      parallax('chs-two', 0.2, 900);
    });
  })

});