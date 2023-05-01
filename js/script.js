let condition = false;
let links = document.querySelectorAll(".scroll");
let targetID;
links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
})

$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src="images/Arrow_left.svg">',
    nextArrow: '<img src="images/Arrow_right.svg">',
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

function forward() {
    anime({
        targets: ".menu-small",
        translateX: ["0", "-100%"],
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    });
    
    anime({
        targets: ".menu_small_icon",
        rotate: 90,
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    });

    anime({
        targets: ".stick",
        rotate: 180,
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    });

    condition: false;
};

function backward() {
    anime({
        targets: ".menu-small",
        translateX: ["-100%", "0"],
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    });

    anime({
        targets: ".menu_small_icon",
        rotate: 0,
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    });

    anime({
        targets: ".stick",
        rotate: 0,
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false
    });
    condition: true;
};

$(".menu_small_icon").click(function() {
    if (condition) {
        forward();
    }
    else {
        backward();
    };
});

let start = 0;
let end = 0;

$("header").on('touchstart', function(event) {
    start = event.originalEvent.touches[0].pageX;
});

$("header").on('touchend', function(event) {
    end = event.originalEvent.changesTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();  
    }
    else if (start - end >= 100 && !condition) {
        backward();
    };
});