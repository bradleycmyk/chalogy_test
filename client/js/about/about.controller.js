app.controller('AboutController', function($scope, $http, $window, $location) {
  $(document).ready(function() {
    $(".rooted, .constant, .versatile").click(function() {
      if ($(this).children(".paragraph").css('display') == 'none') {
        console.log('things');
        $(this).children(".paragraph").slideDown();
      } else {
        $(this).children(".paragraph").slideUp();
      }
    });
  })

  $scope.isActive = function (route) {
    return route == $window.location.href.split("5959/")[1];
  };

});
