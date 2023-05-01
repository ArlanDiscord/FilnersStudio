$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src="img/Arrow_left.svg">',
    nextArrow: '<img src="img/Arrow_right.svg">',
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });