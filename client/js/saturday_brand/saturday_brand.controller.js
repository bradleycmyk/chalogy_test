app.controller('SaturdayBrandController', function($scope, $http, $window, $location) {
	$scope.isActive = function (route) {
    	return route == $window.location.href.split("5959/")[1];
  	};

  	var vid = document.getElementById("sat-video1");

	// function setCurTime() {
	//     vid.currentTime=5;
	// }

	// $('#button-1').click(function(){
	// 		$('.sat-brand-video').get(0).play();
	// 		setInterval(checktime, 500);
	// 	});



  	$(document).ready(function(){
		
		// var checktime = function(){
		// 	if( $('.sat-brand-video').get(0).currentTime < 13 )
		// 		console.log($('.sat-brand-video').get(0).currentTime);
		// 	else {
		// 		console.log("done");
		// 	}
		// 	return $('.sat-brand-video').get(0).currentTime;
		// }


		// var addActive = function(){
		// 	if( $('.sat-brand-video').get(0).currentTime < 13 && $('.sat-brand-video').get(0).currentTime < 13 )
		// 		$('.sat-btn').removeClass('sat-active-btn');
		// 		$("#button-2").addClass("sat-active-btn");    
		// 	else {
		// 		console.log("done");
		// 	}
		// };

		// addActive();

		var playfrom2 = function(){
			$('.sat-brand-video').get(0).load();
			$('.sat-brand-video').get(0).currentTime = 3;
			$('.sat-brand-video').get(0).play();
		}

		$('#button-1').click(function(){
			vid.currentTime = 0;
			setTimeout(function () {      
			    $("#button-1").removeClass("sat-active-btn"); 
			    $("#button-2").addClass("sat-active-btn");          
			}, 5000);

			setTimeout(function () {      
			    $("#button-2").removeClass("sat-active-btn"); 
			    $("#button-3").addClass("sat-active-btn");          
			}, 10000);

			setTimeout(function () {      
			    $("#button-3").removeClass("sat-active-btn"); 
			    $("#button-4").addClass("sat-active-btn");          
			}, 15000);

			setTimeout(function () {    
				$("#button-4").removeClass("sat-active-btn");  
			    $("#button-5").addClass("sat-active-btn");          
			}, 20000);
			setTimeout(function () {    
				$("#button-5").removeClass("sat-active-btn");  
			    $("#button-6").addClass("sat-active-btn");          
			}, 25000);
			// setTimeout(function () {    
			// 	$('.sat-brand-video').get(0).pause();       
			// }, 30000);
		});

		$('#button-2').click(function(){
			vid.currentTime = 5;
			setTimeout(function () {      
			    $("#button-2").removeClass("sat-active-btn"); 
			    $("#button-3").addClass("sat-active-btn");          
			}, 5000);

			setTimeout(function () {      
			    $("#button-3").removeClass("sat-active-btn"); 
			    $("#button-4").addClass("sat-active-btn");          
			}, 10000);

			setTimeout(function () {    
				$("#button-4").removeClass("sat-active-btn");  
			    $("#button-5").addClass("sat-active-btn");          
			}, 15000);
			setTimeout(function () {    
				$("#button-5").removeClass("sat-active-btn");  
			    $("#button-6").addClass("sat-active-btn");          
			}, 20000);
			// setTimeout(function () {    
			// 	$('.sat-brand-video').get(0).pause();       
			// }, 25000);
		});

		$('#button-3').click(function(){
			vid.currentTime = 10;
			setTimeout(function () {      
			    $("#button-3").removeClass("sat-active-btn"); 
			    $("#button-4").addClass("sat-active-btn");          
			}, 5000);

			setTimeout(function () {    
				$("#button-4").removeClass("sat-active-btn");  
			    $("#button-5").addClass("sat-active-btn");          
			}, 10000);
			setTimeout(function () {    
				$("#button-5").removeClass("sat-active-btn");  
			    $("#button-6").addClass("sat-active-btn");          
			}, 15000);
			// setTimeout(function () {    
			// 	$('.sat-brand-video').get(0).pause();       
			// }, 20000);
		});

		$('#button-4').click(function(){
			vid.currentTime = 15;
			setTimeout(function () {    
				$("#button-4").removeClass("sat-active-btn");  
			    $("#button-5").addClass("sat-active-btn");          
			}, 5000);
			setTimeout(function () {    
				$("#button-5").removeClass("sat-active-btn");  
			    $("#button-6").addClass("sat-active-btn");          
			}, 10000);
			// setTimeout(function () {    
			// 	$('.sat-brand-video').get(0).pause();       
			// }, 15000);
		});

		$('#button-5').click(function(){
			vid.currentTime = 20;
			setTimeout(function () {    
				$("#button-5").removeClass("sat-active-btn");  
			    $("#button-6").addClass("sat-active-btn");          
			}, 5000);
			// setTimeout(function () {    
			// 	$('.sat-brand-video').get(0).pause();       
			// }, 10000);
		});

		$('#button-6').click(function(){
			vid.currentTime = 25;
			// setTimeout(function () {    
			// 	$('.sat-brand-video').get(0).pause();       
			// }, 5000);
		});

  	});


  	$('.sat-btn').click(function(e) {
	    e.preventDefault();
	    $('.sat-btn').removeClass('sat-active-btn');
	    $(this).addClass('sat-active-btn');
	});


// $(function(){
// $('#currentTime').html($('#video_container').find('video').get(0).load());
// $('#currentTime').html($('#video_container').find('video').get(0).play());
// })

// setInterval(function(){
// $('#currentTime').html($('#video_container').find('video').get(0).currentTime);
// $('#totalTime').html($('#video_container').find('video').get(0).duration);    
// },500)


  	
});

