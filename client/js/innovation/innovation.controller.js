app.controller('InnovationController', function($scope, $http) {
  
  $scope.msgFromScope = "This is a message from Innovation Controller Scope";


  $(document).ready(function(){
    $(".btn1").click(function(){
        $("#paragraph").hide();
    });
    $(".btn2").click(function(){
        $("#paragraph").show();
    });
	});

}); 

