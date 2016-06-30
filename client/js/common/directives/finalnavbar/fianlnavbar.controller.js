'use strict'
app.controller('FinalNavBarController', function($scope, $http, AdminFactory, $state, $stateParams) {

	// search 
	$("#callingsearchs1").click(function(){
		$("#testingsearch1").removeClass('fade-out-effect-input').addClass("fade-in-effect-input").focus();

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
	        container.addClass('fade-out-effect-input').removeClass('fade-in-effect-input');
	    }
	});

	// end of search 

	$(document).ready(function(){
		
		// fixed navbar after scrolling !!
		function fixnavbar() {
			$(window).scroll(function () {
			    if( $(window).scrollTop() > $('#fixed-nav-div').offset().top && !($('#fixed-nav-div').hasClass('posi'))) {
			    	$('#fixed-nav-div').addClass('posi');
			    	$("#nav-menu-menu").css({"opacity": "1"});
			    	// $("#nav-menu-menu").removeClass('fade-out-effect-logo').addClass('fade-in-effect-logo');
			    } else if ( $(window).scrollTop() < 120 ){
			    	$('#fixed-nav-div').removeClass('posi');
			    	$("#nav-menu-menu").css({"opacity": "0"});
			    	// $("#nav-menu-menu").addClass('fade-out-effect-logo').removeClass('fade-in-effect-logo');
			    }
			});
		} 
		$(document).on('scroll', fixnavbar);

		
	});
	
});




