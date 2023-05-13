// alert('Kod JS podpięty prawidłowo')
// =============================================================================
// Nav-desktop color change

const navDesktop = document.querySelector(".nav-desktop");

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 689) {
    navDesktop.classList.add("bcg-dark");
  } else {
    navDesktop.classList.remove("bcg-dark");
  }
};
// =============================================================================

// Navbar - Scroll-reveal
// let prevScrollpos = window.pageYOffset;

// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;

//   if (currentScrollPos < 500) {
//     document.querySelector(".nav-desktop").classList.remove("scroll-down");
//   } else if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".nav-desktop").classList.remove("scroll-down");
//     document.querySelector(".nav-desktop").classList.add("scroll-up");
//   } else {
//     document.querySelector(".nav-desktop").classList.remove("scroll-up");
//     document.querySelector(".nav-desktop").classList.add("scroll-down");
//   }
//   prevScrollpos = currentScrollPos;
// };
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
    autoplaySpeed: 3000,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
