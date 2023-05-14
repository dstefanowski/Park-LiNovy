// alert('Kod JS podpięty prawidłowo')
// =======================================================================================
// Zanikanie hero-text + Nav-desktop color change

const navDesktop = document.querySelector(".nav-desktop");

const heroText = document.querySelector(".hero__text");

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  heroText.style.opacity = 1 - scrollPosition / 400;

  if (heroText.style.opacity <= 0) {
    navDesktop.classList.add("bcg-dark");
  } else {
    navDesktop.classList.remove("bcg-dark");
  }
});

// =============================================================================

// Burger button - MENU
const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger-btn");
const navItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
  nav.classList.toggle("nav--active");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });
};

burgerBtn.addEventListener("click", handleNav);

// ===========================================================================
// Rellax.js
let rellax = new Rellax(".rellax", {});

// ===========================================================================
// AOS animation
AOS.init({
  once: true,
});
// ===========================================================================
// Slick.js carousel
$(document).ready(function () {
  $(".carousel").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// ===============================================================

