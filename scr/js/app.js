import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();


import burger from './modules/burger.js';




burger();


// Активный класс на странице
const page = document.querySelector('body').id;
const navLink = document.querySelectorAll('.header-nav__link');

for (let item of navLink) {
  const dataItem = item.getAttribute('data-page');
  if (dataItem === page) {
    item.classList.add('header-nav__link--active');
  }
}