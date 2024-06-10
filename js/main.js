
$(".intro__star").rateYo({
  rating: 4.7,
  starWidth: "24px",
  // spacing: "7px",
  ratedFill: "#FECB00",
  normalFill: "#121212"
});

$('.reviews-slider').slick({
  slidesToShow: 5,  /* количество слайдов на показ*/
  slidesToScroll: 1,
  centerMode: true,
  // arrows: false,
  centerPadding: '0%',
  // variableWidth: true,

  // autoplay: true,
  // autoplaySpeed: 3000,
  // responsive: [
  //     {
  //         breakpoint: 768,
  //         settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 2,
  //         }
  //     },
  //     {
  //         breakpoint: 577,
  //         settings: {
  //             slidesToShow: 1,
  //             // slidesToScroll: 2,
  //         }
  //     },
  // ]
});
// $(document).ready(function () {
//   $('.reviews-slider').slick({
//     arrows: true
//   });

//   var delay = 5000; // Задержка в миллисекундах (1 секунда)
//   var isTransitioning = false;

//   $('.slick-prev, .slick-next').on('click', function (e) {
//     if (isTransitioning) {
//       e.preventDefault();
//       return;
//     }
//     isTransitioning = true;
//     setTimeout(function () {
//       isTransitioning = false;
//     }, delay);
//   });
// });

// $(document).ready(function(){
//   $('.slider').slick({
//       arrows: true
//   });

//   var delay = 1000; // Задержка в миллисекундах (1 секунда)

//   $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//       // Отключаем нажатие на стрелки до завершения задержки
//       $('.slick-prev, .slick-next').addClass('disabled');

//       setTimeout(function(){
//           $('.slick-prev, .slick-next').removeClass('disabled');
//       }, delay);
//   });

//   // Переопределяем стандартное поведение стрелок
//   $('.slick-prev, .slick-next').on('click', function(e){
//       if ($(this).hasClass('disabled')) {
//           e.preventDefault();
//           e.stopImmediatePropagation();
//       }
//   });
// });

$(document).ready(function () {
  $('.questions__items > li > .questions__text').hide();

  $('.questions__items > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".questions__text").slideUp();
    } else {
      $(".questions__items > li  .active .questions__text").slideUp();
      $(".questions__items > li  .active").removeClass("active");
      $(this).addClass("active").find(".questions__text").slideDown();
    }
    return false;
  });
});

$(document).ready(function () {
  var input = document.querySelector("#tel");
  window.intlTelInput(input, {
    initialCountry: "ua", // установка Украины по умолчанию
    placeholderNumberType: "none", // убрать пример номера
    separateDialCode: false, //выключить код страны
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
  });
});

// function name(params) {
//   // let buttonModal4 = 

//   buttonModal4.addEventListener('click', () => {
//   });
// }


// // Grab the toggle trigger and the sub UL
// const dataTriggers = document.querySelectorAll('.accordion__button');
// const dataTargets = document.querySelectorAll('.accordion__content');

// // Add a data attribute and count up
// dataTriggers.forEach((dataTrigger, index) => {
//   dataTrigger.setAttribute('data-trigger', `toggle-${index + 1}`);

//   // Drop in some accessible standards
//   dataTrigger.setAttribute('aria-controls', `toggle-${index + 1}`);

//   dataTrigger.addEventListener('click', function () {
//     this.classList.toggle('active');

//     dataTrigger.setAttribute(
//       'aria-expanded',
//       `${!(dataTrigger.getAttribute('aria-expanded') === 'true')}`
//     );
//   });
// });

// // Add an ID to each continuer that will slide
// dataTargets.forEach((dataTarget, index) => {
//   dataTarget.setAttribute('id', `toggle-${index + 1}`);
// });

// for (i = 0; i < dataTriggers.length; i++) {
//   dataTriggers[i].addEventListener('click', function () {
//     var container = document.getElementById(this.dataset.trigger);

//     if (!container.classList.contains('active')) {
//       container.classList.add('active');
//       container.style.height = 'auto';

//       var height = container.clientHeight + 'px';

//       container.style.height = '0px';

//       setTimeout(function () {
//         container.style.height = height;
//       }, 0);
//     } else {
//       container.style.height = '0px';

//       container.addEventListener(
//         'transitionend',
//         function () {
//           container.classList.remove('active');
//         },
//         {
//           once: true,
//         }
//       );
//     }
//   });
// }
// --------------------------------------
// проверка форм
// $(document).ready(function () {
//   validateForm()//своя
//   function validateForm() {
//     var inputName = $(this).attr('name');
//     var val = $(this).val();
//     $(this).closest('.input__wrap').addClass('focused');
//     switch (inputName) {
//       // Проверка поля "Имя"
//       case 'name':
//         // var rv_name = /^[а-яА-ЯёЁa-zA-Z0-9]+$/; // используем регулярное выражение
//         if (val.length > 2 && val != '') {
//           $(this).removeClass('error');
//           $(this).addClass('not_error');
//         }
//         else if ($(this).val() == '') {
//           $(this).closest('.input__wrap').removeClass('focused');
//           $(this).removeClass('not_error').addClass('error');
//         }
//         else {
//           $(this).removeClass('not_error').addClass('error');
//         }
//         break;
//       // Проверка email
//       case 'email':
//         var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
//         if (val != '' && rv_email.test(val)) {
//           $(this).removeClass('error');
//           $(this).addClass('not_error');
//         }
//         else if ($(this).val() == '') {
//           $(this).closest('.input__wrap').removeClass('focused');
//           $(this).removeClass('not_error').addClass('error');
//         }
//         else {
//           $(this).removeClass('not_error').addClass('error');
//         }
//         break;
//       // Проверка поля "Телефон "
//       case 'phone':
//         if (val != '' && val.length >= 10) {
//           $(this).removeClass('error');
//           $(this).addClass('not_error');
//         }
//         else {
//           $(this).removeClass('not_error');
//           $(this).addClass('error');
//         }
//         break;
//       // case 'phone':
//       // 	var isValid = $(this).intlTelInput('isValidNumber');
//       // 	if (isValid) {
//       // 		console.log('valid');
//       // 		$(this).removeClass('error');
//       // 		$(this).addClass('not_error');
//       // 	}
//       // 	else {
//       // 		console.log('not valid');
//       // 		$(this).removeClass('not_error');
//       // 		$(this).addClass('error');
//       // 	}
//       // 	break;
//     }
//   }
// })

// // проверка phon
// function validateFieldNumber(inputElement, regex) {
//   const inputValue = inputElement.val().trim();
//   const isValidInput = regex.test(inputValue);
//   inputElement.closest('.input__wrap').addClass('focused');
//   if (isValidInput && inputValue !== '') {
//     inputElement.removeClass('error').addClass('not_error');
//   }
//   else {
//     inputElement.removeClass('not_error').addClass('error');
//     if (inputValue == '') {
//       inputElement.closest('.input__wrap').removeClass('focused');
//     }
//   }
// }

// function validateUaNumber(){
//   var inputName = $(this).attr('name');
//   const phoneRegex = /^\+?\d{10,}$/;
//   const phoneUkRegex = /^(?:\+\s*(?:\d\s*){12}|\s*(?:\d\s*){12})$/;

//       if ($(this).val().startsWith('+380') || $(this).val().startsWith('380')) {
//     console.log('validateUaNumber');
//           switch(inputName){
//               case 'phone':
//                   validateFieldNumber($(this), phoneUkRegex);
//                   break;
//           }
//       } else { 
//     validateFieldNumber($(this), phoneRegex); 
//   } 
// }
// -----------------------------------
// $(document).ready(function() {
//   var input = document.querySelector("#phone");
//   window.intlTelInput(input, {
//       // настройки по умолчанию
//       utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
//   });
// });

// $(document).ready(function() {
//   // Инициализация intl-tel-input
//   var input = document.querySelector("#phone");
//   var iti = window.intlTelInput(input, {
//       utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
//   });

//   // Функция для применения маски ввода
//   function applyInputMask() {
//       var countryData = iti.getSelectedCountryData();
//       var mask = getMaskForCountry(countryData.iso2);
//       $(input).inputmask(mask);
//   }

//   // Пример функции для получения маски на основе страны
//   function getMaskForCountry(countryCode) {
//       var masks = {
//           'us': '(999) 999-9999',
//           'ru': '+7 (999) 999-99-99',
//           // добавьте другие страны и их маски
//       };
//       return masks[countryCode] || '';
//   }

//   // Применение маски при изменении выбранной страны
//   input.addEventListener("countrychange", applyInputMask);

//   // Применение маски при загрузке страницы
//   applyInputMask();
// });

// ('.questions__item').on('click', function () {
//   $('.questions__text').toggleClass('active');
// });




// const reviewsSlider = new Swiper('.reviewsSlider', {
//   // slidesToShow: 5,
//   slidesToScroll: 1,
//   centerMode: true,
//   slidesPerView: 3,
//   loop: true,
//   spaceBetween: 15,
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },
// })

// смена страны
// $('.tabs__link').on('click', function (e) {
//   e.preventDefault();
//   $('.tabs__link').removeClass('tabs__link--active');
//   $(this).addClass('tabs__link--active');

//   $('.tabs__right').removeClass('tabs__right--active');
//   $($(this).attr('href')).addClass('tabs__right--active'); /*убирает добовляет класс*/
// });

// function setCountry(code){
//   if(code || code==''){
//       var text = jQuery('a[cunt_code="'+code+'"]').html();
//       $(".dropdown dt a span").html(text);
//   }
// }
// $(document).ready(function() {
//   $(".dropdown img.flag").addClass("flagvisibility");

//   $(".dropdown dt a").click(function() {
//       $(".dropdown dd ul").toggle();
//   });

//   $(".dropdown dd ul li a").click(function() {
//       //console.log($(this).html())
//       var text = $(this).html();
//       $(".dropdown dt a span").html(text);
//       $(".dropdown dd ul").hide();
//       $("#result").html("Selected value is: " + getSelectedValue("country-select"));
//   });

//   function getSelectedValue(id) {
//       //console.log(id,$("#" + id).find("dt a span.value").html())
//       return $("#" + id).find("dt a span.value").html();
//   }

//   $(document).bind('click', function(e) {
//       var $clicked = $(e.target);
//       if (! $clicked.parents().hasClass("dropdown"))
//           $(".dropdown dd ul").hide();
//   });


//   $("#flagSwitcher").click(function() {
//       $(".dropdown img.flag").toggleClass("flagvisibility");
//   });
// });

// $('.functions-tab__link').on('click', function (e) {
//   e.preventDefault();

//   $('.functions-tab__link').removeClass('functions-tab__link--active');
//   $(this).addClass('functions-tab__link--active');

//   // $('.product-tabs__text').removeClass('product-tabs__text--active');
//   // $(this).addClass('product-tabs__text--active');

//   $('.functions-tab__tab').removeClass('functions-tab__tab--active');
//   $($(this).attr('href')).addClass('functions-tab__tab--active'); /*убирает добовляет класс*/
//   // табы
//   // product-tabs__text--active
//   // .attr('href') влияет на перезагрузку страници
// });

// 'use strict';//строгий режим
// const tab = document.querySelectorAll('.tabs__item'),
//   info = document.querySelector('.tabs__item'),
//   tabContent = document.querySelectorAll('.tabs__right');

// function hideTabContent(a) {
//   for (let i = a; i < tabContent.length; i++) {
//     tabContent[i].classList.remove('show');
//     tabContent[i].classList.add('hide');
//   }
// }

// hideTabContent(1);

// function showTabContent(b) {
//   if (tabContent[b].classList.contains('hide')) {
//     tabContent[b].classList.remove('hide')
//     tabContent[b].classList.add('show')
//   }
// }

// info.addEventListener('click', (event) => {
//   let target = event.target;
//   if (target && target.classList.contains('info-header-tab')) {
//     for (let i = 0; i < tab.length; i++) {
//       if (target == tab[i]) {
//         hideTabContent(0);
//         showTabContent(i);
//         break;
//       };
//     };
//   };
// })

// info.addEventListener('click', (event) => {
//     let target = event.target;
//     if (target && target.classList.contains('info-header-tab')) {
//         for (let i = 0; i < tab.length; i++) {
//             if (target == tab[i]) {
//                 hideTabContent(0);
//                 showTabContent(i);
//                 break;
//             };
//         };
//     };
// });
// ---

// $('.tabs__link').on('click', function (e) {
//   e.preventDefault();

//   $('.tabs__link').removeClass('active');
//   $(this).addClass('active');
//   // $('.tabs__item').removeClass('active');
//   // $(this).addClass('active');

//   $('.tabs__right').addClass('active');
//   $($(this).attr('href')).removeClass('active'); /*убирает добовляет класс*/
// });
// $('.rates-tabs__link').on('click', function (e) {
//   e.preventDefault();

//   $('.rates-tabs__link').removeClass('rates-tabs__link--active');
//   $(this).addClass('rates-tabs__link--active');

//   $('.rates-tabs__text').removeClass('rates-tabs__text--active');
//   $($(this).attr('href')).addClass('rates-tabs__text--active'); /*убирает добовляет класс*/
// });

// $('.menu__btn, .menu a').on('click', function () {
//     $('.menu__btn, .menu__items').toggleClass('active');
//     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
// });
// ------------------
// $('a[href="' + this.location.pathname + '"]').parent().addClass('header-fixed');
// чтобы класс не пропадал при обновлении страницы
// ------------------
// $(".menu a, .scroll a").on("click", function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//         top = $(id).offset().top;
//     tops = top - 80;
//     $('body,html').animate({ scrollTop: tops }, 1500);
// });
// дял скрола
// -----------------------------

// $(function () {
//     let header = $('.header');
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             header.addClass('header-fixed');
//         } else {
//             header.removeClass('header-fixed');
//         }
//     });
// });// Функция для фиксированной шапки при скролле
// ----------------------------------
/*
          $('.menu__btn').on('click', function () {
              $('.menu__items').toggleClass('menu__items--active');
          });
          $('.menu__btn').on('click', function () {
              $('.menu__btn').toggleClass('active');
          });
          ------------------------------------------
          // const observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll('.menu__link').forEach((link) => {
//                 let id = link.getAttribute('href').replace('#', '');
//                 if (id === entry.target.id) {
//                     link.classList.add('link-active');
//                 } else {
//                     link.classList.remove('link-active');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 0.5
// });// для подсветки пунктов меню
----------------------------------------------------
       
        $('.home__slider').slick({
            dots: true,
            arrows: false,
             responsive: [


                 {
                     breakpoint: 1150,
                     settings: {
                         slidesToShow: 4,
                     }
                 },
                 {
                     breakpoint: 1000,
                     settings: {
                         slidesToShow: 3,
                     }
                 },
                 {
                     breakpoint: 620,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                     }
                 },
             ]
        });
       */




