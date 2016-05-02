app.controller('HomeController', function($scope, $http, homeFactory) {
	
	homeFactory.getSkinCareDb().then(function(data){
	  	$scope.products = data;
	})

	$(document).ready(function(){

		$('.ribbon-wrapper-blue').delay(600).animate({
		  left: '+=558px',
		  top: '+=538px'
		}, 1500);

		$('.ribbon-wrapper-green').delay(2100).animate({
		  left: '-=800px',
		  top: '+=441px'
		}, 1500);

		$('.circle-wrapper-red').delay(4100).fadeIn(1200);

		$('.animator h1').delay(5300).fadeIn(1200);

		$('.front_text').delay(6500).fadeIn(1200);

		$('footer').delay(7700).fadeIn(1200);

		$('.wrapper').delay(7700).queue(function(next) {

		  $(this).css({
		    'height': 'auto'
		  });
		  next();
		})

		$('.hoover-red, .circle-triangle, .circle-triangle-two').hover(
		  function() {
		    console.log('in');
		    // $(".chalogy, .cha_plus").stop().animate({
		    //   "left": "+=22px",
		    //   "top": "+=22px"
		    // }, 625);
		    $(".circle-red").stop().toggleClass("red-changer");
		  }
		  // function() {
		  //   $(".chalogy, .cha_plus").stop(false, false).animate({
		  //     "left" : "-=22px",
		  //     "top": "-=22px"
		  //   }, 625)
		  //   $(".circle-red").stop().delay(100).removeClass("red-changer");
		  //
		  // }
		)

		// $('.hoover-red, .circle-triangle, .circle-triangle-two').hover(
		//   function() {
		//     $(".chalogy, .cha_plus").animate({
		//       "left": "+=30px",
		//       "top": "+=30px"
		//     }, 625)
		//   },
		//   function() {
		//     $(".chalogy, .cha_plus").animate({
		//       "left" : "-=30px",
		//       "top": "-=30px"
		//     }, 625)
		//   }
		// );

		$('.hoover-blue').hover(function() {
		  console.log('in');
		  $(".ribbon-blue").toggleClass("blue-changer");
		})

		$('.hoover-green').hover(function() {
		  console.log('in');
		  $(".ribbon-green").toggleClass("green-changer");
		})

	})

});