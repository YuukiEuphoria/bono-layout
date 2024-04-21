document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header")
    const scrollPosition = window.scrollY;

    if (scrollPosition > 150) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
  })

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    navigation: {
      prevEl: ".gallery-title button:first-child",
      nextEl: ".gallery-title button:last-child",
    },
  });

  const topSwiper = new Swiper(".top-swiper", {
    loop: true,
    navigation: {
      nextEl: ".top-right-btn",
      prevEl: ".top-left-btn",
    },
    pagination: {
      el: ".pagination",
    },
  });

  const scrollToTopButton = document.getElementById("scrollToTop");

  scrollToTopButton.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  const bookingBtn = document.querySelector(".booking-btn");
  const targetElement = document.getElementById("booking");

  bookingBtn.addEventListener("click", function () {
    const offsetTop = targetElement.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const targetPositionTop = targetElement.offsetTop;
    const targetPositionBottom = targetPositionTop + 1300;

    if (
      scrollPosition >= targetPositionTop &&
      scrollPosition <= targetPositionBottom
    ) {
      bookingBtn.style.display = "none";
    } else {
      bookingBtn.style.display = "block";
    }
  });

  const wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window
  });
  wow.init();
});
