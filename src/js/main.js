// alert('Kod JS podpięty prawidłowo')
// =======================================================================================
// Zanikanie hero-text + Nav-desktop color change

const navDesktop = document.querySelector(".nav-desktop");

const heroText = document.querySelector(".hero__text");

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  heroText.style.opacity = 1 - scrollPosition / 400;

  if (heroText.style.opacity <= 0) {
    navDesktop.classList.add("bcg-white");
  } else if (scrollPosition >= 500) {
    navDesktop.classList.add("bcg-white");
  } else {
    navDesktop.classList.remove("bcg-white");
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

// =============================================================================
// Rellax.js adder
function addRellaxClass() {
  if (window.innerWidth > 768) {
    let boxElement = document.querySelector(".routes-section__box");
    let routeElements = document.querySelectorAll(".routes-section__route");

    if (boxElement) {
      boxElement.classList.add("rellax");
    }

    if (routeElements.length > 0) {
      routeElements.forEach(function (element) {
        element.classList.add("rellax");
      });
    }
  }
}

addRellaxClass();

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
// Alert - email address to clipboard
function showAlert(message, duration) {
  let alertDiv = document.createElement("div");
  alertDiv.innerText = message;
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "50px";
  alertDiv.style.left = "50%";
  alertDiv.style.width = "50%";
  alertDiv.style.transform = "translateX(-50%)";
  alertDiv.style.paddingTop = "20px";
  alertDiv.style.paddingBottom = "20px";
  alertDiv.style.paddingLeft = "30px";
  alertDiv.style.paddingRight = "30px";
  alertDiv.style.backgroundColor = "white";
  alertDiv.style.border = "1px solid gray";
  alertDiv.style.borderRadius = "5px";
  alertDiv.style.boxShadow = "0 2px 20px 0 black";
  alertDiv.style.fontSize = "14px";
  alertDiv.style.zIndex = "9999";
  document.body.appendChild(alertDiv);

  setTimeout(function () {
    alertDiv.remove();
  }, duration);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showAlert("Adres e-mail skopiowany do schowka!", 2000);
}

// =================================================================
// Footer year actualization
let currentYear = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
  let copyright = document.querySelector(".copyright");
  copyright.innerHTML =
    "&copy; " +
    currentYear +
    " Park Linowy Kalisz | Utworzono przez: Dominik Stefanowski ";
});
// =================================================================
// document.addEventListener('DOMContentLoaded', function() {
//   var navLinks = document.querySelectorAll('.nav-desktop__item');

//   for (var i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click', function(event) {
//       var targetSectionId = this.getAttribute('href');

//       if (targetSectionId.startsWith('#')) {
//         event.preventDefault();
//         var targetSection = document.querySelector(targetSectionId);

//         if (targetSection) {
//           window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//           });
//         }
//       }
//     });
//   }
// });
