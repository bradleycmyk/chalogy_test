app.controller('HomeController', function($scope, $http, $window) {

	// fade in test
	window.onload = function() {
	  document.getElementById('fade-in-test').className = 'fade-in-effect-test';
	  // document.getElementById('first-content-1').className = "fade-in-effect-test";
	};

	$(document).ready(function() {

		// add active-page class to page indicators
		var tolerancePixel = 40;

		function activePage1(){
			// get current browser top and bottom

        	var scrollTop1 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom1 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot1 = 150;
        	var yBottomDot1 = $("#first-dot").height() + yTopDot1;

        	if(scrollTop1 < yBottomDot1 && scrollBottom1 > yTopDot1) {
        		$("#firstp").removeClass('bg1').addClass("bg2");

        		$("#fade-in-test").addClass("fade-in-effect-test");
        		// $('#first-content').addClass('fade-in-effect-test');
				// $('.lax-one .content-a').addClass('gradient');

        	} else {
        		$("#firstp").removeClass('bg2').addClass("bg1");
				// $('.lax-one .content-a').removeClass('gradient');
        	}
        }

		function activePage2(){

        	var scrollTop2 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom2 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot2 = $("#second-dot").offset().top;
        	var yBottomDot2 = $("#second-dot").height() + yTopDot2;

        	if(scrollTop2 < yBottomDot2 && scrollBottom2 > yTopDot2) {
        		$("#secondp").removeClass('bg1').addClass("bg2");
        		$('#second-content').removeClass('fade-out-effect-test').addClass('fade-in-effect-test');
				// $('.lax-two .content-a').addClass('gradient');
        	} else {
        		$("#secondp").removeClass('bg2').addClass("bg1");
        		$('#second-content').addClass('fade-out-effect-test');
				// $('.lax-two .content-a').removeClass('gradient');
        	}
        }

        function activePage3(){

        	var scrollTop3 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom3 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot3 = $("#third-dot").offset().top;
        	var yBottomDot3 = $("#third-dot").height() + yTopDot3;

        	if(scrollTop3 < yBottomDot3 && scrollBottom3 > yTopDot3) {
        		$("#thirdp").removeClass('bg1').addClass("bg2");
        		$('#third-content').removeClass('fade-out-effect-test').addClass('fade-in-effect-test');
        		// $('.lax-three .content-a').addClass('gradient');

        	}  else {
        		$("#thirdp").removeClass('bg2').addClass("bg1");
        		$('#third-content').addClass('fade-out-effect-test');
				// $('.lax-three .content-a').removeClass('gradient');
        	}
        }

        function activePage4(){

        	var scrollTop4 = $(window).scrollTop() + tolerancePixel;
        	var scrollBottom4 = $(window).scrollTop() + $(window).height() - tolerancePixel;

        	var yTopDot4 = $("#fourth-dot").offset().top;
        	var yBottomDot4 = $("#fourth-dot").height() + yTopDot4;

        	if(scrollTop4 < yBottomDot4 && scrollBottom4 > yTopDot4) {
        		$("#fourthp").removeClass('bg1').addClass("bg2");
        		$('#fourth-content').removeClass('fade-out-effect-test').addClass('fade-in-effect-test');
        		// $('.lax-four .content-a').addClass('gradient');
        		
        	} else {
        		$("#fourthp").removeClass('bg2').addClass("bg1");
        		$('#fourth-content').removeClass('fade-in-effect-test').addClass('fade-out-effect-test');
        		$("#fullfour").removeClass('lax-four-4').addClass('lax-four');
        								// $('.lax-four .content-a').removeClass('gradient');
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

		$("#clickable-downarrow").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#secondsec").offset().top},
		        'slow');
		});

		$("#secondp").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#secondsec").offset().top},
		        'slow');
		});

		$("#clickable-downarrow2").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#thirdsec").offset().top},
		        'slow');
		});

		$("#clickable-uparrow2").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#firstsection").offset().top},
		        'slow');
		});

		$("#thirdp").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#thirdsec").offset().top},
		        'slow');
		});

		$("#clickable-downarrow3").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#fourthsec").offset().top},
		        'slow');
		});

		$("#clickable-uparrow3").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#secondsec").offset().top},
		        'slow');
		});

		$("#fourthp").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#fourthsec").offset().top},
		        'slow');
		});

		$("#clickable-uparrow4").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#thirdsec").offset().top},
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

	}); // end of $(document).ready


});


	