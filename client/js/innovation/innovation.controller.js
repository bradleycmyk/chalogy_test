'use strict'

app.controller('InnovationController', function($scope, $http, $window, $location) {
  $scope.isActive = function (route) {
    return route == $window.location.href.split("5959/")[1];
  };
  
  $(document).ready(function(){

    // video plays when it's visible
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


    // page indicator!! 

    // var tolerancePixel1 = 40;

    // function activePage1(){
    //   // get current browser top and bottom 
    //   var scrollTop11 = $(window).scrollTop() + tolerancePixel1;
    //   var scrollBottom11 = $(window).scrollTop() + $(window).height() - tolerancePixel1;

    //   var yTopDot11 = 150;
    //   // var yTopDot = $("#first-dot").offset().top;
    //   var yBottomDot11 = $("#ino-first-dot").height() + yTopDot11;

    //   if(scrollTop11 < yBottomDot11 && scrollBottom11 > yTopDot11) {
    //     $("#ino-firstp").addClass("active-page");
    //   } else {
    //     $("#ino-firstp").removeClass("active-page");
    //     // console.log("nothing happens");
    //   }
    // }

    // function activePage2(){
    //   // get current browser top and bottom 
    //   var scrollTop22 = $(window).scrollTop() + tolerancePixel1;
    //   var scrollBottom22 = $(window).scrollTop() + $(window).height() - tolerancePixel1;

    //   // var yTopDot22 = $("#ino-second-dot").offset().top;
    //   var yTopDot22 = document.getElementById("ino-second-dot").offsetTop;
    //   var yBottomDot22 = $("#ino-second-dot").height() + yTopDot22;

    //   if(scrollTop22 < yBottomDot22 && scrollBottom22 > yTopDot22) {
    //     $("#ino-secondp").addClass("active-page");
    //   } else {
    //     $("#ino-secondp").removeClass("active-page");
    //     // console.log("nothing happens");
    //   }
    // }

    // function activePage3(){
    //   // get current browser top and bottom 
    //   var scrollTop33 = $(window).scrollTop() + tolerancePixel1;
    //   var scrollBottom33 = $(window).scrollTop() + $(window).height() - tolerancePixel1;

    //   var yTopDot33 = $("#ino-third-dot").offset().top;
    //   var yBottomDot33 = $("#ino-third-dot").height() + yTopDot33;

    //   if(scrollTop33 < yBottomDot33 && scrollBottom33 > yTopDot33) {
    //     $("#ino-thirdp").addClass("active-page");
    //   } else {
    //     $("#ino-thirdp").removeClass("active-page");
    //     // console.log("nothing happens");
    //   }
    // }

    // $(document).on('scroll', activePage1);
    // $(document).on('scroll', activePage2);
    // $(document).on('scroll', activePage3);

    // // end of active page function 

    // // smooth scroll to next page on click (page indicators)

    // $(document).on("click", "#ino-firstp", function(){
    //   $('html,body').animate({
    //         scrollTop: $("#ino-firstsection").offset().top},
    //         'slow');
    // });
    // $("#ino-secondp").click(function() {
    //     $('html,body').animate({
    //         scrollTop: $("#ino-secondsec").offset().top},
    //         'slow');
    // });
    // $("#ino-thirdp").click(function() {
    //     $('html,body').animate({
    //         scrollTop: $("#ino-thirdsec").offset().top},
    //         'slow');
    // });


    // // scrolling to next div!!!
    // var delay = false;

    // $('#innovation').on('mousewheel DOMMouseScroll', function(event) {
    //   event.preventDefault();
    //   if(delay) return;

    //   delay = true;
    //   setTimeout(function(){delay = false},200)

    //   var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    //   var a= document.getElementsByClassName('test');
    //   if(wd < 0) {
    //     for(var i = 0 ; i < a.length ; i++) {
    //       var t = a[i].getClientRects()[0].top;
    //       if(t >= 40) break;
    //     }
    //   }
    //   else {
    //     for(var i = a.length-1 ; i >= 0 ; i--) {
    //       var t = a[i].getClientRects()[0].top;
    //       if(t < -20) break;
    //     }
    //   }
    //   $('html,body').animate({
    //     scrollTop: a[i].offsetTop
    //   },1000);
    // });


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

    $(".play-btn").click(function(){
      $('.circle').removeClass('active-btn');
      $(this).addClass('active-btn');
    })

    // adding active class to buttons 
    $('.circle').click(function(e) {
      e.preventDefault(); 
      $('.circle').removeClass('active-btn');
      $('.play-btn').removeClass('active-btn');
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

