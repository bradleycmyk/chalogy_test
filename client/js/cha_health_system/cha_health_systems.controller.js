app.controller('ChaHealthController', function($scope, $http, $window, $location) {

  if(sessionStorage.loggedinUser == undefined) {
    // console.log("hello no one is logged");
    if($window.location.href.split("5959/")[1] == "login") {
      $('.login-pop').css({"display":"none"});
    } else {
      $('.login-pop').css({"display":"block"});
    }
  } else {
    $('.login-pop').css({"display":"none"});
  }

  var currentUrl = $window.location.href;
	$scope.url = currentUrl;

  $scope.trustUrl = function(url) {
    return $sce.trustAsResourceUrl(url);
  }

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
  });

  // for carousel autoplay
	$('#myCarousel').carousel({
		interval: 3000,
		cycle: true
	});
});
