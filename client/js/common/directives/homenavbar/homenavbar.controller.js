app.controller('HomeNavBarController', function($scope, $http, $state, $stateParams) {

	$("#callingsearchs").click(function(){
		$("#testingsearch").fadeIn(2000).css("display","inline-block").focus();
		// $(".brand").hide();
		$("#callingsearch").css("margin-left", 10);
		$("#callingsearchs").css("margin-top", -40);

		var text = $("#testingsearch").val();
		if (text == ""){
			console.log("do nothing");
		} else {
        	$state.go("search", {text: text});
		}
		$("#testingsearch").val("");

	});

	$('.dropdown a').focus(function() {
		console.log($(this).siblings());
		$(this).siblings().show();
	})
	.blur(function() {
		$(this).siblings().hide();
	})

	$(document).keypress(function(event) {
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13') {
	    	var text = $("#testingsearch").val();
	    	if (text == ""){
			console.log("do nothing");
			} else {
	        	$state.go("search", {text: text});
			}
			$("#testingsearch").val("");
	    };
	});

	// hide search input when clicking outside it
	$(document).mouseup(function (e)
	{
	    var container = $("#testingsearch");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.css("display", "none");
	        $("#callingsearch").css("margin-left", 158);
	        $("#callingsearchs").css("margin-top", 7);
	        // $(".brand").show();
	    }
	});

	$(document).ready(function(){
		// var tolerancePixel1 = 40;

	    function removenavbar(){
	      // get current browser top and bottom 
	      var scrollTop0 = $(window).scrollTop()

	      var yTopDot11 = 150;
	      // var yTopDot = $("#first-dot").offset().top;
	      var yBottomDot11 = $("#ino-first-dot").height() + yTopDot11;

	      if(scrollTop0 > 120) {
	        $(".navigation-home").css({"display":"none"});
	        $(".navigation").css({"display":"block"});
	  		$(".clean-and-clear").css({"height":"60px"});
	      } else {
	        $(".navigation-home").css({"display":"block"});
	        $(".navigation").css({"display":"none"});
	        $(".clean-and-clear").css({"height":"180px"});
	      }
	    }

        $(document).on('scroll', removenavbar);

	});

});
