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
		var myVideo = $('#video2');

		$('.video-center').click(function(){
			if (myVideo.get(0).paused) 
		        myVideo.get(0).play(); 
		    else 
		        myVideo.get(0).pause(); 
		});

		// $(".btn1").click(function(){
	 //        $("p").fadeOut()
	 //    });
	    $(".btn2").click(function(){
	        $("#fade").fadeIn();
	    });
	})

	$(function() { // Shorthand for $(document).ready(function() {
		var myVideo3 = $('#video2');

      $('p.a').hide().delay(5000).fadeIn(5200);
      $('p.b').hide().delay(5200).fadeIn(6200);
      $('p.c').delay(5000).css({"display":"block"});
      $('#heybtn').click(function(){
      	$('#hey').addClass('hey');
      });

      $('#btn1').click(function(){
      	$('#hey1').addClass('hey1');
      	$('#fadingEffect').addClass('fadingEffect');
      	$('.text-in-video').css({ "opacity":"1"});
      });

      $('#btn2').click(function(){
      	document.getElementById('videosource').src = "video/cha_04.mp4";
      	document.getElementById('videosource2').src = "video/cha_04.ogg";
      	myVideo3.get(0).play();
      });

       $('#btn3').click(function(){
      	$('#videosource').get(0).src = "video/cha_02.mp4";
      	$('#videosource2').get(0).src = "video/cha_02.ogg";
      	myVideo3.get(0).play();
      });

	});


	
});