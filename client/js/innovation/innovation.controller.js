app.controller('InnovationController', function($scope, $http, $window, $location) {

  	var currentUrl = $window.location.href;
	$scope.url = currentUrl;

  // for carousel autoplay
  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true
  });


    $scope.isActive = function (route) {
	   return route == $window.location.href.split("5959/")[1];
	};

  $('document').ready(function() {
    function parallax(page, speed, top) {
      var scrolled = $(window).scrollTop();
      $('.hept-' + page).css('top', (scrolled * speed) + top + 'px');
    }

    $(window).scroll(function(e) {
      parallax('inn-one', 0.7, 120);
      parallax('inn-two', 0.6, 215);
      parallax('inn-three', 0.5, 725);
      parallax('inn-four', 0.1, 2255);
      parallax('inn-five', 0.05, 2370);
    });
  })


  // play video when it's 99% visible 

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
    var myVideo = $('#video1');

    $('.video-center').click(function(){
      if (myVideo.get(0).paused) 
            myVideo.get(0).play(); 
        else 
            myVideo.get(0).pause(); 
    })
  })



});
