app.controller('AboutController', function($scope, $http, $window, $location) {

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

  $(document).ready(function() {
    $(".rooted, .constant, .versatile").click(function() {
      if ($(this).children(".paragraph").css('display') == 'none') {
        console.log('things');
        $(this).children(".paragraph").slideDown();
      } else {
        $(this).children(".paragraph").slideUp();
      }
    });

    function parallax(page, speed, top) {
      var scrolled = $(window).scrollTop();
      $('.hept-' + page).css('top', (scrolled * speed) + top + 'px');
    }

    $(window).scroll(function(e) {
      parallax('about-one', 0.7, 283);
      parallax('about-two', 0.7, 660);
      parallax('about-three', 0.7, 790);
      parallax('about-four', 0.5, 1085);
    });
  })

  $scope.isActive = function (route) {
    return route == $window.location.href.split("5959/")[1];
  };

  $scope.isNotActive = function (route) {
    return route != $window.location.href.split("5959/")[1];
  };

});
