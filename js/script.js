function include(scriptUrl) {
  document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/**
 * attachFormValidator
 * @description  attach form validation to elements
 */
// function attachFormValidator(elements) {
//   for (var i = 0; i < elements.length; i++) {
//     var o = $(elements[i]), v;
//     o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
//     v = o.parent().find(".form-validation");
//     if (v.is(":last-child")) {
//       o.addClass("form-control-last-child");
//     }
//   }

//   elements
//     .on('input change propertychange blur', function (e) {
//       var $this = $(this), results;

//       if (e.type != "blur") {
//         if (!$this.parent().hasClass("has-error")) {
//           return;
//         }
//       }

//       if ($this.parents('.rd-mailform').hasClass('success')) {
//         return;
//       }

//       if ((results = $this.regula('validate')).length) {
//         for (i = 0; i < results.length; i++) {
//           $this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
//         }
//       } else {
//         $this.siblings(".form-validation").text("").parent().removeClass("has-error")
//       }
//     })
//     .regula('bind');
// }

/**
 * isValidated
 * @description  check if all elemnts pass validation
 */
// function isValidated(elements) {
//   var results, errors = 0;
//   if (elements.length) {
//     for (j = 0; j < elements.length; j++) {

//       var $input = $(elements[j]);

//       if ((results = $input.regula('validate')).length) {
//         for (k = 0; k < results.length; k++) {
//           errors++;
//           $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
//         }
//       } else {
//         $input.siblings(".form-validation").text("").parent().removeClass("has-error")
//       }
//     }

//     return errors == 0;
//   }
//   return true;
// }

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* ToTop
 ========================================================*/
;
(function ($) {
  var o = $('html');
  if (o.hasClass('desktop')) {
    include('js/jquery.ui.totop.js');

    $(document).ready(function () {
      $().UItoTop({easingType: 'easeOutQuart'});
    });
  }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
  var o = $('[data-equal-group]');
  if (o.length > 0) {
    include('js/jquery.equalheights.js');
  }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
// ;
// (function ($) {
//   var o = $('html');
//   if (o.hasClass('desktop')) {
//     include('js/jquery.mousewheel.min.js');
//     include('js/jquery.simplr.smoothscroll.min.js');

//     $(document).ready(function () {
//       $.srSmoothscroll({
//         step: 150,
//         speed: 800
//       });
//     });
//   }
// })(jQuery);

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
  $("#copyright-year").text((new Date).getFullYear());
});

/* WOW
 ========================================================*/
;
(function ($) {
  var o = $('html');

  if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
    if (o.hasClass('desktop')) {
      include('js/wow.js');

      $(document).ready(function () {
        new WOW().init();
      });
    }
  }
})(jQuery);

/* Unveil
 ========================================================*/
;
(function ($) {
  var o = $('.lazy-img img');

  if (o.length > 0) {
    include('js/jquery.unveil.js');

    $(document).ready(function () {
      $(o).unveil(0, function () {
        if (isIE() && isIE() < 9) {
          $(this).load().addClass("lazy-loaded");
        } else {
          $(this).load(function () {
            $(this).addClass("lazy-loaded");
          })
        }
      });
    });

    $(window).load(function () {
      $(window).trigger('lookup.unveil');
    });

  }
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
  // IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
    ua = navigator.userAgent,

    gestureStart = function () {
      viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
    },

    scaleFix = function () {
      if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.addEventListener("gesturestart", gestureStart, false);
      }
    };

  scaleFix();
  // Menu Android
  if (window.orientation != undefined) {
    var regM = /ipod|ipad|iphone/gi,
      result = ua.match(regM);
    if (!result) {
      $('.sf-menus li').each(function () {
        if ($(">ul", this)[0]) {
          $(">a", this).toggle(
            function () {
              return false;
            },
            function () {
              window.location.href = $(this).attr("href");
            }
          );
        }
      })
    }
  }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
  regV = /ipod|ipad|iphone/gi,
  result = ua.match(regV),
  userScale = "";
if (!result) {
  userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');




/**
 * Regula
 * @description Enables Regula plugin
 */
;
(function ($) {
  var o = $("[data-constraints]");
  if (o.length > 0) {
    include('js/regula.js');
    $(document).ready(function () {
      attachFormValidator(o);
    });
  }
})(jQuery);


/**
 * RD Input Label
 * @description Enables RD Input Label Plugin
 */
;
(function ($) {
  var rdInputLabel = $(".form-label");
  if (rdInputLabel.length > 0) {
    include('js/rd-input-label.js');
    $(document).ready(function () {
      rdInputLabel.RDInputLabel();
    });
  }
})(jQuery);

;
(function ($) {
  var rdMailForm = $(".rd-mailform");
  if (rdMailForm.length > 0) {
    include('js/rd-mailform.js');
    $(document).ready(function () {
      var i, j, k,
        msg = {
          'MF000': 'Successfully sent!',
          'MF001': 'Recipients are not set!',
          'MF002': 'Form will not work locally!',
          'MF003': 'Please, define email field in your form!',
          'MF004': 'Please, define type of your form!',
          'MF254': 'Something went wrong with PHPMailer!',
          'MF255': 'Aw, snap! Something went wrong.'
        };

      for (i = 0; i < rdMailForm.length; i++) {
        var $form = $(rdMailForm[i]);

        $form.attr('novalidate', 'novalidate').ajaxForm({
          data: {
            "form-type": $form.attr("data-form-type") || "contact",
            "counter": i
          },
          beforeSubmit: function () {
            var form = $(rdMailForm[this.extraData.counter]);
            var inputs = form.find("[data-constraints]");
            if (isValidated(inputs)) {
              var output = $("#" + form.attr("data-form-output"));

              if (output.hasClass("snackbars")) {
                output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
                output.addClass("active");
              }
            } else {
              return false;
            }
          },
          error: function (result) {
            var output = $("#" + $(rdMailForm[this.extraData.counter]).attr("data-form-output"));
            output.text(msg[result]);
          },
          success: function (result) {
            var form = $(rdMailForm[this.extraData.counter]),
              output = $("#" + form.attr("data-form-output")),
              $select = $form.find('select');

            // Clear select2 after submit form
            if ($select.length) {
              for (j = 0; j < $select.length; j++) {
                var $selectitem = $($select[j]);
                $selectitem.select2('val', null);
              }
            }

            form.addClass('success');
            result = result.length == 5 ? result : 'MF255';
            output.text(msg[result]);

            if (result === "MF000") {
              if (output.hasClass("snackbars")) {
                output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
              }
              output.addClass("success active");
            } else {
              if (output.hasClass("snackbars")) {
                output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
              }
              output.addClass("error active");
            }

            form.clearForm();
            form.find('input, textarea').blur();

            setTimeout(function () {
              output.removeClass("active error success");
              form.removeClass('success');
            }, 5000);
          }
        });
      }
    });
  }
})(jQuery);


/* Camera
 ========================================================*/
;
(function ($) {
  var o = $('#camera');
  if (o.length > 0) {
    if (!(isIE() && (isIE() > 9))) {
      include('js/jquery.mobile.customized.min.js');
    }

    include('js/camera.js');

    $(document).ready(function () {
      o.camera({
        autoAdvance: true,
        height: '40.9375%',
        minHeight: '300px',
        pagination: false,
        thumbnails: false,
        playPause: false,
        hover: false,
        loader: 'none',
        navigation: true,
        navigationHover: false,
        mobileNavHover: false,
        fx: 'simpleFade',

      })
    });
  }
})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
  var o = $('.thumb');
  if (o.length > 0) {
    include('js/jquery.fancybox.js');
    include('js/jquery.fancybox-media.js');
    $(document).ready(function () {
      o.fancybox();
    });
  }
})(jQuery);

/* VIDE
 ========================================================*/
;
(function ($) {
  var o = $('.vide');
  if (o.length > 0) {
    include('js/jquery.vide.js');


  }
})(jQuery);

/* Owl Carousel
 ========================================================*/
;
(function ($) {
  var o = $('.owl-carousel');
  if (o.length > 0) {
    include('js/owl.carousel.min.js');
    $(document).ready(function () {
      o.owlCarousel({
        margin: 30,
        autoplay: true,
        loop: true,
        items: 1,
        smartSpeed: 450,
        dots: true,
        dotsEach: 1,
        nav: false
      });
    });
  }
})(jQuery);

/* Parallax
 ========================================================*/
;
(function ($) {
  var o = $('.parallax');
  if (o.length > 0 && $('html').hasClass('desktop')) {
    include('js/jquery.rd-parallax.js');
  }
})(jQuery);



