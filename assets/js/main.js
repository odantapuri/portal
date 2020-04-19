
!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Toggle .header-scrolled class to #header when page is scrolled
  // $(window).scroll(function() {
  //   // console.log("hjsdfs");
  //   if ($(this).scrollTop() > 100) {
  //     // console.log("djfsdj");
  //     $('#header').addClass('header-scrolled');
  //   } else {
  //     $('#header').removeClass('header-scrolled');
  //   }
  // });

  // if ($(window).scrollTop() > 100) {
  //   $('#header').addClass('header-scrolled');
  // }

  // // Stick the header at top on scroll
  // $("#header").sticky({
  //   topSpacing: 0,
  //   zIndex: '50'
  // });

  // // Real view height for mobile devices
  // if (window.matchMedia("(max-width: 767px)").matches) {
  //   $('#hero').css({
  //     height: $(window).height()
  //   });
  // }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    (index === 0) ?
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") :
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('.carousel-content ').addClass('animated fadeInDown');
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Skills section
  $('.skills-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


  var monthlyTab = $("#monthlyTab");
  var quarterlyTab = $("#quarterlyTab");
  var yearlyTab = $("#yearlyTab");

  $(monthlyTab).on('click', pricingPlans);
  $(quarterlyTab).on('click', pricingPlans);
  $(yearlyTab).on('click', pricingPlans);

  function pricingPlans(e) {
    var monthlyPlan = $("#monthlyPlan");
    var quarterlyPlan = $("#quarterlyPlan");
    var yearlyPlan = $("#yearlyPlan");

    if (e.target.id === "monthlyTab") { //activate monthly tab and section
      $(monthlyTab).addClass("active");
      $(monthlyPlan).addClass("active");
      $(quarterlyTab).removeClass("active");
      $(quarterlyPlan).removeClass("active");
      $(yearlyTab).removeClass("active");
      $(yearlyPlan).removeClass("active");
    }
    else if (e.target.id === "quarterlyTab") { //activate quarterly tab and section
      $(monthlyTab).removeClass("active");
      $(monthlyPlan).removeClass("active");
      $(quarterlyTab).addClass("active");
      $(quarterlyPlan).addClass("active");
      $(yearlyTab).removeClass("active");
      $(yearlyPlan).removeClass("active");
    }
    else {
      $(monthlyTab).removeClass("active");
      $(monthlyPlan).removeClass("active");
      $(quarterlyTab).removeClass("active");
      $(quarterlyPlan).removeClass("active");
      $(yearlyTab).addClass("active");
      $(yearlyPlan).addClass("active");
    }
  }

  var joinFreeClassesResetBtn = $("#joinFreeClassesResetBtn");
  var joinFreeClassesSubmitBtn = $("#joinFreeClassesSubmitBtn");

  $(joinFreeClassesResetBtn).on('click', resetModalForm);
  $(joinFreeClassesSubmitBtn).on('click', submitModalForm);

  function resetModalForm() {
    $("#joinFreeClassesModal #inputName").val('');
    $("#joinFreeClassesModal #inputEmail").val('');
    $("#joinFreeClassesModal #inputPhone").val('');
    $('#joinFreeClassesModal #inputClass').find(":selected").text('Select class');
    $('#joinFreeClassesModal #inputSubject').find(":selected").text('Select subject');
  }

  function submitModalForm() {
    var formInputs = {};
    formInputs.name = $("#joinFreeClassesModal #inputName").val();
    formInputs.email = $("#joinFreeClassesModal #inputEmail").val();
    formInputs.phone = $("#joinFreeClassesModal #inputPhone").val();
    formInputs.class = $('#joinFreeClassesModal #inputClass').find(":selected").text().toUpperCase() === "SELECT CLASS" ? "" : $('#joinFreeClassesModal #inputClass').find(":selected").text();
    formInputs.subject = $('#joinFreeClassesModal #inputSubject').find(":selected").text().toUpperCase() === "SELECT SUBJECT" ? "" : $('#joinFreeClassesModal #inputSubject').find(":selected").text();

    console.log(formInputs)

    resetModalForm();
  }

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);