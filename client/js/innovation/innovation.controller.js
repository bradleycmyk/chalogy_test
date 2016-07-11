app.controller('InnovationController', function($scope, $http, $window, $location) {
  $scope.isActive = function (route) {
    return route == $window.location.href.split("5959/")[1];
  };
  
  $(document).ready(function(){

    // parallax
    function parallax(page, speed, top) {
      var scrolled = $(window).scrollTop();
      $('.hept-' + page).css('top', (scrolled * speed) + top + 'px');
    }

    $(window).scroll(function(e) {
      parallax('inn-one', 0.7, 283);
      parallax('inn-two', 0.7, 660);
      parallax('inn-three', 0.7, 790);
      parallax('inn-four', 0.5, 1085);
    });

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


    // adding controls attributes to video if screensize is less than 1050px 
    function addControls(){

      var actual_width = window.innerWidth;
      if(actual_width < 1050) {
          var video = document.getElementById('vid1');
          $('#vid1').attr('controls', 'true');
      }
    }
    addControls();
    $(window).on('resize', addControls);

    var effect = function() {
        return $( ".posters" ).fadeIn().delay().fadeOut(2000);
    };

    var changevideo = function() {
      return $("#vid1").fadeIn(5000).delay().fadeOut();
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
        $('#videosource1').attr('src', 'video/cha7es_01.mp4');
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
        $('#videosource1').attr('src', 'video/cha7es_02.mp4');
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
        $('#videosource1').attr('src', 'video/cha7es_03.mp4');
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
    

      $('#image-div').css({"display":"none"});
      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha7es_04.mp4');
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
          $('#videosource1').attr('src', 'video/cha7es_05.mp4');
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
          $('#videosource1').attr('src', 'video/cha7es_06.mp4');
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
          $('#videosource1').attr('src', 'video/cha7es_07.mp4');
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


      $('#image-div').css({"display":"none"});
      $.when(changevideo() ).done(function(){
        $('#videosource1').attr('src', 'video/cha7es_last.mp4');
        $("#vid1").fadeIn(1500);
        $("#vid1").get(0).load();
        $("#vid1").get(0).play();
      })
      
    })

    $(".play-btn1").click(function(){
      $('.circle1').removeClass('active-btn1');
      $('.heptagon1').removeClass('heptagon_bg');
      $(this).removeClass('play_bg');
    })

    // adding active class to buttons 
    $('.circle1').click(function(e) {
      e.preventDefault(); 
      $('.circle1').removeClass('active-btn1');
      $('.play-btn1').addClass('play_bg');
      $('.heptagon1').removeClass('heptagon_bg');
      $(this).addClass('active-btn1');
    });

    $('.heptagon1').click(function(){
      $('.circle1').removeClass('active-btn1');
      $('.play-btn1').addClass('play_bg');
      $(this).addClass('heptagon_bg');
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

