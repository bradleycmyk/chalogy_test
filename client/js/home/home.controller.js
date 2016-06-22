app.controller('HomeController', function($scope, $http, $window) {

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

	

	$(document).ready(function(){
		function uncover(ribbon, delay, direction, amount) {
			$('.ribbon-cover-' + ribbon).delay(delay).animate({
				direction: amount
			}, function() {
				$('.ribbon-cover-' + ribbon).css({'display': 'none'});
			});
		}

		$('.ribbon-cover-green').animate({
			left: '-=1310px'
		}, 1000, function() {
			$('.ribbon-cover-green').css({'display': 'none'});
		});

		$('.ribbon-cover-blue').delay(1000).animate({
			left: '+=688px'
		}, 1000, function() {
			$('.ribbon-cover-blue').css({'display': 'none'});
		});

		$('.circle-wrapper-red').delay(2300).fadeIn(1200);

		$('.animator h1').delay(3300).fadeIn(1200);

		$('.front_text').delay(4500).fadeIn(1200);

		$('footer').delay(5700).fadeIn(1200);

		$('.wrapper').delay(5700).queue(function(next) {
		  $(this).css({
		    'height': 'auto'
		  });
		  next();
		})

		// $('.ribbon-wrapper-blue').delay(600).animate({
		//   left: '+=558px',
		//   top: '+=538px'
		// }, 1500);

		// $('.ribbon-wrapper-green').delay(2100).animate({
		//   left: '-=800px',
		//   top: '+=441px'
		// }, 1500);

		// $('.circle-wrapper-red').delay(4100).fadeIn(1200);

		// $('.animator h1').delay(5300).fadeIn(1200);

		// $('.front_text').delay(6500).fadeIn(1200);

		// $('footer').delay(7700).fadeIn(1200);

		// $('.wrapper').delay(7700).queue(function(next) {

		//   $(this).css({
		//     'height': 'auto'
		//   });
		//   next();
		// })

		$('.hoover-red, .circle-triangle, .circle-triangle-two').hover(function() {
	    console.log('in');
	    $(".circle-red").stop().toggleClass("red-changer");
	  });

		$('.hoover-blue').hover(function() {
		  console.log('in');
		  $(".ribbon-blue").toggleClass("blue-changer");
		});

		$('.hoover-green').hover(function() {
		  console.log('in');
		  $(".ribbon-green").toggleClass("green-changer");
		});
	})
});
