'use strict'
app.controller('AdminController', function($scope, $http, AdminFactory) {

	$scope.submitItem = function(product){
		console.log("product", product);
		AdminFactory.addItem(product).then(function(data){
			console.log("data added to db: ", data);
			$scope.addForm.$setPristine();
			$scope.product = {};
		})
	};

	$scope.allitems = function(){
		AdminFactory.getAllItems().then(function(saturdayData){
            AdminFactory.getAllAurousItems().then(function(aurousData){
            	$scope.allproducts = saturdayData.concat(aurousData);
            	$scope.msg = "welcome";
            })
        });
	};

	$scope.editItem = function(title) {
		console.log("edit function title: ", title);
	};

	$scope.removeItem = function(title) {
		console.log("remove function title: ", title);
		AdminFactory.removeItem(title).then(function(Data){
			// console.log("what's data here are we reaching here?");
			// AdminFactory.removeAurousItem(title).then(function(aurousData){
			// 	console.log("item has been removed !");
			// });
			console.log("returned data: ", data);
		});
	};


	$scope.removeAurousItems = function(title) {
		AdminFactory.removeAurousItem(title).then(function(data){
			console.log("data removed: ", data);
		});
	};



	$scope.msg = "this is msg from AurousBrandController";

	$('#myCarousel').carousel({
	    interval: 5000,
	    cycle: true
	});

	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};



 //  	$(function(){
	//     $(window).scroll(function(){
	//     	var myVideo = $('#video1');
	//     	if($(this).scrollTop() < 800) {
	    		
	//     		myVideo.get(0).play(); 
	//     	}
	//     )}
	// }

	$(document).ready(function(){
		var myVideo = $('#video1');

		$('.overlay').scroll(function(){
			if (myVideo.get(0).paused) 
		        myVideo.get(0).play(); 
		    else 
		        // myVideo.get(0).pause(); 
		    console.log("else");
		});


		$('#playPauseFirst').click(function(){
			var starttime = 0;

			myVideo.get(0).play();
			if(myVideo.get(0).currentTime > 2){
				myVideo.get(0).pause();
				$(this).pause();
			}
		})


		// $('#playPauseFirst').click(function(){
		// 	var starttime = 0;  // start at 2 seconds
		//     var endtime = 1.3;    // stop at 4 seconds

		//     var video = document.getElementById('video1');
		//     video.currentTime = starttime;

		//     //handler should be bound first
		//     video.addEventListener("timeupdate", function() {
		//        if (this.currentTime >= endtime) {
		//             this.pause();
		//         }
		//     }, false);

		//     //suppose that video src has been already set properly
		//     video.load();
		//     video.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
		//     try {
		//         video.currentTime = starttime;
		//     } catch (ex) {
		//         //handle exceptions here
		//     }

		//     // $('#text-testing2').css({'display':'inline-block'});
		// });


		$('#playPauseSecond').click(function(){
			var starttime2 = 1.8;  // start at 2 seconds
		    var endtime2 = 3;    // stop at 4 seconds

		    var video = document.getElementById('video1');
		    video.currentTime = starttime2;

		    //handler should be bound first
		    video.addEventListener("timeupdate", function() {
		       if (this.currentTime >= endtime2) {
		            this.pause();
		        }
		    }, false);

		    //suppose that video src has been already set properly
		    video.load();
		    video.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
		    try {
		        video.currentTime = starttime2;
		    } catch (ex) {
		        //handle exceptions here
		    }

		    $('#text-testing').css({'display':'inline-block'});
		})

		$('#playPauseThird').click(function(){
			var starttime3 = 3.1;  // start at 2 seconds
		    var endtime3 = 4.5;    // stop at 4 seconds

		    var video = document.getElementById('video1');
		    video.currentTime = starttime3;

		    //handler should be bound first
		    video.addEventListener("timeupdate", function() {
		       if (this.currentTime >= endtime3) {
		            this.pause();
		        }
		    }, false);

		    //suppose that video src has been already set properly
		    video.load();
		    video.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
		    try {
		        video.currentTime = starttime3;
		    } catch (ex) {
		        //handle exceptions here
		    }

		    $('#text-testing').css({'display':'inline-block'});
		})

		$('#playPause').click(function(){
			if (myVideo.get(0).paused) 
		        myVideo.get(0).play(); 
		    else 
		        myVideo.get(0).pause(); 
		})


		$('#makeBig').click(function(){
			myVideo.get(0).width = 960;
		})

		$('#makeSmall').click(function(){
			myVideo.get(0).width = 320;
		})

		$('#makeNormal').click(function(){
			myVideo.get(0).width = 620;
		})

	});
	
	function playVideo() {
	    var starttime = 2;  // start at 2 seconds
	    var endtime = 4;    // stop at 4 seconds

	    var video = document.getElementById('player1');

	    //handler should be bound first
	    video.addEventListener("timeupdate", function() {
	       if (this.currentTime >= endtime) {
	            this.pause();
	        }
	    }, false);

	    //suppose that video src has been already set properly
	    video.load();
	    video.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
	    try {
	        video.currentTime = starttime;
	    } catch (ex) {
	        //handle exceptions here
	    }
	}
	


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

	// $(function(){
	//     $(window).scroll(function(){
	//     	if($(this).scrollTop() < 800) {
	//             // $('#logo, #topbar, .cart-label').fadeIn('fast');
	//             $('#parallax  img').css({'position':'relative', 'top':'800px', 'left':'20%'})
	           
	//                 .attr('src','six.png');
	//      	} else if($(this).scrollTop() > 800 && $(this).scrollTop() < 1200) {
	//             // $('#topbar, .cart-label').fadeOut('slow');
	//             $('#parallax  img')
	//             .css({'position':'fixed', 'top':'40%', 'left':'40%'})
	//             .attr('src','six-1.gif');

	//             $('#parallax .one1').css({'display':'inline-block'});
	//             $('#parallax').css({'pointer-events':'none'});
	//             $('.container-animation').css({'pointer-events':'none'});


	            

	//         } else if($(this).scrollTop() > 1200 && $(this).scrollTop() < 1600) {
	//         	$('#parallax img')
	//         	.css({'position':'fixed', 'top':'40%', 'left':'40%'})
	//         	.attr('src', 'six-2.gif');

	//         	$('#parallax.one1').css({'display':'none'});
	//         	$('#parallax.two2').css({'display':'inline-block'});

	//         } else if($(this).scrollTop() > 1600 && $(this).scrollTop() < 2000) {
	//         	$('#parallax img')
	//         	.css({'position':'fixed', 'top':'40%', 'left':'40%'})
	//         	.attr('src', 'six-3.gif');

	//         	$('#parallax.one1').css({'display':'none'});
	//         	$('#parallax.two2').css({'display':'none'});
	//         	$('#parallax.three3').css({'display':'inline-block'});

	//         } else if($(this).scrollTop() > 2000) {
	//         	$('#parallax img')
	//         	.css({'position':'relative'})

	//         	$('#one').css({'display':'none'});
	//         	$('#two').css({'display':'none'});
	//         	$('#three').css({'display':'none'});
	//         }
	
	//     });
	// });
		
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

	// $( "#target" ).scroll(function() {
	//   $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
	// });
});




