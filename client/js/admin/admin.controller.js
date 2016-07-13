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
			console.log("returned data: ", data);
		});
	};

	$scope.removeAurousItems = function(title) {
		AdminFactory.removeAurousItem(title).then(function(data){
			console.log("data removed: ", data);
		});
	};

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
