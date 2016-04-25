app.controller('HomeController', function($scope, $http, homeFactory) {
  
  $scope.msgFromScope = "This is a message from homeController Scope";

  homeFactory.getSkinCareDb().then(function(data){
  	console.log("data: ", data);
  	$scope.products = data;
  	console.log("this is log from home controller!")
  })
});