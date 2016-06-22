app.controller('HomeController', function($scope, $http, $window) {

	$(document).ready(function() {
		/* detect touch */
		if("ontouchstart" in window){
		    document.documentElement.className = document.documentElement.className + " touch";
		}
		if(!$("html").hasClass("touch")){
		    /* background fix */
		    $(".parallax").css("background-attachment", "fixed");

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
		function parallaxPosition(e){
		    var heightWindow = $(window).height();
		    var topWindow = $(window).scrollTop();
		    var bottomWindow = topWindow + heightWindow;
		    var currentWindow = (topWindow + bottomWindow) / 2;
		    $(".parallax").each(function(i){
		        var path = $(this);
		        var height = path.height();
		        var top = path.offset().top;
		        var bottom = top + height;
		        // only when in range
		        if(bottomWindow > top && topWindow < bottom){
		            var imgW = path.data("resized-imgW");
		            var imgH = path.data("resized-imgH");
		            // min when image touch top of window
		            var min = 0;
		            // max when image touch bottom of window
		            var max = - imgH + heightWindow;
		            // overflow changes parallax
		            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
		            top = top - overflowH;
		            bottom = bottom + overflowH;
		            // value with linear interpolation
		            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
		            // set background-position
		            var orizontalPosition = path.attr("data-oriz-pos");
		            orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
		            $(this).css("background-position", orizontalPosition + " " + value + "px");
		        }
		    });
		}
		if(!$("html").hasClass("touch")){
		    $(window).resize(parallaxPosition);
		    //$(window).focus(parallaxPosition);
		    $(window).scroll(parallaxPosition);
		    parallaxPosition();
		}

	})



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
});
