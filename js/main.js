$(function () {
 

 $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"> <img src="images/arrow-left.svg" alt="arrow"> </> ',
    nextArrow: '<button type="button" class="slick-next"> <img src="images/arrow-right.svg" alt="arrow"> </> ',
    responsive: [
      {
         breakpoint: 1025,
         settings:{
            arrows:false,
            autoplay: true,
            autoplaySpeed: 1500,
         }
      }
    ]
   });

   // document.querySelector(".menu__btn").addEventListener('click', function () {
   //    $('.header__top-inner').toggleClass('header__top-inner--active');
   // });

   $('.menu__btn').on("click", function() {
      $('.header__top-inner').toggleClass('header__top-inner--active');
   });

   let mixer = mixitup('.portfolio__content');

})




