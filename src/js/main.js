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

function showAlert(message, duration) {
  var alertDiv = document.createElement("div");
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
  alertDiv.style.fontSize = "14px";
  alertDiv.style.zIndex = "9999";
  document.body.appendChild(alertDiv);

  setTimeout(function () {
    alertDiv.remove();
  }, duration);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showAlert("Adres e-mail skopiowany do schowka!", 2000); // 2000 ms = 2 sekundy
}
