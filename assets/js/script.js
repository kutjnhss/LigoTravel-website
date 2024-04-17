'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function() {
  // Tải tệp JSON
  fetch('./assets/js/lang.json')
    .then(response => response.json())
    .then(langJSON => {
      function translatePage(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
          const key = element.dataset.lang;
          if (langJSON[key] && langJSON[key][language]) {
            element.innerText = langJSON[key][language];
          }
        });
      }

      translatePage("en"); // Mặc định sử dụng tiếng Anh

      const langIcons = document.querySelectorAll(".lang-icon");

      if (langIcons) {
        langIcons.forEach(icon => {
          icon.addEventListener("click", function() {
            const language = this.dataset.lang;
            translatePage(language);
          });
        });
      }
    })
    
});