//бургер меню
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation-active');
});

navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation-active');
});


//фоновая музыка

const mute = document.querySelector('.mute__checkbox');
const audio = new Audio('audio/waterTower.mp3');

mute.addEventListener('change', () => {
  if (mute.checked) {
    audio.play();
  } else {
    audio.pause();
  }
})

try {
  const pagination = document.querySelector('.pagination');
  const paginationButton = document.querySelector('.pagination__arrow');
  const paginationVideo = document.querySelector('.pagination-video');

  const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides: true,
    loopedSlides: 4,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

  sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
    if (paginationVideo) {
      paginationVideo.classList.toggle('pagination-active');
    }

  });


  const sliderMain = new Swiper('.slider-main', {
    loop: true,
    loopedSlides: 4,
    spaceBetween: 10,
    grabCursor: true,
    slideToClickedSlide: true,

    keyboard: {
      pageUpDown: true,
    }
  });

  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;

  const videos = document.querySelectorAll('video');
  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i += 1) {
      videos[i].pause();
    }
  })

  paginationButton.addEventListener('click', () => {
    pagination.classList.toggle('pagination-active');
  })

} catch {

}