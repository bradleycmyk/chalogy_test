app.controller('ChaSevenController', function($scope, $http, $window, $location) {

  	var currentUrl = $window.location.href;
	$scope.url = currentUrl;

  // for carousel autoplay
  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true
  });

	// $scope.url = currentUrl.split("5959/")[1];
	// $scope.url = "www.techcrunch.com";

	// window.fbAsyncInit = function() {
	//     FB.init({
	//       appId      : 113567489055934,
	//       xfbml      : true,
	//       version    : 'v2.3'
	//     });
	//   };


	// (function(d, s, id) {
	//   var js, fjs = d.getElementsByTagName(s)[0];
	//   if (d.getElementById(id)) return;
	//   js = d.createElement(s); js.id = id;
	//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
	//   fjs.parentNode.insertBefore(js, fjs);
	// }(document, 'script', 'facebook-jssdk'));


	// $('#fb-share-button').click(function() {
	//     FB.ui({
	//           method: 'feed',
	//           link: currentUrl,
	//           // picture: 'The picture url',
	//           name: "The name who will be displayed on the post",
	//           description: "The description who will be displayed"
	//         }, function(response){
	//             console.log(response);
	//         }
	//     );
	// });

});
