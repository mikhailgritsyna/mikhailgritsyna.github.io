$(function(){ 
  $('.slider_inner').slick({
    arrow: true,
   asNavFor: '.thumbs',
  
  });
  $('.thumbs').slick({
    
    dots: true,
    
  focusOnSelect: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider_inner',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 5,

        }
    
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 646,
        settings: {
          slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
        settings: {
          slidesToShow: 2,

    }
  },
  {
    breakpoint: 330,
      settings: {
        slidesToShow: 1,

  }
}
    ]
    
  });
  $('.header_menu-btn').on('click', function(){
    $('.header_menu > ul').slideToggle();
  });
});