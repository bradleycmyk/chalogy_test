app.controller('AboutController', function($scope, $http) {
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
});
