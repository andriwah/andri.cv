const swiper = new Swiper(".swiper", {
  slidesPerView: 8,
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false, // kita kontrol manual
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 8,
    },
  },
  freeModeMomentum: false,
});
// Ambil elemen swiper container
const swiperEl = document.querySelector(".swiper");

// Saat mouse hover → stop autoplay
swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

// Saat mouse keluar → start autoplay lagi
swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});
