const burger = () => {
  const burgerBtn = document.querySelector('.header-nav__btn-burger');
  const mobileMenu = document.querySelector('.header-nav__items');
  const body = document.querySelector('body');
  const html = document.querySelector('html');

  burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.toggle('header-nav__items-hidden');
    body.classList.toggle('no-scroll');
    html.classList.toggle('no-scroll');
  });
};

export default burger;