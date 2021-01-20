

AOS.init({
    acnhorPlacement: 'top-bottom',
    duration: 700
});
$(document).ready(() => {
    $('input[type="tel"]').mask('+7 (999) 999-99-99');

    // Модальные окна
    var overlay = $(".overlay"),
        modal = $(".modal"),
        modalClose = $(".modal__close"),
        modalOpen = $(".modal__open");

    overlay.click(function (e) {
        if ($(e.target).closest(".modal").length == 0) {
            $('body').removeClass('my-body-noscroll-class');
            $(this).fadeOut();
            modal.fadeOut();
            $('.map').find('iframe').remove();
        }
    });

    modalClose.click(function () {
        $('body').removeClass('my-body-noscroll-class');
        overlay.fadeOut();
        modal.fadeOut();
        $('.map').find('iframe').remove();
    });

    var svetlana = 0;
    var internat = 0;
    var perelet = 0;

    function startSvetlana() {
        if(svetlana == 0) {
            console.log('work sv');
            $('.okno__left .svetlana_slider').slick({
                dots: true,
                slidesToShow: 1,
                // arrows: false,
                // autoplay: true,
                // autoplaySpeed: 5000,
                slidesToScroll: 1,
            });

            if ($(window).width() > '767'){
                $('.desktop__content .svetlana_slider').slick({
                    infinite: true,
                    dots: false,
                    slidesToShow: 1,
                    prevArrow: '.svetlana_left',
                    nextArrow: '.svetlana_right',
                    slidesToScroll: 1,
                });
            } else {
                $('.phone__content .svetlana_slider').slick({
                    infinite: true,
                    dots: false,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    prevArrow: '.svetlana_left',
                    nextArrow: '.svetlana_right',
                    slidesToScroll: 1,
                });
            }
        }
        $('.okno__left .svetlana_slider').slick('refresh');
        if ($(window).width() > '767'){
            $('.desktop__content .svetlana_slider').slick('refresh');
        } else {
            $('.phone__content .svetlana_slider').slick('refresh');
        }
   }

   function startinternat() {
        if(internat == 0) {
            console.log('work in');
            $('.okno__left .internat_slider').slick({
                dots: true,
                slidesToShow: 1,
                // arrows: false,
                // autoplay: true,
                // autoplaySpeed: 5000,
                slidesToScroll: 1,
            });

            if ($(window).width() > '767'){
                $('.desktop__content .internat_slider').slick({
                    infinite: true,
                    dots: false,
                    slidesToShow: 1,
                    prevArrow: '.internat_left',
                    nextArrow: '.internat_right',
                    slidesToScroll: 1,
                });
            } else {
                $('.phone__content .internat_slider').slick({
                    infinite: true,
                    dots: false,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    prevArrow: '.internat_left',
                    nextArrow: '.internat_right',
                    slidesToScroll: 1,
                });
            }
        }
        $('.okno__left .internat_slider').slick('refresh');
        if ($(window).width() > '767'){
            $('.desktop__content .internat_slider').slick('refresh');
        } else {
            $('.phone__content .internat_slider').slick('refresh');
        }
    }

    function startPerelet() {
        if(perelet == 0) {
            console.log('work pere');
            $('.okno__left .perelet_slider').slick({
                dots: true,
                slidesToShow: 1,
                // arrows: false,
                // autoplay: true,
                // autoplaySpeed: 5000,
                slidesToScroll: 1,
            });

            if ($(window).width() > '767'){
                $('.desktop__content .perelet_slider').slick({
                    infinite: true,
                    dots: false,
                    slidesToShow: 1,
                    prevArrow: '.perelet_left',
                    nextArrow: '.perelet_right',
                    slidesToScroll: 1,
                });
            } else {
                $('.phone__content .perelet_slider').slick({
                    infinite: true,
                    dots: false,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    prevArrow: '.perelet_left',
                    nextArrow: '.perelet_right',
                    slidesToScroll: 1,
                });
            }
        }
        $('.okno__left .perelet_slider').slick('refresh');
        if ($(window).width() > '767'){
            $('.desktop__content .perelet_slider').slick('refresh');
        } else {
            $('.phone__content .perelet_slider').slick('refresh');
        }
     }
    modalOpen.each(function () {
        $(this).on("click", function (e) {
            var modalId = $(this).attr("data-modal"),
                EachModal = $('.modal[data-modal="' + modalId + '"]');
            $('body').addClass('my-body-noscroll-class');
            modalSrc = $(this).attr('data-map');
            if(modalSrc) {
                EachModal.append('<iframe src="' + modalSrc + '"></iframe>');
            }
            if($(this).attr("data-modal") == "svetlana") {
                startSvetlana();
                svetlana = 1;
            } else if ($(this).attr("data-modal") == "internat") {
                startinternat();
                internat = 1;
            } else if ($(this).attr("data-modal") == "perelet") {
                startPerelet();
                perelet = 1;
            }
            modal.fadeOut();
            overlay.fadeIn();
            EachModal.fadeIn();
        });
    });


    // E-mail Ajax Send
    $("form").submit(function (event) {
        var th = $(this);
        // if (th.hasClass("okno")) {
        // } else {
        // }
        $(".overlay").fadeIn();
        $(".modal").fadeOut();
        $(".thanks").fadeIn();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize(),
        }).done(function () {

        });
        th.trigger("reset");
        return false;
    });
    
    /** * Replace all SVG images with inline SVG */
    $('img.img-svg').each(function(){
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          $img.replaceWith($svg); 
      }, 'xml');
    });

    $('.helper .pointer')
    .mouseenter(function() {
        $(this).parent().parent().find('.helper').removeClass('active');
        $(this).parent().addClass('active');
    })
    .mouseleave(function() {
        $(this).parent().removeClass('active');
    });
    // $('a[href^="#"]').click(function(){
    //     var target = $(this).attr('href');
    //     $('html, body').animate({scrollTop: $(target).offset().top - 80}, 1000);
    //     return false;
    // });

   $('.okno__left-slider').lightGallery({
       thumbnail:true,
       download: false,
       selector: '.left-slider__item',
   });



    
    // Вопрос ответ
    // $('.faq__item').on('click', function() {
    //   let faqSiblings = $(this).siblings();
    //   faqSiblings.removeClass('active');
    //   faqSiblings.find('.faq__item-answer').slideUp('300');
    //   $(this).toggleClass('active');
    //   $(this).find('.faq__item-answer').slideToggle('300');
    // });

    // Табы
    // $('.gallery__navigation-button').on('click',  function() {
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.gallery__box-item.active').hide();
    //     $('.gallery__box-item').removeClass('active').eq($(this).index()).addClass('active');
    //     $('.gallery__box-item').eq($(this).index()).css('display', 'flex').fadeIn();
    // });

}); 


// Плавный скролл на якори
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

