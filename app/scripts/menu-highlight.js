require(['jquery', 'stickUp'], function($, stickUp) {
  var isIpad = window.matchMedia('only screen and (min-device-width : 768px) and (max-device-width : 1024px)').matches;
  var isIphone = 
    window.matchMedia('only screen and (min-device-width : 320px) and (max-device-width : 480px)').matches || 
    window.matchMedia('only screen and (min-device-width : 320px) and (max-device-width : 568px)').matches ||
    window.matchMedia('only screen and (min-device-width : 375px) and (max-device-width : 667px)').matches ||
    window.matchMedia('only screen and (min-device-width : 414px) and (max-device-width : 736px)').matches;
  var isSmallWindow = window.matchMedia('only screen and (max-width : 992px)').matches;

  if (!isIpad && !isIphone && !isSmallWindow) {
    $('.sidebar-nav.second').stickUp({
      topMargin: 20
    });
  }

  var sections = {},
    _height  = $(window).height(),
    i        = 0;

  // Grab positions of our sections 
  $('.section').each(function(){
    sections[this.id] = $(this).offset().top + 100;
  });

  function updateScroll(self) {
    var pos = self.scrollTop();
    for(i in sections){
      if(sections[i] > pos && sections[i] < pos + _height) {
        //console.log(i);
        $('.sidebar-nav.second .selected').removeClass('selected');
        $('a[href$="#'+i+'"]').addClass('selected');
        return;
      }  
    }
  }

  $(document).scroll(function(){
    updateScroll($(this));
  });

  updateScroll($(document));

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 50
      }, 200, 'swing', function () {
          window.location.hash = target;
      });
  });
});