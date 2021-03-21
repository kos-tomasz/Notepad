import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

console.log("HELLO 🚀");

let isDark = true;
const button = document.querySelector(".header__isDark--js");

button.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty("--background-color", "#bc9ef5");
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--background-color", "#2D2241");
    isDark = true;
  }
});

