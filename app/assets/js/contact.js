  var pathname;
  $(".global__nav .contact").on('click', function(){
    $("body").toggleClass("contact__open");
    var btn = $('.global__nav .contact');
    var left = btn.offset().left + btn.width()/2;
    var top = btn.offset().top + btn.height()/2;
    $(".global__contact--animation").css('margin-left', left);
    $(".global__contact--animation").css('margin-top', top);
    autosize($('#contact__message'));
    pathname = window.location.pathname;
    window.history.replaceState({}, '', '/contact/');
  });

  $(".global__contact .close").on("click", function() {
      $("body").toggleClass("contact__open");
      if (pathname == null) {
        window.history.replaceState({}, '', '/');
      } else {
        window.history.replaceState({}, '', pathname);
      }
  });

  $('.global__contact .field').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });