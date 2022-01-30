/*!
 * Smart Finance - The first ever platform powerd by AI
 * @author Dink
 * @version v0.0.9
 * @link https://github.com/dink
 * @license MIT
 */
"use strict";

(function ($) {
  "use strict";
  /* ---------------------------------------------
  Add class after page load
  --------------------------------------------- */

  var pageLoaded = $("body");
  $(window).on('load', function () {
    pageLoaded.addClass("loaded");
  });
  /* ---------------------------------------------
    Preloaded
    --------------------------------------------- */

  $(window).on("load", function () {
    $('.preloader').addClass('loaded');

    if ($('.preloader').hasClass('loaded')) {
      $('.preloader').delay(1200).queue(function () {
        $(this).remove();
      });
    }
  });
  /*----------------------------------
      background image holder
  -----------------------------------*/

  function backgroundHolder() {
    $(".background-image-holder").each(function () {
      var thesrc = $(this).attr('src');
      $(this).parent().css("background-image", "url(" + thesrc + ")");
      $(this).parent().css("background-repeat", "no-repeat");
      $(this).hide();
    });
  }

  backgroundHolder();
  /*----------------------------------
   blog card image height
  -----------------------------------*/

  $(".article .article__thumbnail-image").each(function () {
    var imgsrc = $(this).find(".background-image-holder").height();
    $(this).css("height", imgsrc);
  });
  /* ---------------------------------------------
  Convert Attribute value to CSS
  --------------------------------------------- */

  var convertAttr = $(".jsElement");
  convertAttr.each(function () {
    var dataBGColor = $(this).data('bg-color');
    var dataWidth = $(this).data('width');
    var dataHeight = $(this).data('height');
    var dataProgressHorizon = $(this).data('progress-horizon');
    var dataProgressVertical = $(this).data('progress-vertical');
    var dataTop = $(this).data('top');
    var dataLeft = $(this).data('left');
    var dataPull = $(this).data('pull');
    var dataPush = $(this).data('push');
    $(this).css("background-color", "" + dataBGColor);
    $(this).css("width", "" + dataWidth);
    $(this).css("height", "" + dataHeight);
    $(this).css("width", "" + dataProgressHorizon + "%");
    $(this).css("height", "" + dataProgressVertical + "%");
    $(this).css("top", "" + dataTop + "%");
    $(this).css("left", "" + dataLeft + "%");
    $(this).css("margin-top", "" + dataPull + "px");
    $(this).css("margin-bottom", "" + dataPush + "px");
    $(this).removeAttr("data-bg-color data-width data-height data-progress-horizon data-progress-vertical data-top data-left data-pull data-push");
  });
  /* ---------------------------------------------
  Language dropbown
  --------------------------------------------- */

  function dropdownModule() {
    var $landDropdown = $('.dropdown-module-list');
    $(".dropdown-module__toggler").on('click', function (e) {
      $(this).next(".dropdown-module-list").slideToggle("fast");
      e.stopPropagation();
    });
    $(".dropdown-module__item").on('click', function (e) {
      $landDropdown.hide();
      e.stopPropagation();
    });
    $(".dropdown-module-list").on('click', function (e) {
      e.stopPropagation();
    });
    $("body").on('click', function () {
      $landDropdown.hide();
    });
  }

  dropdownModule();
  /* ---------------------------------------------
  smooth Scroll
  --------------------------------------------- */

  function smoothScroll() {
    $('.nav-link, .smooth-scroll').on('click', function (event) {
      var $anchor = $(this);
      var headerH = '78';
      $('.header').outerHeight();
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
    });
    $.extend($.easing, {
      easeInOutExpo: function easeInOutExpo(t, e, i, n, s) {
        return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i;
      }
    });
  }

  smoothScroll();
  /* ---------------------------------------------
  Equalize Heights
  --------------------------------------------- */

  var matchHeight = function () {
    function init() {
      eventListeners();
      matchHeight();
    }

    function eventListeners() {
      $(window).on('resize', function () {
        matchHeight();
      });
    }

    function matchHeight() {
      var groupName = $('.carosuel-slider--v3 .slide .card');
      var groupHeights = [];
      groupName.css('min-height', 'auto');
      groupName.each(function () {
        groupHeights.push($(this).outerHeight());
      });
      var maxHeight = Math.max.apply(null, groupHeights);
      groupName.css('min-height', maxHeight);
    }

    ;
    return {
      init: init
    };
  }();

  $(document).ready(function () {
    matchHeight.init();
  });
  /* ---------------------------------------------
  Scroll Reveal Animation
  --------------------------------------------- */
  // function reveal() {
  //   window.sr = ScrollReveal();
  //   sr.reveal('[data-animation="true"] .reveal', {
  //     duration: 1000,
  //     delay: 0,
  //     scale: 1,
  //     opacity: .2,
  //     easing: 'ease-in-out',
  //   });
  // }
  // reveal();
  // ScrollReveal (https://github.com/jlmakes/scrollreveal)

  (function reveal() {
    window.sr = ScrollReveal();
    sr.reveal('.reveal', {
      duration: 750,
      distance: '40px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
      // opacity    : .2,
      scale: 1 // viewFactor : 0,

    });
  })();
  /* ---------------------------------------------
  Fixed Footer
  --------------------------------------------- */


  function csselem() {
    $(".height-emulator").css({
      height: jQuery(".footer--fixed").outerHeight(true)
    });
  }

  csselem();
  $(window).resize(function () {
    csselem();
  });
  /* ---------------------------------------------
  token calculator button toggle
  --------------------------------------------- */

  function calculatorBtnToggle() {
    var calculatorBtn = $(".token-calculator__coin");
    calculatorBtn.on("click", function () {
      calculatorBtn.removeClass('token-calculator__coin--is-active');
      $(this).addClass('token-calculator__coin--is-active'); // updating coint name with input target

      var thissrc = $(this).children(".coin-name").data('coin');
      $(".currency-name--target").text(thissrc);
    });
  }

  calculatorBtnToggle();
  /* ---------------------------------------------
  Lightobx
  --------------------------------------------- */

  function lightBox() {
    $('.lightbox').venobox();
  }

  lightBox();
  /* ---------------------------------------------
  Carosuel slider--v1
  --------------------------------------------- */

  $('.carosuel-slider--v1').slick({
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 600,
    pauseOnDotsHover: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-up"></i></button>',
    nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-down"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 488,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  /* ---------------------------------------------
  Clipboard
  --------------------------------------------- */

  var clip = new ClipboardJS('.copyBtn');
  clip.on('success', function (e) {
    $('.copied').show();
    $('.copied').fadeOut(2000);
  });
  /* ---------------------------------------------
  Carosuel slider--v2
  --------------------------------------------- */

  $('.carosuel-slider--v2').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    // autoplay: true,
    // rtl: true,
    adaptiveHeight: true,
    speed: 800,
    pauseOnDotsHover: true,
    prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-up"></i></button>',
    nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-down"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="ri-arrow-left-line"></i></button>',
        nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="ri-arrow-right-line"></i></button>'
      }
    }]
  });
  /* ---------------------------------------------
  Carosuel slider--v3 (Features--v1) Carosuel Slider
  --------------------------------------------- */

  $('.carosuel-slider--v3').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="carosuel-cursor carosuel-arrow--prev"><i class="ri-arrow-left-line"></i></button>',
    nextArrow: '<button type="button" class="carosuel-cursor carosuel-arrow--next"><i class="ri-arrow-right-line"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  $('.asseen-slider--v1').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="carosuel-cursor carosuel-arrow--prev"><i class="ri-arrow-left-line"></i></button>',
    nextArrow: '<button type="button" class="carosuel-cursor carosuel-arrow--next"><i class="ri-arrow-right-line"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  /* ---------------------------------------------
  Carosuel slider--v4 (Upcoming Events--v1) Carosuel Slider
  --------------------------------------------- */

  $('.carosuel-slider--v4').slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="carosuel-cursor carosuel-cursor--dark carosuel-arrow--prev"><i class="ri-arrow-left-line"></i></button>',
    nextArrow: '<button type="button" class="carosuel-cursor carosuel-cursor--dark carosuel-arrow--next"><i class="ri-arrow-right-line"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  /* ---------------------------------------------
  Carosuel slider--v5 (Testimonial--v2) Carosuel Slider
  --------------------------------------------- */

  $('.carosuel-slider--v5').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 800,
    pauseOnDotsHover: true
  });
  /* ---------------------------------------------
  Carosuel slider--v6 (Roadmap--v1) Carosuel Slider
  --------------------------------------------- */

  var carosuelMain = $(".carosuel-slider--v6");
  carosuelMain.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    prevArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev"><i class="ri ri-arrow-up-line"></i></button>',
    nextArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next"><i class="ri ri-arrow-down-line"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        // rtl: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev"><i class="ri ri-arrow-left-line"></i></button>',
        nextArrow: '<button type="button" class="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next"><i class="ri ri-arrow-right-line"></i></button>'
      }
    }]
  }); // Calculate the heighest slide and set a top/bottom margin for other children.

  var carosuelItem = $(".carosuel-slider--v6 .slick-slide");
  var maxHeight = -1;
  carosuelItem.each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  carosuelItem.each(function () {
    if ($(this).height() < maxHeight) {
      $(this).css('margin', Math.ceil((maxHeight - $(this).height()) / 1) + 'px 0');
    }
  }); // append item

  var years = [];
  carosuelItem.each(function () {
    var year = $(this).data("year");
    var dom;

    if ($(this).hasClass("slick-active")) {
      dom = '<li class="h3-font font-w--600 font-mono active">' + year + '</li>';
    } else {
      dom = '<li class="h3-font font-w--600 font-mono">' + year + '</li>';
    }

    if ($.inArray(year, years) == -1) {
      $(".roadmap__year").append(dom);
    }

    years.push(year);
  }); //  toggle class

  carosuelMain.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(document).ready(function () {
      checkWidth(true);
      $(window).resize(function () {
        checkWidth(false);
      });
    });

    function checkWidth(init) {
      // If browser resized, check width again
      if ($(window).width() <= 767) {
        var current_year = $('.slick-active').data('year');
      } else {
        var current_year = $('.slick-active:eq(1)').data('year');
      }

      $(".roadmap__year li").each(function () {
        if ($(this).html() == current_year) {
          $(".roadmap__year li").removeClass('active');
          $(this).addClass("active");
        }
      });
    }
  });
  /* ---------------------------------------------
  Carosuel slider--v7 Carosuel Slider
  --------------------------------------------- */

  $('.carosuel-slider--v7').slick({
    infinite: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-up"></i></button>',
    nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-down"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        prevArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--prev"><i class="icon icon-triangle-left"></i></button>',
        nextArrow: '<button type="button" class="carosuel-triangle carosuel-triangle--next"><i class="icon icon-triangle-right"></i></button>'
      }
    }]
  });
  /* ---------------------------------------------
  Features hover focus
  --------------------------------------------- */

  var jSFocus = $(".jsElementFocus");
  jSFocus.mouseover(function () {
    jSFocus.removeClass("focused");
    $(this).addClass("focused");
  });
  /* ---------------------------------------------
  Sticky Sidebar
  --------------------------------------------- */

  $.scrollIt({
    upKey: 38,
    // key code to navigate to the next section
    downKey: 40,
    // key code to navigate to the previous section
    easing: 'linear',
    // the easing function for animation
    scrollTime: 600,
    // how long (in ms) the animation takes
    activeClass: 'active',
    // class given to the active nav element
    onPageChange: null,
    // function(pageIndex) that is called when page is changed
    topOffset: -95 // offste (in px) for fixed top navigation

  });
  var colors = {
    "presale": "#3260ED",
    "liquidity": "#3290ed",
    "airdrop": "#32bbed",
    "gaming": "#32e4ed",
    "staking": "#8CA8FF",
    "dev": "#7c7af0",
    "listing": "#7af0d1"
  };
  /* ---------------------------------------------
  pie-chart
  --------------------------------------------- */

  if ($("#pie-chart--v1").length > 0) {
    $("#pie-chart--v1").drawDoughnutChart([{
      title: "Token Presale",
      value: 31.48,
      color: colors.presale
    }, {
      title: "Staking & Farming",
      value: 20,
      color: colors.staking
    }, {
      title: "Listing",
      value: 18.41,
      color: colors.listing
    }, {
      title: "Liquidity",
      value: 17.11,
      color: colors.liquidity
    }, {
      title: "Dev Wallet",
      value: 5,
      color: colors.dev
    }, {
      title: "Gaming Tournament",
      value: 5,
      color: colors.gaming
    }, {
      title: "Airdrop",
      value: 3,
      color: colors.airdrop
    }]);
  }

  $('.countdown').countdown('2022/1/24').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime('' // + '<span>%-d</span> day%!d '
    + '<div class="row">' + '<div class="col number">%-D <span class="period">Days</span></div> ' + '<div class="col number">%H <span class="period">Hours</span></div> ' + '<div class="col number">%-M <span class="period">Minutes</span></div> ' + '<div class="col number">%-S <span class="period">Seconds</span></div> ' + '</div>' // + '<span>%H</span> hr '
    // + '<span>%M</span> min '
    // + '<span>%S</span> sec'
    ));
  });
  var barOptions_stacked = {
    tooltips: {
      enabled: true
    },
    hover: {
      animationDuration: 0
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          // fontFamily: "Open Sans Bold', sans-serif",
          fontSize: 14
        },
        scaleLabel: {
          display: false
        },
        gridLines: {},
        stacked: true
      }],
      yAxes: [{
        gridLines: {
          display: false,
          color: "#fff",
          zeroLineColor: "#fff",
          zeroLineWidth: 0
        },
        ticks: {
          // fontFamily: "'Open Sans Bold', sans-serif",
          fontSize: 14
        },
        stacked: true
      }]
    },
    legend: {
      display: false
    },
    animation: {
      onComplete: function onComplete() {
        var chartInstance = this.chart;
        var ctx = chartInstance.ctx;
        ctx.textAlign = "left";
        ctx.font = "12px";
        ctx.fillStyle = "#fff";
        Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          Chart.helpers.each(meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];

            if (i == 0) {
              ctx.fillText(data, 50, bar._model.y + 4);
            } else {
              ctx.fillText(data, bar._model.x - 25, bar._model.y + 4);
            }
          }), this);
        }), this);
      }
    },
    pointLabelFontFamily: "Quadon Extra Bold",
    scaleFontFamily: "Quadon Extra Bold"
  };
  var ctx = document.getElementById("BarChart_1").getContext("2d");
  var chart = document.getElementById('BarChart_1').getContext('2d');
  var data = {
    labels: ["Dec 21", "Feb 22", "Apr 22", "May 22", "June 22", "Aug 22"],
    datasets: [{
      label: 'Presale',
      data: [24000000, 24000000, 24000000, 24000000, 24000000, 24000000],
      backgroundColor: colors.presale // hoverBackgroundColor: "#3260ED",

    }, {
      label: 'Liquidity',
      data: [12936000, 12936000, 12936000, 12936000, 12936000, 12936000],
      backgroundColor: colors.liquidity // hoverBackgroundColor: "#d65ad6",

    }, {
      label: 'Airdrop',
      data: [0, 2310000, 2310000, 2310000, 2310000, 2310000],
      backgroundColor: colors.airdrop // hoverBackgroundColor: "6afff1"

    }, {
      label: 'Gaming',
      data: [0, 0, 3850000, 3850000, 3850000, 3850000],
      backgroundColor: colors.gaming // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      label: 'Staking',
      data: [0, 0, 0, 15400000, 15400000, 15400000],
      backgroundColor: colors.staking // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      label: 'Dev',
      data: [0, 0, 0, 0, 3850000, 3850000],
      backgroundColor: colors.dev // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      label: 'Listing',
      data: [0, 0, 0, 0, 0, 14174000],
      backgroundColor: colors.listing // hoverBackgroundColor: "rgba(0,0,0,0)"

    }]
  };
  var options = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "rgba(255, 255, 255, .5)",
        fontSize: 15
      }
    },
    title: {
      display: false,
      text: 'bar chart'
    },
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
    scales: {
      xAxes: [{
        // barThickness : 35
        stacked: true,
        ticks: {
          fontColor: "rgba(255, 255, 255, 1)",
          fontSize: 16
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          fontColor: "rgba(255, 255, 255, .5)",
          fontSize: 14
        }
      }]
    }
  };
  var chartInstance = new Chart(chart, {
    type: 'bar',
    data: data,
    options: options
  });
})(jQuery); // var myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Dec 21", "Feb 22", "Apr 22", "May 22", "June 22", "Aug 22"],
//     datasets: [
//       {
//         label: "Presale",
//         data: [24000000, 24000000, 24000000, 24000000, 24000000, 24000000],
//         borderRadius: 3,
//         backgroundColor: ["#3260ED"]
//       }, {
//         label: "Liquidity",
//         data: [12936000, 12936000, 12936000, 12936000, 12936000, 12936000],
//         borderRadius: 3,
//         backgroundColor: ["#d65ad6"]
//       }, {
//         label: "Airdrop",
//         data: [0, 2310000, 2310000, 2310000, 2310000, 2310000],
//         borderRadius: 3,
//         backgroundColor: ["#6afff1"]
//       }, {
//         label: "Gaming",
//         data: [0, 0, 3850000, 3850000, 3850000, 3850000],
//         borderRadius: 3,
//         backgroundColor: ["#f23c7c"]
//       }, {
//         label: "Staking",
//         data: [0, 0, 0, 15400000, 15400000, 15400000],
//         borderRadius: 3,
//         backgroundColor: ["#8CA8FF"]
//       }, {
//         label: "Dev",
//         data: [0, 0, 0, 0, 3850000, 3850000],
//         borderRadius: 3,
//         backgroundColor: ["#FFB755"]
//       }, {
//         label: "Listing",
//         data: [0, 0, 0, 0, 0, 14174000],
//         borderRadius: 3,
//         backgroundColor: ["#5cc88b"]
//       }
//     ]
//   },
//   options: {
//     plugins: {
//       legend: {
//         labels: {
//           color: "#FFF",
//           font: {
//             size: 16
//           }
//         }
//       },
//       tooltip: {
//         reverse: true
//       },
//       title: {
//         display: false,
//         text: "Token Release"
//       }
//     },
//     responsive: true,
//     scales: {
//       // x: {
//       //   stacked: true,
//       //   grid: {
//       //     display: false,
//       //     drawBorder: false
//       //   }
//       // },
//       x: { // not 'xAxes: [{' anymore (not an array anymore)
//         ticks: {
//           color: "#FFF", // not 'fontColor:' anymore
//           //fontSize: 14,
//           font: {
//             size: 16 // 'size' now within object 'font {}'
//           },
//           // stepSize: 1,
//           beginAtZero: false
//         },
//         stacked: false,
//         grid: {
//           display: false,
//           drawBorder: false
//         }
//       },
//       y: {
//         ticks: {
//           color: "#FFF",
//           font: {
//             size: 14,
//           },
//           // beginAtZero: true,
//           stacked: false,
//           display: true
//         }
//       },
//     }
//   }
// });