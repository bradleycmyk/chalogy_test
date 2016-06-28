'use strict'

app.controller('InnovationController', function($scope, $http, $window, $location) {
  $scope.isActive = function (route) {
    return route == $window.location.href.split("5959/")[1];
  };


  // play video 

  // var videos = document.getElementsByTagName("video");
  // var fraction = 0.99;

  // function checkScroll() {

  //     for(var i = 0; i < videos.length; i++) {
  //         var video = videos[i];

  //         var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
  //             b = y + h, //bottom
  //             visibleX, visibleY, visible;

  //             visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
  //             visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

  //             visible = visibleX * visibleY / (w * h);

  //             if (visible > fraction) {
  //                 video.play();
  //             } else {
  //                 video.pause();
  //             }
  //     }
  // }

  // window.addEventListener('scroll', checkScroll, false);
  // window.addEventListener('resize', checkScroll, false);



  
  $(document).ready(function(){

    var media = $('video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        //if ($(window).scrollTop() > $(window).height() - 10) {
        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });

        //}
    }
    $(document).on('scroll', checkMedia);


    // scrolling to next div!!!
    var delay = false;

    $('#innovation').on('mousewheel DOMMouseScroll', function(event) {
      event.preventDefault();
      if(delay) return;

      delay = true;
      setTimeout(function(){delay = false},200)

      var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    
      var a= document.getElementsByClassName('test');
      if(wd < 0) {
        for(var i = 0 ; i < a.length ; i++) {
          var t = a[i].getClientRects()[0].top;
          if(t >= 40) break;
        }
      }
      else {
        for(var i = a.length-1 ; i >= 0 ; i--) {
          var t = a[i].getClientRects()[0].top;
          if(t < -20) break;
        }
      }
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      });
    });


    var effect = function() {
        return $( ".posters" ).fadeIn().delay().fadeOut(2000);
    };

    var changevideo = function() {
      return $("#vid1").fadeIn().delay().fadeOut();
    }


    $('#play1').click(function(){

      $(".v-one").css({"display":"none"});
      $(".v-two").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-five").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-seven").css({"display":"none"});
      $(".v-eight").css({"display":"none"});

      // $("#vid1").css({"display":"block"});
      // $("#vid1").get(0).load();
      // $("#vid1").get(0).play();
      // $('#image-div').css({"display":"none"});

      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha7es_full.mp4');
        $("#vid1").fadeIn(2000);
        $("#vid1").get(0).load();
        $("#vid1").get(0).play();
      })
    });
      
    $("#btn1-1").click(function(){
      $(".v-two").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-five").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-seven").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      $(".v-one").css({"display":"block"});
      
      $('.line-in-video').css({ "opacity":"0"});
      $('#image-div').css({"display":"none"});
      $('#video-text-1-1').addClass('fade-in-effect');
          $('.fading-effect').removeClass('fadingEffect');
          $('.fading-effect').addClass('fadingEffect-to-left');
          $('.line-in-video').css({ "opacity":"1"});

      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha_01.mp4');
        $("#vid1").fadeIn(1500);
        $("#vid1").get(0).load();
        $("#vid1").get(0).play();
      })
    })

    $("#btn2-1").click(function(){
      $(".v-one").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-five").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-seven").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      $(".v-two").css({"display":"block"});

      $('.line-in-video').css({ "opacity":"0"});
      $('#image-div').css({"display":"none"});
      $('#video-text-2-2').addClass('fade-in-effect');
          $('.fading-effect').removeClass('fadingEffect-to-left');
          $('.fading-effect').addClass('fadingEffect');
          $('.line-in-video').css({ "opacity":"1"});
      

      $('#image-div').css({"display":"none"});
      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha_02.mp4');
        $("#vid1").fadeIn(1500);
        $("#vid1").get(0).load();
        $("#vid1").get(0).play();
      })

    })
    
    $("#btn3-1").click(function(){
      $(".v-one").css({"display":"none"});
      $(".v-two").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-five").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-seven").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      $(".v-three").css({"display":"block"});

      $('.line-in-video').css({ "opacity":"0"});
      $('#image-div').css({"display":"none"});
      $('#video-text-3-3').addClass('fade-in-effect');
          $('.fading-effect').removeClass('fadingEffect');
          $('.fading-effect').addClass('fadingEffect-to-left');
          $('.line-in-video').css({ "opacity":"1"});
      
      $('#image-div').css({"display":"none"});
      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha_03.mp4');
        $("#vid1").fadeIn(1500);
        $("#vid1").get(0).load();
        $("#vid1").get(0).play();
      })
    })

    $("#btn4-1").click(function(){
      $(".v-one").css({"display":"none"});
      $(".v-two").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-five").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-seven").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      // $(".v-four").css({"display":"block"});

      // $('.line-in-video').css({ "opacity":"0"});
      // $('#image-div').css({"display":"none"});
      // $('#video-text-3-3').addClass('fade-in-effect');
   //       $('.fading-effect').removeClass('fadingEffect');
   //       $('.fading-effect').addClass('fadingEffect-to-left');
   //       $('.line-in-video').css({ "opacity":"1"});

      $('#image-div').css({"display":"none"});
      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha7es_4th.mp4');
        $("#vid1").fadeIn(1500);
        $("#vid1").get(0).load();
        $("#vid1").get(0).play();
      })
    })

    $("#btn5-1").click(function(){
      $(".v-one").css({"display":"none"});
      $(".v-two").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-seven").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      $(".v-five").css({"display":"block"});

      $('.line-in-video').css({ "opacity":"0"});
      $('#image-div').css({"display":"none"});
      $('#video-text-5-5').addClass('fade-in-effect');
          $('.fading-effect').removeClass('fadingEffect');
          $('.fading-effect').addClass('fadingEffect-to-left');
          $('.line-in-video').css({ "opacity":"1"});

      $('#image-div').css({"display":"none"});
        $.when(changevideo() ).done(function(){
          $('#videosource1').attr('src', 'video/cha_05.mp4');
          $("#vid1").fadeIn(1500);
          $("#vid1").get(0).load();
          $("#vid1").get(0).play();
      })

      
    })

    $("#btn6-1").click(function(){
      $(".v-one").css({"display":"none"});
      $(".v-two").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-five").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-seven").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      $('#image-div').css({"display":"none"});
        $.when(changevideo() ).done(function(){
          $('#videosource1').attr('src', 'video/cha7es_6th.mp4');
          $("#vid1").fadeIn(1500);
          $("#vid1").get(0).load();
          $("#vid1").get(0).play();
      })
    })

    $("#btn7-1").click(function(){
      $(".v-one").css({"display":"none"});
      $(".v-two").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-five").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      $(".v-seven").css({"display":"block"});

      $('.line-in-video').css({ "opacity":"0"});
      $('#image-div').css({"display":"none"});
      $('#video-text-7-7').addClass('fade-in-effect');
          $('.fading-effect').removeClass('fadingEffect');
          $('.fading-effect').addClass('fadingEffect-to-left');
          $('.line-in-video').css({ "opacity":"1"});

      $('#image-div').css({"display":"none"});
        $.when(changevideo() ).done(function(){
          $('#videosource1').attr('src', 'video/cha_07.mp4');
          $("#vid1").fadeIn(1500);
          $("#vid1").get(0).load();
          $("#vid1").get(0).play();
      })
    })

    $("#btn8-1").click(function(){
      $(".v-one").css({"display":"none"});
      $(".v-two").css({"display":"none"});
      $(".v-three").css({"display":"none"});
      $(".v-four").css({"display":"none"});
      $(".v-fix").css({"display":"none"});
      $(".v-six").css({"display":"none"});
      $(".v-eight").css({"display":"none"});
      
      $(".v-seven").css({"display":"none"});

      // $("#vid1").css({"display":"none"});
      // $('#image-div').css({"display":"block"});
      // $.when(effect() ).done(function(){
      //  $('#video-poster').attr('src', 'video/poster-1.png')
      //  $(".posters").fadeIn();
      // })

      $('#image-div').css({"display":"none"});
      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha7es_last.mp4');
        $("#vid1").fadeIn(1500);
        $("#vid1").get(0).load();
        $("#vid1").get(0).play();
      })
      
    })


    // adding active class to buttons 
    $('.circle').click(function(e) {
      e.preventDefault(); 
      $('.circle').removeClass('active-btn');
      $(this).addClass('active-btn');
    });
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

