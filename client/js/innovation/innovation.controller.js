app.controller('InnovationController', function($scope, $http, $window, $location) {

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
      // parallax('inn-four', 0.05, 2255);
      // parallax('inn-five', 0.05, 2370);
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
                  // video.pause();
                  console.log("continue");
              }
      }
  }

  window.addEventListener('scroll', checkScroll, false);
  window.addEventListener('resize', checkScroll, false);

  $(document).ready(function(){
    var myVideo = $('.video-play-pause');

    // if($(window).scrollTop() > 730) {
    //   myVideo.get(0).play();
    // }

    $('.video-center').click(function(){
      if (myVideo.get(0).paused) 
            myVideo.get(0).play();

        else 
            myVideo.get(0).pause(); 
    });

    $('#btn1').click(function(){
      $('.video-container-brand2').css({"display":"none"});
      $('.video-container-brand3').css({"display":"none"});
      $('.video-container-brand4').css({"display":"none"});
      $('.video-container-brand5').css({"display":"none"});
      $('.video-container-brand6').css({"display":"none"});
      $('.video-container-brand7').css({"display":"none"});
      $('.video-container-brand8').css({"display":"none"});

      $('#video-text-1').addClass('fade-in-effect');
      $('.fading-effect').removeClass('fadingEffect');
      $('.fading-effect').addClass('fadingEffect-to-left');
      $('.line-in-video').css({ "opacity":"1"});
      $('.video-container-brand1').css({"display":"block"});
      $('#video1').get(0).load();
      $('#video1').get(0).play();
    });

    $('#btn2').click(function(){
      $('.line-in-video').css({ "opacity":"0"});
      $('.video-container-brand1').css({"display":"none"});
      $('.video-container-brand3').css({"display":"none"});
      $('.video-container-brand4').css({"display":"none"});
      $('.video-container-brand5').css({"display":"none"});
      $('.video-container-brand6').css({"display":"none"});
      $('.video-container-brand7').css({"display":"none"});
      $('.video-container-brand8').css({"display":"none"});

      $('#video-text-2').addClass('fade-in-effect');
      $('.fading-effect').removeClass('fadingEffect-to-left');
      $('.fading-effect').addClass('fadingEffect');
      $('.line-in-video').css({ "opacity":"1"});
      $('.video-container-brand2').css({"display":"block"});
      $('#video2').get(0).load();
      $('#video2').get(0).play();
    });

    $('#btn3').click(function(){
      $('.line-in-video').css({ "opacity":"0"});
      $('.video-container-brand1').css({"display":"none"});
      $('.video-container-brand2').css({"display":"none"});
      $('.video-container-brand4').css({"display":"none"});
      $('.video-container-brand5').css({"display":"none"});
      $('.video-container-brand6').css({"display":"none"});
      $('.video-container-brand7').css({"display":"none"});
      $('.video-container-brand8').css({"display":"none"});

      $('#video-text-3').addClass('fade-in-effect');
      $('.fading-effect').removeClass('fadingEffect');
      $('.fading-effect').addClass('fadingEffect-to-left');
      $('.line-in-video').css({ "opacity":"1"});
      $('.video-container-brand3').css({"display":"block"});
      $('#video3').get(0).load();
      $('#video3').get(0).play();
    });

    $('#btn4').click(function(){
      $('.line-in-video').css({ "opacity":"0"});
      // $('.line-in-video').hide();
      $('.video-container-brand1').css({"display":"none"});
      $('.video-container-brand2').css({"display":"none"});
      $('.video-container-brand3').css({"display":"none"});
      $('.video-container-brand5').css({"display":"none"});
      $('.video-container-brand6').css({"display":"none"});
      $('.video-container-brand7').css({"display":"none"});
      $('.video-container-brand8').css({"display":"none"});

      $('#video-text-4').addClass('fade-in-effect');
      $('.fading-effect').removeClass('fadingEffect-to-left');
      $('.fading-effect').removeClass('fadingEffect-to-top');
      $('.fading-effect').addClass('fadingEffect');
      $('.line-in-video').css({ "opacity":"1"});
      // $('.line-in-video').show();
      $('.video-container-brand4').css({"display":"block"});
      $('#video4').get(0).load();
      $('#video4').get(0).play();
    });

    $('#btn5').click(function(){
      $('.line-in-video').css({ "opacity":"0"});
      $('.video-container-brand1').css({"display":"none"});
      $('.video-container-brand2').css({"display":"none"});
      $('.video-container-brand3').css({"display":"none"});
      $('.video-container-brand4').css({"display":"none"});
      $('.video-container-brand6').css({"display":"none"});
      $('.video-container-brand7').css({"display":"none"});
      $('.video-container-brand8').css({"display":"none"});

      $('#video-text-5').addClass('fade-in-effect');
      $('.fading-effect').removeClass('fadingEffect');
      $('.fading-effect').addClass('fadingEffect-to-left');
      $('.line-in-video').css({ "opacity":"1"});
      $('.video-container-brand5').css({"display":"block"});
      $('#video5').get(0).load();
      $('#video5').get(0).play();
        
    });

    $('#btn6').click(function(){
      $('.line-in-video').css({ "opacity":"0"});
      $('.video-container-brand1').css({"display":"none"});
      $('.video-container-brand2').css({"display":"none"});
      $('.video-container-brand3').css({"display":"none"});
      $('.video-container-brand4').css({"display":"none"});
      $('.video-container-brand5').css({"display":"none"});
      $('.video-container-brand7').css({"display":"none"});
      $('.video-container-brand8').css({"display":"none"});

      $('#video-text-6').addClass('fade-in-effect');
      $('.fading-effect').removeClass('fadingEffect-to-left');
      $('.fading-effect').addClass('fadingEffect');
      $('.line-in-video').css({ "opacity":"1"});
      $('.video-container-brand6').css({"display":"block"});
      $('#video6').get(0).load();
      $('#video6').get(0).play();
    });

    $('#btn7').click(function(){
      $('.line-in-video').css({ "opacity":"0"});
      $('.video-container-brand1').css({"display":"none"});
      $('.video-container-brand2').css({"display":"none"});
      $('.video-container-brand3').css({"display":"none"});
      $('.video-container-brand4').css({"display":"none"});
      $('.video-container-brand5').css({"display":"none"});
      $('.video-container-brand6').css({"display":"none"});
      $('.video-container-brand8').css({"display":"none"});

      $('#video-text-7').addClass('fade-in-effect');
      $('.fading-effect').removeClass('fadingEffect');
      $('.fading-effect').addClass('fadingEffect-to-left');
      $('.line-in-video').css({ "opacity":"1"});
      $('.video-container-brand7').css({"display":"block"});
      $('#video7').get(0).load();
      $('#video7').get(0).play();
    });

    $('#btn8').click(function(){
      $('.line-in-video').css({ "opacity":"0"});
      $('.video-container-brand1').css({"display":"none"});
      $('.video-container-brand2').css({"display":"none"});
      $('.video-container-brand3').css({"display":"none"});
      $('.video-container-brand4').css({"display":"none"});
      $('.video-container-brand5').css({"display":"none"});
      $('.video-container-brand6').css({"display":"none"});
      $('.video-container-brand7').css({"display":"none"});

      $('#video-text-8-1').addClass('fade-in-effect');
      $('#8-1').addClass('fadingEffect-to-top');
      $('#8-2').addClass('fadingEffect');
      $('#8-3').addClass('fadingEffect');
      $('#8-4').addClass('fadingEffect');
      $('#8-5').addClass('fadingEffect-to-left');
      $('#8-6').addClass('fadingEffect-to-left');
      $('#8-7').addClass('fadingEffect-to-left');

      $('.line-in-video').css({ "opacity":"1"});
      $('.video-container-brand8').css({"display":"block"});
      $('#video8').get(0).load();
      $('#video8').get(0).play();
    });

      $('a').click(function () {
        if ($(':animated').length) {
            return false;
        };
    });
  
  })
  
  // adding active class to buttons 
  $('.circle').click(function(e) {
      e.preventDefault(); //prevent the link from being followed
      $('.circle').removeClass('active-btn');
      $(this).addClass('active-btn');
  });
                     
  $scope.text1 = ["Sh-Polypeptide 55", "(PDGA-AA)", "Stimulates healthier looking skin and enhances skin's nautral rejuvenating power."];
  $scope.text2 = ["Rh-Oligopeptide-2", "Strengthens skin's own resurfacing ability, promoting youthful, radiant skin."];
  $scope.text3 = ["sh-Polypeptide 45", "(GM-CSF)", "Anti-inflammatory peptide stimulates healthy skin while minimizing the appearance of fine lines and wrinkles."];
  $scope.text4 = ["RH-Polypeptide 8", "(FGF4)", "Promotes healthy skin while boosting firmness and building resiliency."];
  $scope.text5 = ["EGF Rh-Oligopeptide 1", "Activates revitalization while reinforcing skin's natural barrier to protect the complexion."];
  $scope.text6 = ["Rh-Polypeptide 9", "(VEGF)", "Stimulates youthful rejvenation while protecting the skin and fostering healing."];
  $scope.text7 = ["Rh-Polypeptide 1", "Stimulates healthy skin growth, promoting younger-looking skin"];
  $scope.text8 = ["sh-Polypeptide 45", "(GM-CSF)", "Rh-Oligopeptide-2", "Rh-Polypeptide 9", "(VEGF)", "RH-Polypeptide 8", "(FGF4)", "EGF Rh-Oligopeptide 1", "Sh-Polypeptide 55", "(PDGA-AA)", "Rh-Polypeptide 1"];



});
