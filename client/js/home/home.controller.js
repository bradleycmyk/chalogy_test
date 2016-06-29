app.controller('HomeController', function($scope, $http, $window) {

	// opacity control - text fade out 

	var contents = document.getElementsByClassName("content-b");
	var fraction = 0.60;

	function checkScroll() {

	    for(var i = 0; i < contents.length; i++) {
	        var content = contents[i];

	        var x = content.offsetLeft, y = content.offsetTop, w = content.offsetWidth, h = content.offsetHeight, r = x + w, //right
	            b = y + h, //bottom
	            visibleX, visibleY, visible;

                visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
                visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

                visible = visibleX * visibleY / (w * h);

            if (visible > .70) {
	                content.style.opacity = "1";
	            } else if (visible > 0.5) {
	                content.style.opacity = "0.3";
	            } else {
	 	          	content.style.opacity = "0.1"
	            }
	        }  
	    }

  	window.addEventListener('scroll', checkScroll, false);
  	window.addEventListener('resize', checkScroll, false);

	$(document).ready(function() {

		// add active-page class to page indicators 
		var tolerancePixel = 40;

		function activePage1(){
			// get current browser top and bottom 
			var scrollTop1 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom1 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot1 = 150;
        	// var yTopDot = $("#first-dot").offset().top;
        	var yBottomDot1 = $("#first-dot").height() + yTopDot1;

        	if(scrollTop1 < yBottomDot1 && scrollBottom1 > yTopDot1) {
        		$("#firstp").addClass("active-page");
        	} else {
        		$("#firstp").removeClass("active-page");
        		// console.log("nothing happens");
        	}
        }

		function activePage2(){
			// get current browser top and bottom 
			var scrollTop2 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom2 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot2 = $("#second-dot").offset().top;
        	var yBottomDot2 = $("#second-dot").height() + yTopDot2;

        	if(scrollTop2 < yBottomDot2 && scrollBottom2 > yTopDot2) {
        		$("#secondp").addClass("active-page");
        	} else {
        		$("#secondp").removeClass("active-page");
        		// console.log("nothing happens");
        	}
        }

        function activePage3(){
			// get current browser top and bottom 
			var scrollTop3 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom3 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot3 = $("#third-dot").offset().top;
        	var yBottomDot3 = $("#third-dot").height() + yTopDot3;

        	if(scrollTop3 < yBottomDot3 && scrollBottom3 > yTopDot3) {
        		$("#thirdp").addClass("active-page");
        	} else {
        		$("#thirdp").removeClass("active-page");
        		// console.log("nothing happens");
        	}
        }

        function activePage4(){
			// get current browser top and bottom 
			var scrollTop4 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom4 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot4 = $("#fourth-dot").offset().top;
        	var yBottomDot4 = $("#fourth-dot").height() + yTopDot4;

        	if(scrollTop4 < yBottomDot4 && scrollBottom4 > yTopDot4) {
        		$("#fourthp").addClass("active-page");
        	} else {
        		$("#fourthp").removeClass("active-page");
        		// console.log("nothing happens");
        	}
        }

        $(document).on('scroll', activePage1);
        $(document).on('scroll', activePage2);
        $(document).on('scroll', activePage3);
        $(document).on('scroll', activePage4);

        // end of active page function 


        // smooth scroll to next page on click (page indicators)

		$(document).on("click", "#firstp", function(){
			$('html,body').animate({
		        scrollTop: $("#firstsection").offset().top},
		        'slow');
		});
		$("#secondp").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#secondsec").offset().top},
		        'slow');
		});
		$("#thirdp").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#thirdsec").offset().top},
		        'slow');
		});
		$("#fourthp").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#fourthsec").offset().top},
		        'slow');
		});

		// scrolling - also adding a class="test" here to each section 
		var delay = false;

		$('#home').on('mousewheel DOMMouseScroll', function(event) {
		    event.preventDefault();
		    if(delay) return;

		    delay = true;
		    setTimeout(function(){delay = false}, 800)

		    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

		  
		    var a= document.getElementsByClassName('test');
		    if(wd < 0) {
		      for(var i = 0 ; i < a.length ; i++) {
		        var t = a[i].getClientRects()[0].top;
		        if(t >= 40) break;
		      }
		    }
		    else {
		      for(var i = a.length-1 ; i >= 0 ; i--) {
		        var t = a[i].getClientRects()[0].top;
		        if(t < -20) break;
		      }
		    }

		    if(a.length){
			    $('html,body').animate({
			      scrollTop: a[i].offsetTop
			    }, 1000);
			}
    	  });
		
		// end of scrolling !! 		



		/* detect touch */
		if("ontouchstart" in window){
		    document.documentElement.className = document.documentElement.className + " touch";
		}
		if(!$("html").hasClass("touch")){
		    /* background fix */
		    $(".parallax").css("background-attachment", "fixed");
		}
		/* fix vertical when not overflow
		call fullscreenFix() if .fullscreen content changes */
		function fullscreenFix(){
		    var h = $('body').height();
		    // set .fullscreen height
		    $(".content-b").each(function(i){
		        if($(this).innerHeight() > h){ $(this).closest(".fullscreen").addClass("overflow");
		        }
		    });
		}
		$(window).resize(fullscreenFix);
		fullscreenFix();

		/* resize background images */
		function backgroundResize(){
		    var windowH = $(window).height();
		    $(".background").each(function(i){
		        var path = $(this);
		        // variables
		        var contW = path.width();
		        var contH = path.height();
		        var imgW = path.attr("data-img-width");
		        var imgH = path.attr("data-img-height");
		        var ratio = imgW / imgH;
		        // overflowing difference
		        var diff = parseFloat(path.attr("data-diff"));
		        diff = diff ? diff : 0;
		        // remaining height to have fullscreen image only on parallax
		        var remainingH = 0;
		        if(path.hasClass("parallax") && !$("html").hasClass("touch")){
		            var maxH = contH > windowH ? contH : windowH;
		            remainingH = windowH - contH;
		        }
		        // set img values depending on cont
		        imgH = contH + remainingH + diff;
		        imgW = imgH * ratio;
		        // fix when too large
		        if(contW > imgW){
		            imgW = contW;
		            imgH = imgW / ratio;
		        }
		        //
		        path.data("resized-imgW", imgW);
		        path.data("resized-imgH", imgH);
		        path.css("background-size", imgW + "px " + imgH + "px");
		    });
		}
		$(window).resize(backgroundResize);
		$(window).focus(backgroundResize);
		backgroundResize();





		/* set parallax background-position */
		// function parallaxPosition(e){
		//     var heightWindow = $(window).height();
		//     var topWindow = $(window).scrollTop();
		//     var bottomWindow = topWindow + heightWindow;
		//     var currentWindow = (topWindow + bottomWindow) / 2;
		//     $(".parallax").each(function(i){
		//         var path = $(this);
		//         var height = path.height();
		//         var top = path.offset().top;
		//         var bottom = top + height;
		//         // only when in range
		//         if(bottomWindow > top && topWindow < bottom){
		//             var imgW = path.data("resized-imgW");
		//             var imgH = path.data("resized-imgH");
		//             // min when image touch top of window
		//             var min = 0;
		//             // max when image touch bottom of window
		//             var max = - imgH + heightWindow;
		//             // overflow changes parallax
		//             var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
		//             top = top - overflowH;
		//             bottom = bottom + overflowH;
		//             // value with linear interpolation
		//             var value = min + (max - min) * (currentWindow - top) / (bottom - top);
		//             // set background-position
		//             var orizontalPosition = path.attr("data-oriz-pos");
		//             orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
		//             $(this).css("background-position", orizontalPosition + " " + value + "px");
		//         }
		//     });
		// }
		// if(!$("html").hasClass("touch")) {
		//     $(window).resize(parallaxPosition);
		//     //$(window).focus(parallaxPosition);
		//     $(window).scroll(parallaxPosition);
		//     parallaxPosition();
		// }





	}); // end of $(document).ready 


});


	// $(document).ready(function(){
	// 	function uncover(ribbon, delay, direction, amount) {
	// 		$('.ribbon-cover-' + ribbon).delay(delay).animate({
	// 			direction: amount
	// 		}, function() {
	// 			$('.ribbon-cover-' + ribbon).css({'display': 'none'});
	// 		});
	// 	}
	//
	// 	$('.ribbon-cover-green').animate({
	// 		left: '-=1310px'
	// 	}, 1000, function() {
	// 		$('.ribbon-cover-green').css({'display': 'none'});
	// 	});
	//
	// 	$('.ribbon-cover-blue').delay(1000).animate({
	// 		left: '+=688px'
	// 	}, 1000, function() {
	// 		$('.ribbon-cover-blue').css({'display': 'none'});
	// 	});
	//
	// 	$('.circle-wrapper-red').delay(2300).fadeIn(1200);
	//
	// 	$('.animator h1').delay(3300).fadeIn(1200);
	//
	// 	$('.front_text').delay(4500).fadeIn(1200);
	//
	// 	$('footer').delay(5700).fadeIn(1200);
	//
	// 	$('.wrapper').delay(5700).queue(function(next) {
	// 	  $(this).css({
	// 	    'height': 'auto'
	// 	  });
	// 	  next();
	// 	})
	//
	// 	// $('.ribbon-wrapper-blue').delay(600).animate({
	// 	//   left: '+=558px',
	// 	//   top: '+=538px'
	// 	// }, 1500);
	//
	// 	// $('.ribbon-wrapper-green').delay(2100).animate({
	// 	//   left: '-=800px',
	// 	//   top: '+=441px'
	// 	// }, 1500);
	//
	// 	// $('.circle-wrapper-red').delay(4100).fadeIn(1200);
	//
	// 	// $('.animator h1').delay(5300).fadeIn(1200);
	//
	// 	// $('.front_text').delay(6500).fadeIn(1200);
	//
	// 	// $('footer').delay(7700).fadeIn(1200);
	//
	// 	// $('.wrapper').delay(7700).queue(function(next) {
	//
	// 	//   $(this).css({
	// 	//     'height': 'auto'
	// 	//   });
	// 	//   next();
	// 	// })
	//
	// 	$('.hoover-red, .circle-triangle, .circle-triangle-two').hover(function() {
	//     console.log('in');
	//     $(".circle-red").stop().toggleClass("red-changer");
	//   });
	//
	// 	$('.hoover-blue').hover(function() {
	// 	  console.log('in');
	// 	  $(".ribbon-blue").toggleClass("blue-changer");
	// 	});
	//
	// 	$('.hoover-green').hover(function() {
	// 	  console.log('in');
	// 	  $(".ribbon-green").toggleClass("green-changer");
	// 	});
	// })
