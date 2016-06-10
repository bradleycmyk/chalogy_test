app.controller('AurousBrandController', function($scope, $http, $window, $location){

	var videos = document.getElementsByTagName("video");
	var fraction = 0.99;

	function checkScroll() {

	    for(var i = 0; i < videos.length; i++) {
	        var video = videos[i];

	        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
	            b = y + h, //bottom
	            visibleX, visibleY, visible;

	            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
	            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

	            visible = visibleX * visibleY / (w * h);

	            if (visible > fraction) {
	                video.play();
	            } else {
	                video.pause();
	            }
	    }
	}

	window.addEventListener('scroll', checkScroll, false);
	window.addEventListener('resize', checkScroll, false);

	$(document).ready(function(){
		var myVideo = $('.video-play-pause');

		$('.video-center').click(function(){
			if (myVideo.get(0).paused) 
		        myVideo.get(0).play(); 
		    else 
		        myVideo.get(0).pause(); 
		});

		$('#btn1').click(function(){
			$('.video-container-brand2').css({"display":"none"});
	    	$('.video-container-brand3').css({"display":"none"});
	    	$('.video-container-brand4').css({"display":"none"});
	    	$('.video-container-brand5').css({"display":"none"});
	    	$('.video-container-brand6').css({"display":"none"});
	    	$('.video-container-brand7').css({"display":"none"});
	    	$('.video-container-brand8').css({"display":"none"});

	      	$('#video-text-1').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect');
	      	$('.fading-effect').addClass('fadingEffect-to-left');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand1').css({"display":"block"});
	    	$('#video1').get(0).play();
	    });

	    $('#btn2').click(function(){
	    	$('.line-in-video').css({ "opacity":"0"});
	    	$('.video-container-brand1').css({"display":"none"});
	    	$('.video-container-brand3').css({"display":"none"});
	    	$('.video-container-brand4').css({"display":"none"});
	    	$('.video-container-brand5').css({"display":"none"});
	    	$('.video-container-brand6').css({"display":"none"});
	    	$('.video-container-brand7').css({"display":"none"});
	    	$('.video-container-brand8').css({"display":"none"});

	      	$('#video-text-2').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect-to-left');
	      	$('.fading-effect').addClass('fadingEffect');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand2').css({"display":"block"});
	    	$('#video2').get(0).play();
	    });

        $('#btn3').click(function(){
        	$('.line-in-video').css({ "opacity":"0"});
        	$('.video-container-brand1').css({"display":"none"});
	    	$('.video-container-brand2').css({"display":"none"});
	    	$('.video-container-brand4').css({"display":"none"});
	    	$('.video-container-brand5').css({"display":"none"});
	    	$('.video-container-brand6').css({"display":"none"});
	    	$('.video-container-brand7').css({"display":"none"});
	    	$('.video-container-brand8').css({"display":"none"});

	      	$('#video-text-3').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect');
	      	$('.fading-effect').addClass('fadingEffect-to-left');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand3').css({"display":"block"});
	    	$('#video3').get(0).play();
	    });

	    $('#btn4').click(function(){
	      	$('.line-in-video').css({ "opacity":"0"});
        	$('.video-container-brand1').css({"display":"none"});
	    	$('.video-container-brand2').css({"display":"none"});
	    	$('.video-container-brand3').css({"display":"none"});
	    	$('.video-container-brand5').css({"display":"none"});
	      	$('.video-container-brand6').css({"display":"none"});
	    	$('.video-container-brand7').css({"display":"none"});
	    	$('.video-container-brand8').css({"display":"none"});

	      	$('#video-text-4').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect');
	      	$('.fading-effect').addClass('fadingEffect-to-left');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand4').css({"display":"block"});
	    	$('#video4').get(0).play();
	    });

	    $('#btn5').click(function(){
	    	$('.line-in-video').css({ "opacity":"0"});
        	$('.video-container-brand1').css({"display":"none"});
	    	$('.video-container-brand2').css({"display":"none"});
	    	$('.video-container-brand3').css({"display":"none"});
	    	$('.video-container-brand4').css({"display":"none"});
	    	$('.video-container-brand6').css({"display":"none"});
	    	$('.video-container-brand7').css({"display":"none"});
	    	$('.video-container-brand8').css({"display":"none"});

	      	$('#video-text-5').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect-to-left');
	      	$('.fading-effect').addClass('fadingEffect');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand5').css({"display":"block"});
	    	$('#video5').get(0).play();
	      	
	    });

	    $('#btn6').click(function(){
	      	$('.line-in-video').css({ "opacity":"0"});
        	$('.video-container-brand1').css({"display":"none"});
	    	$('.video-container-brand2').css({"display":"none"});
	    	$('.video-container-brand3').css({"display":"none"});
	    	$('.video-container-brand4').css({"display":"none"});
	    	$('.video-container-brand5').css({"display":"none"});
	    	$('.video-container-brand7').css({"display":"none"});
	    	$('.video-container-brand8').css({"display":"none"});

	      	$('#video-text-6').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect-to-left');
	      	$('.fading-effect').addClass('fadingEffect');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand6').css({"display":"block"});
	    	$('#video6').get(0).play();
	    });

	    $('#btn7').click(function(){
	      	$('.line-in-video').css({ "opacity":"0"});
        	$('.video-container-brand1').css({"display":"none"});
	    	$('.video-container-brand2').css({"display":"none"});
	    	$('.video-container-brand3').css({"display":"none"});
	    	$('.video-container-brand4').css({"display":"none"});
	    	$('.video-container-brand5').css({"display":"none"});
	    	$('.video-container-brand6').css({"display":"none"});
	    	$('.video-container-brand8').css({"display":"none"});

	      	$('#video-text-7').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect-to-left');
	      	$('.fading-effect').addClass('fadingEffect');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand7').css({"display":"block"});
	    	$('#video7').get(0).play();
	    });

	    $('#btn8').click(function(){
	      	$('.line-in-video').css({ "opacity":"0"});
        	$('.video-container-brand1').css({"display":"none"});
	    	$('.video-container-brand2').css({"display":"none"});
	    	$('.video-container-brand3').css({"display":"none"});
	    	$('.video-container-brand4').css({"display":"none"});
	    	$('.video-container-brand5').css({"display":"none"});
	    	$('.video-container-brand6').css({"display":"none"});
	    	$('.video-container-brand7').css({"display":"none"});

	      	$('#video-text-8').addClass('fade-in-effect');
	      	$('.fading-effect').removeClass('fadingEffect-to-left');
	      	$('.fading-effect').addClass('fadingEffect');
	      	$('.line-in-video').css({ "opacity":"1"});
	    	$('.video-container-brand8').css({"display":"block"});
	    	$('#video8').get(0).play();
	    });
	
	})

    $scope.text1 = ["Sh-Polypeptide 55", "(PDGA-AA)", "Stimulates healthier looking skin and enhances skin's nautral rejuvenating power."];
    $scope.text2 = ["Rh-Oligopeptide-2", "Strengthens skin's own resurfacing ability, promoting youthful, radiant skin."];
    $scope.text3 = ["sh-Polypeptide 45 (GM-CSF)", "Anti-inflammatory peptide stimulates healthy skin while minimizing the appearance of fine lines and wrinkles."];
    $scope.text4 = ["RH-Polypeptide 8 (FGF4)", "Promotes healthy skin while boosting firmness and building resiliency."];
    $scope.text5 = ["EGF Rh-Oligopeptide 1", "Activates revitalization while reinforcing skin's natural barrier to protect the complexion."];
    $scope.text6 = ["Rh-Polypeptide 9 (VEGF)", "Stimulates youthful rejvenation while protecting the skin and fostering healing."];
    $scope.text7 = ["Rh-Polypeptide 1", "Stimulates healthy skin growth, promoting younger-looking skin"];
    $scope.text8 = ["HEllo", "Stimulates healthy skin growth, promoting younger-looking skin"];
	
});