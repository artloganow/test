//burger

const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav__list')
const menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  menu.classList.toggle('nav__list_active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger_active');
    menu.classList.remove('nav__list_active');
    document.body.classList.remove('stop-scroll');
  })
})

// search

const search = document.querySelector('.header__search');
const searchForm = document.querySelector('.search-form');
const closeForm = document.querySelector('.search-form__close-btn')

search.addEventListener('click', () => {
  searchForm.classList.toggle('search-form_active')
})

closeForm.addEventListener('click', () => {
  searchForm.classList.remove('search-form_active')
})

//slider

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slidesPerView: 'auto',
  autoplay: {
    delay: 4000,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
});

//tabs

const tabsBtn = document.querySelectorAll('.step__btn')
const tabsItem = document.querySelectorAll('.tab')

tabsBtn.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    const path = e.target.dataset.path;


    tabsBtn.forEach((btn) => {btn.classList.remove('step__btn_active')})
    e.currentTarget.classList.add('step__btn_active');

    tabsItem.forEach((elem) => {elem.classList.remove('tab_active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tab_active')
  })
})

//accordion

new Accordion('.accordion');
