$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icon/left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icon/right.png"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows:false
                }
            }
        ]
      });
  });