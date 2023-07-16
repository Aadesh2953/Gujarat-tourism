var swiper = new Swiper(".trial-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    centerdSlides: true,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0: {
          slidesPerView: 1,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
      },
      500: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
  });

  var swiper = new Swiper(".top-dest-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    centerdSlides: true,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next-dest",
        prevEl: ".swiper-button-prev-dest"
    },
    pagination: {
      el: ".swiper-pagination-dest",
      clickable: true,
    },
    breakpoints:{
      0: {
          slidesPerView: 1,
          pagination: {
            el: ".swiper-pagination-dest",
            clickable: true,
            dynamicBullets: true,
          },
      },
      500: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
      cssMode: true,
  },
  });

var swiper = new Swiper(".begin-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    centerdSlides: true,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next-begin",
        prevEl: ".swiper-button-prev-begin"
    },
    pagination: {
      el: ".swiper-pagination-begin",
      clickable: true,
    },
    breakpoints:{
      0: {
          slidesPerView: 1,
          pagination: {
            el: ".swiper-pagination-begin",
            clickable: true,
            dynamicBullets: true,
          },
      },
      500: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
      cssMode: true,
  },
  });