app.controller('AurousBrandController', function($scope, $http, $window, $location){

	$scope.msg = "this is msg from AurousBrandController";

	  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true
  });

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};


 //  	$(window).scroll(function () {
	//     if ($(document).scrollTop() == 0) {
	//         $('#header').removeClass('tiny');
	//         $('#menu-spacing').addClass('nav-margin-top');
	//         $('.title-area img').attr('src', 'img/resolute_logo.png');
	//     } else {
	//         $('#header').addClass('tiny');
	//         $('#menu-spacing').removeClass('nav-margin-top');
	//         $('.title-area img').attr('src', 'your-new-image.png');
	//     }
	// }); 


// fix top part as well as footer based on scroll position !! 

	$(function(){
	    $(window).scroll(function(){
	    	if($(this).scrollTop() < 800) {
	            // $('#logo, #topbar, .cart-label').fadeIn('fast');
	            $('#parallax  img').css({'position':'relative', 'top':'800px', 'left':'20%'})
	           
	                .attr('src','six.png');
	     	} else if($(this).scrollTop() > 800 && $(this).scrollTop() < 1200) {
	            // $('#topbar, .cart-label').fadeOut('slow');
	            $('#parallax  img')
	            .css({'position':'fixed', 'top':'40%', 'left':'40%'})
	            .attr('src','six-1.gif');

	            $('#parallax .one1').css({'display':'inline-block'});
	            $('#parallax').css({'pointer-events':'none'});
	            $('.container-animation').css({'pointer-events':'none'});


	            

	        } else if($(this).scrollTop() > 1200 && $(this).scrollTop() < 1600) {
	        	$('#parallax img')
	        	.css({'position':'fixed', 'top':'40%', 'left':'40%'})
	        	.attr('src', 'six-2.gif');

	        	$('#parallax.one1').css({'display':'none'});
	        	$('#parallax.two2').css({'display':'inline-block'});

	        } else if($(this).scrollTop() > 1600 && $(this).scrollTop() < 2000) {
	        	$('#parallax img')
	        	.css({'position':'fixed', 'top':'40%', 'left':'40%'})
	        	.attr('src', 'six-3.gif');

	        	$('#parallax.one1').css({'display':'none'});
	        	$('#parallax.two2').css({'display':'none'});
	        	$('#parallax.three3').css({'display':'inline-block'});

	        } else if($(this).scrollTop() > 2000) {
	        	$('#parallax img')
	        	.css({'position':'relative'})

	        	$('#one').css({'display':'none'});
	        	$('#two').css({'display':'none'});
	        	$('#three').css({'display':'none'});
	        }
	
	    });
	});
		
	$(function(){
		$(window).scroll(function(){
			if ($(window).scrollTop() > 2260) {
			    $('.banner h2').css('display', 'none');
			    $('.banner .info').css('display', 'block');
			} else {
			    $('.banner h2').css('display', 'block');
			    $('.banner .info').css('display', 'none');
			}
		})
	});

	// $(function(){
	// 	$(window).scroll(function(){
	// 		if ($(window).scrollTop() > 2260) {
	// 		    $('.banner h2').css('display', 'none');
	// 		    $('.banner .info').css('display', 'block');
	// 		} else {
	// 		    $('.banner h2').css('display', 'block');
	// 		    $('.banner .info').css('display', 'none');
	// 		}
	// 	})
	// });

	$( "#target" ).scroll(function() {
	  $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
	});



});