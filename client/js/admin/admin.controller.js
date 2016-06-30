'use strict'
app.controller('AdminController', function($scope, $http, AdminFactory, $state, $stateParams) {

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


	// search 

	$("#callingsearchs1").click(function(){
		// $("#testingsearch1").fadeIn(2000).css("display","inline-block").focus();
		$("#testingsearch1").removeClass('fade-out-effect-input').addClass("fade-in-effect-input").focus();
		// $(".brand").hide();
		// $("#callingsearch1").css("margin-left", 10);
		// $("#callingsearchs1").css("margin-top", -40);

		var text = $("#testingsearch1").val();
		if (text == ""){
			console.log("do nothing");
		} else {
        	$state.go("search", {text: text});
		}
		$("#testingsearch1").val("");

	});

	$(document).keypress(function(event) {
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13') {
	    	var text = $("#testingsearch1").val();
	    	if (text == ""){
			console.log("do nothing");
			} else {
	        	$state.go("search", {text: text});
			}
			$("#testingsearch1").val("");
	    };
	});

	// hide search input when clicking outside it
	$(document).mouseup(function (e)
	{
	    var container = $("#testingsearch1");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        // container.css("display", "none");
	        container.addClass('fade-out-effect-input').removeClass('fade-in-effect-input');

	        // $("#callingsearch1").css("margin-left", 158);
	        // $("#callingsearchs1").css("margin-top", 6);
	        // $(".brand").show();
	    }
	});

	// end of search 

	$(document).ready(function(){
		
		// fixed navbar after scrolling !!
		function fixnavbar() {
			$(window).scroll(function () {
			    if( $(window).scrollTop() > $('#fixed-nav-div').offset().top && !($('#fixed-nav-div').hasClass('posi'))) {
			    	$('#fixed-nav-div').addClass('posi');
			    	$("#nav-menu-menu").removeClass('fade-out-effect-logo').addClass('fade-in-effect-logo');
			    } else if ( $(window).scrollTop() < 120 ){
			    	$('#fixed-nav-div').removeClass('posi');
			    	$("#nav-menu-menu").addClass('fade-out-effect-logo').removeClass('fade-in-effect-logo');
			    	// $("#nav-menu-menu").animate({ opacity: 0}, 2000, "linear");
			    }
			});
		} 
		$(document).on('scroll', fixnavbar);




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


		
	});
	

});




