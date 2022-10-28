$(document).ready(function () {
  $('.carousel__items').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/svg/left-arr.svg" alt="slide-arr-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./img/svg/right-arr.svg" alt="slide-arr-right"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          }
      }
    ],
  });
  $(".catalog__tab").click(function(){
    $(this).addClass('.catalog__tab--active').alert('X');
  });

});


