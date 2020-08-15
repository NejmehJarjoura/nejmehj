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
        $element.addClass('animate__animated animate__fadeInDown');
      } else {
        $element.removeClass('animate__animated animate__fadeInDown');
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