var $animation_elements_slide_in_left = $('.slideInLeft');
var $animation_elements_fade_in = $('.fadeIn');
var $animation_elements_slide_in_down = $('.slideInDown');
var $animation_elements_slide_in_right = $('.slideInRight');
var $animation_elements_lightSpeedInRight = $('.lightSpeedInRight');

var $window = $(window);

$window.on('scroll resize', check_if_in_view_slide_left);
$window.on('scroll resize', check_if_in_view_fade_in);
$window.on('scroll resize', check_if_in_view_slide_in_down);
$window.on('scroll resize', check_if_in_view_slide_in_right);
$window.on('scroll resize', check_if_in_view_lightSpeedInRight);
$window.trigger('scroll');

function check_if_in_view_slide_left() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements_slide_in_left, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animate__animated animate__slideInLeft');
      } else {
        $element.removeClass('animate__animated animate__slideInLeft');
      }
    });
  }

  function check_if_in_view_fade_in() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements_fade_in, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animate__animated animate__zoomIn');
      } else {
        $element.removeClass('animate__animated animate__zoomIn');
      }
    });
  }

  function check_if_in_view_slide_in_down() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements_slide_in_down, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animate__animated animate__slideInDown');
      } else {
        $element.removeClass('animate__animated animate__slideInDown');
      }
    });
  }

  function check_if_in_view_slide_in_right() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements_slide_in_right, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animate__animated animate__slideInRight');
      } else {
        $element.removeClass('animate__animated animate__slideInRight');
      }
    });
  }

  function check_if_in_view_lightSpeedInRight() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements_lightSpeedInRight, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animate__animated animate__lightSpeedInRight');
      } else {
        $element.removeClass('animate__animated animate__lightSpeedInRight');
      }
    });
  }
// $(window).scroll(function(){
//     if($(window).scrollTop() >= $("#about").offset().top + $("#about").height() 
//         || $(window).scrollTop() < $("#about").offset().top - ($("#about").height()/2)) {

//         $('#about-title').removeClass('animate__animated animate__slideInLeft');
//         $('#download-button').removeClass('animate__animated animate__slideInLeft');
//     } else {
//         $('#about-title').addClass('animate__animated animate__slideInLeft');
//         $('#download-button').addClass('animate__animated animate__slideInLeft');
//     }

//     if($(window).scrollTop() >= $("#services").offset().top + $("#services").height() 
//         || $(window).scrollTop() < $("#services").offset().top - ($("#services").height()/2)) {

//         $('#services-card1').removeClass('animate__animated animate__slideInLeft');
//         $('#services-card2').removeClass('animate__animated animate__slideInDown');
//         $('#services-card3').removeClass('animate__animated animate__slideInRight');
//     } else {
//         $('#services-card1').addClass('animate__animated animate__slideInLeft');
//         $('#services-card2').addClass('animate__animated animate__slideInDown');
//         $('#services-card3').addClass('animate__animated animate__slideInRight');
//     }

//     if($(window).scrollTop() >= $("#portfolio").offset().top + $("#portfolio").height() 
//         || $(window).scrollTop() < $("#portfolio").offset().top - ($("#portfolio").height()/2)) {

//         $('.portfolio-card').removeClass('animate__animated animate__zoomIn');
//     } else {
//         $('.portfolio-card').addClass('animate__animated animate__zoomIn');
//     }

//     if($(window).scrollTop() >= $("#contact").offset().top + $("#contact").height() 
//         || $(window).scrollTop() < $("#contact").offset().top - ($("#contact").height()/2)) {

//         $('.social-div').removeClass('animate__animated animate__lightSpeedInRight');
//     } else {
//         $('.social-div').addClass('animate__animated animate__lightSpeedInRight');
//     }
        
// });