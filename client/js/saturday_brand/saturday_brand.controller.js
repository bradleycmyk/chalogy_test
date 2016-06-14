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
		
		var checktime = function(){
			if( $('.sat-brand-video').get(0).currentTime < 13 )
				console.log($('.sat-brand-video').get(0).currentTime);
			else {
				console.log("done");
			}
			return $('.sat-brand-video').get(0).currentTime;
		}

		var playfrom2 = function(){
			$('.sat-brand-video').get(0).load();
			$('.sat-brand-video').get(0).currentTime = 3;
			$('.sat-brand-video').get(0).play();
		}

		$('#button-1').click(function(){
			vid.currentTime = 0;
		});

		$('#button-2').click(function(){
			vid.currentTime = 2;
		});

		$('#button-3').click(function(){
			vid.currentTime = 4;
		});

		$('#button-4').click(function(){
			vid.currentTime = 7;
		});

		$('#button-5').click(function(){
			vid.currentTime = 9;
		});

		$('#button-6').click(function(){
			vid.currentTime = 11;
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

