
$('.menu__link, .menu__btn').on('click', function () {
  $('.menu__items, .menu__btn').toggleClass('active');
});

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

// $(function name(params) {
const swiper = new Swiper('.sliderReviews', {
  slidesPerView: 5,
  loop: true,
  loopedslides: 1,
  centeredSlides: true,
  spaceBetween: 15,
  // slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// })

$('.expertise__items').slick({
  slidesToShow: 3,  /* количество слайдов на показ*/
  slidesToScroll: 1,
  // centerMode: true,
  arrows: false,

  // variableWidth: true,
  // centerPadding: '0%',
  // variableWidth: true,

  // autoplay: true,
  // autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 2,
      }
    },
    {
      breakpoint: 577,
      settings: {
        // slidesToShow: 1.50,
        slidesToShow: 2,
        // settings: "unslick",
        // centerMode: true,
        // centerPadding: '30%'
        // slidesToScroll: 2,
      }
    },
  ]
});

// const slidercasey = new Swiper('.slidercasey', {
//   slidesPerView: 3,
//   // loop: true,
//   // loopedslides: 1,
//   spaceBetween: 30,
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   // breakpoints: {
//   //     870: {
//   //         slidesPerView: 3,
//   //     },

//   //     615: {
//   //         slidesPerView: 2,
//   //     },

//   //     319: {
//   //         slidesPerView: 1,
//   //     },
//   // },
// });

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
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "ua", // установка Украины по умолчанию
    placeholderNumberType: "none", // убрать пример номера
    separateDialCode: true, //выключить код страны
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
  });
});

// Задайте время отсчета в секундах (3 дня, 6 часов, 3 минуты и 15 секунд)
let countdownTime = (3 * 24 * 60 * 60) + (6 * 60 * 60) + (3 * 60) + 15;

// Получите элементы для отображения частей таймера
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Функция для обновления таймера
function updateCountdown() {
  // Вычислите дни, часы, минуты и секунды
  const days = Math.floor(countdownTime / (24 * 60 * 60));
  const hours = Math.floor((countdownTime % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  // Обновите текстовое содержимое элементов
  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');

  // Уменьшите время на 1 секунду
  countdownTime--;

  // Если время истекло, остановите таймер
  if (countdownTime < 0) {
    clearInterval(timerInterval);
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    document.getElementById('countdown').textContent = "Время вышло!";
  }
}

// Обновляйте таймер каждую секунду
const timerInterval = setInterval(updateCountdown, 1000);

// Инициализируйте таймер при загрузке страницы
updateCountdown();

// ----------------------------------------------------====
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    if (name.value.trim() === '') {
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    const phonePattern = /^\d{1,10}$/; // Регулярное выражение для проверки наличия только цифр и не более 10 символов
    if (!phonePattern.test(phone.value)) {
      phoneError.style.display = 'block';
      isValid = false;
    } else {
      phoneError.style.display = 'none';
    }

    if (isValid) {
      const formData = {
        name: name.value,
        email: email.value,
        phone: phone.value
      };

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          if (data.id) {
            successMessage.style.display = 'block';
            form.reset();
          } else {
            console.error(data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });

  // Hide error messages on input
  // name.addEventListener('input', function () {
  if (name.value.trim() !== '') {
    nameError.style.display = 'none';
  }
  // });

  // email.addEventListener('input', function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email.value)) {
    emailError.style.display = 'none';
  }
  // });

  // phone.addEventListener('input', function () {
  if (phone.value.trim() !== '') {
    phoneError.style.display = 'none';
  }
  // });
});
// ------------------------------------------------------
// вариант ии


// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Получаем элементы формы и сообщения об ошибках
//   const name = document.getElementById('name');
//   const email = document.getElementById('email');
//   const phone = document.getElementById('phone');

//   const nameError = document.getElementById('nameError');
//   const emailError = document.getElementById('emailError');
//   const phoneError = document.getElementById('phoneError');
//   const successMessage = document.getElementById('successMessage');
//   // console.log(successMessage);

//   // Флаг валидности формы
//   let isValid = true;

//   // Проверка имени
//   if (name.value.trim() === '') {
//     nameError.style.display = 'block';
//     isValid = false;
//   } else {
//     nameError.style.display = 'none';
//   }

//   // Проверка email
//   // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   // if (!emailPattern.test(email.value)) {
//   //   emailError.style.display = 'block';
//   //   isValid = false;
//   // } else {
//   //   emailError.style.display = 'none';
//   // }

//   // Проверка телефона
//   // const phonePattern = /^[0-9]{10,15}$/; // Проверяет, что телефон состоит только из цифр и имеет длину от 10 до 15 символов
//   // if (!phonePattern.test(phone.value)) {
//   //   phoneError.style.display = 'block';
//   //   isValid = false;
//   // } else {
//   //   phoneError.style.display = 'none';
//   // }

//   // Если форма валидна, отправить данные на сервер
//   if (isValid) {
//     const formData = {
//       name: name.value,
//       email: email.value,
//       phone: phone.value
//     };

//     fetch('/submit-form', { // Замените '/submit-form' на URL вашего сервера
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         successMessage.style.display = 'block';
//         successMessage.textContent = 'Форма успешно отправлена!';
//         console.log('work');
//         // Очистить форму
//         name.value = '';
//         email.value = '';
//         phone.value = '';
//       } else {
//         successMessage.style.display = 'none';
//         // Обработать ошибки сервера, если они есть
//         console.error(data.error);
//       }
//     })
//     .catch(error => {
//       successMessage.style.display = 'none';
//       console.error('Ошибка при отправке формы:', error);
//     });
//   } else {
//     successMessage.style.display = 'none';
//   }
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('contactForm');
//   const name = document.getElementById('name');
//   const email = document.getElementById('email');
//   const phone = document.getElementById('phone');

//   const nameError = document.getElementById('nameError');
//   const emailError = document.getElementById('emailError');
//   const phoneError = document.getElementById('phoneError');
//   const successMessage = document.getElementById('successMessage');

//   if (form) {
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();

//       let isValid = true;

//       // Проверка имени
//       if (name.value.trim() === '') {
//         nameError.style.display = 'block';
//         isValid = false;
//       } else {
//         nameError.style.display = 'none';
//       }

//       // Проверка email
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(email.value)) {
//         emailError.style.display = 'block';
//         isValid = false;
//       } else {
//         emailError.style.display = 'none';
//       }

//       // Проверка телефона
//       const phonePattern = /^[0-9]{10,15}$/;
//       if (!phonePattern.test(phone.value)) {
//         phoneError.style.display = 'block';
//         isValid = false;
//       } else {
//         phoneError.style.display = 'none';
//       }

//       // Если форма валидна, отправить данные на сервер
//       if (isValid) {
//         const formData = {
//           name: name.value,
//           email: email.value,
//           phone: phone.value
//         };

//         fetch('/submit-form', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         })
//         .then(response => response.json())
//         .then(data => {
//           if (data.success) {
//             successMessage.style.display = 'block';
//             successMessage.textContent = 'Форма успешно отправлена!';
//             // Очистить форму
//             name.value = '';
//             email.value = '';
//             phone.value = '';
//           } else {
//             successMessage.style.display = 'none';
//             console.error(data.error);
//           }
//         })
//         .catch(error => {
//           successMessage.style.display = 'none';
//           console.error('Ошибка при отправке формы:', error);
//         });
//       } else {
//         successMessage.style.display = 'none';
//       }
//     });

//     // Добавляем слушатели событий input для скрытия ошибок при вводе
//     name.addEventListener('input', function() {
//       if (name.value.trim() !== '') {
//         nameError.style.display = 'none';
//       }
//     });

//     email.addEventListener('input', function() {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (emailPattern.test(email.value)) {
//         emailError.style.display = 'none';
//       }
//     });

//     phone.addEventListener('input', function() {
//       const phonePattern = /^[0-9]{10,15}$/;
//       if (phonePattern.test(phone.value)) {
//         phoneError.style.display = 'none';
//       }
//     });
//   } else {
//     console.error('Форма не найдена в DOM.');
//   }
// });
// ------------------------------------------------------
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