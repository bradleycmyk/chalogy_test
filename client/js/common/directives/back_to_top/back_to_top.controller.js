app.controller('BackToTopController', function($scope, $http, $window, $location) {
  $('.back_to_top').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
  });
})
