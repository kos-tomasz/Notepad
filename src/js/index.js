import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

console.log("HELLO 🚀");


const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');
const textarea = document.querySelector('.form__text--js');

save.addEventListener('click', () =>{
localStorage.setItem('entry', textarea.value);
});

load.addEventListener('click', () =>{
   textarea.value = localStorage.getItem('entry');
});


let isDark = true;
const darkMode = document.querySelector('.header__isDark--js');

darkMode.addEventListener('click', () => {
  if (isDark) {
    document.documentElement.style.setProperty("--background-color", "#bc9ef5");
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--background-color", "#2D2241");
    isDark = true;
  }
});
