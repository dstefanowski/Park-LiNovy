// alert('Kod JS podpięty prawidłowo')
// ===================================================================================
// pobierz elementy nawigacji
// const navLinks = document.querySelectorAll(".nav-desktop__items--links a");

// // funkcja debounce
// function debounce(func, wait = 20, immediate = true) {
//   let timeout;
//   return function () {
//     const context = this,
//       args = arguments;
//     const later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// // dodaj nasłuchiwanie na scroll z opóźnieniem za pomocą metody debounce
// window.addEventListener(
//   "scroll",
//   debounce(() => {
//     // pobierz pozycję aktualnie przewijanej strony
//     const currentScrollPos = window.pageYOffset;

//     // przeiteruj przez linki nawigacyjne
//     navLinks.forEach((link) => {
//       // pobierz sekcję powiązaną z linkiem
//       const section = document.querySelector(link.hash);
//       if (section) {
//         // pobierz pozycję sekcji na ekranie
//         const sectionTop = section.offsetTop - 100;
//         const sectionBottom = sectionTop + section.offsetHeight;

//         // jeśli sekcja jest widoczna na ekranie, dodaj aktywną klasę do linku
//         if (
//           currentScrollPos >= sectionTop &&
//           currentScrollPos < sectionBottom
//         ) {
//           link.classList.add("green");
//         } else {
//           link.classList.remove("green");
//         }
//       }
//     });
//   }, 20)
// );
// };

// ======================================================================
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
    ],
  });
});
// ===============================================================
