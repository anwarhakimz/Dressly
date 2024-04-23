const nav = document.querySelector(".primary-navigation");
const berger = document.querySelector(".humberger");

berger.addEventListener("click", function () {
  nav.classList.toggle("active");
});

const swiperWrapper = document.querySelector("swiper-container");

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    swiperWrapper.setAttribute("slides-per-view", "2");
    swiperWrapper.setAttribute("space-between", "8");
    swiperWrapper.classList.add("grab");
  } else {
    swiperWrapper.setAttribute("slides-per-view", "4");
    swiperWrapper.setAttribute("space-between", "16");
    swiperWrapper.classList.remove("grab");
  }
});
