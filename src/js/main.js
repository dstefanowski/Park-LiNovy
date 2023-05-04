// alert('Kod JS podpięty prawidłowo')
// =============================================================================
// Nav-desktop color change

const navDesktop = document.querySelector(".nav-desktop");

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 689) {
    navDesktop.classList.add("bg-dark");
  } else {
    navDesktop.classList.remove("bg-dark");
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
let rellax = new Rellax(".rellax", {});

// ===========================================================================
AOS.init();
