'use strict'
app.controller('FinalNavBarController', function($scope, $http, AdminFactory, $state, $stateParams) {

	// search
	$("#callingsearchs1").click(function(){
		$("#testingsearch1").removeClass('fade-out-effect-input').addClass("fade-in-effect-input").focus();
		// $("#testingsearch1").css({"border-bottom":"1px"});

		var text = $("#testingsearch1").val();
		if (text == ""){
			console.log("do nothing");
		} else {
        	$state.go("search", {text: text});
		}
		$("#testingsearch1").val("");

	});

	$("#testingsearch1").blur(function() {
		$("#testingsearch1").addClass('fade-out-effect-input').removeClass("fade-in-effect-input");
	})

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
	        // container.addClass('fade-out-effect-input').removeClass('fade-in-effect-input');
	        // $("#testingsearch1").css({"opacity":"0"});
	        // $("#testingsearch1").css({"border-bottom":"0px"});
	    }
	});

	// end of search

	$(document).ready(function(){

		// fixed navbar after scrolling !!
		function fixnavbar() {
			$(window).scroll(function () {
			    if( $(window).scrollTop() > $('#fixed-nav-div').offset().top && !($('#fixed-nav-div').hasClass('posi'))) {
			    	$(".shift-fix").css({"display":"block"});
			    	$('#fixed-nav-div').addClass('posi');
			    	$("#nav-menu-menu").css({"opacity": "1"});

			    } else if ( $(window).scrollTop() < 120 ){
			    	$(".shift-fix").css({"display":"none"});
			    	$('#fixed-nav-div').removeClass('posi');
			    	$("#nav-menu-menu").css({"opacity": "0"});
			    }
			});
		}

		$(document).on('scroll', fixnavbar);


		$(".third-part-mobile").click(function(e){
			e.preventDefault();
			$("#search-popup").toggleClass('show-popup');
			$('#mobile-search').focus();
		});

		$(".close-button").click(function(e){
			e.preventDefault();
			console.log("getting clicks????");
			// $(this).parent().css("display", "none");
			// $("#search-popup").removeClass("show-popup");
			$(".popup-content-search").hide();
		});

		$('.popup-btn1').click(function(){
			console.log("menu clicked!!!!");
			$(this).toggleClass("x-icon");
		})

	});

	$("#mobile-search").blur(function() {
		// $("#mobile-search").addClass('fade-out-effect-input').removeClass("fade-in-effect-input");
		// $("#mobile-search").fadeIn().fadeOut();
	})

});
