app.controller('NavBarController', function($scope, $http, $state, $stateParams) {

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
	        $("#callingsearchs").css("margin-top", 4);
	        // $(".brand").show();
	    }
	});

	$('li a').click(function(e){
		e.preventDefault();
		$('li a').removeClass('selected');
		$(this).addClass('selected');
	});

});
