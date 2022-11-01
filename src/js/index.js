$(document).ready(function () {
/*                                                                            */
/*                                   slider                                   */
/*                                                                            */
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
/*                                                                            */
/*                                 tab-acivity                                 */
/*                                                                            */
  $( '.catalog__tab' ).click( function () {
    $( this ).toggleClass('catalog__tab--active');
  });

/*                                                                            */
/*                                 card swing                                 */
/*                                                                            */
  function toggleCard( item ) {
    $( item ).each( function(i) {
      $( this ).on('click', function(e) {
        $( '.product-item__core-item' ).eq(i).toggleClass( 'visually-hidden' );
        $( '.product-item__list-item' ).eq(i).toggleClass( 'visually-hidden' );
      });
    });
  }
  toggleCard( '.product-item__core-item' );
  toggleCard( '.product-item__list-item' );

/*                                                                            */
/*                                    modal                                   */
/*                                                                            */



});
