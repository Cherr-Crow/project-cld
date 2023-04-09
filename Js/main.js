//свайпер

const container = document.querySelector(".swiper-container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  loop: true,

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})



//бургер



let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuOff = document.querySelector('.menuOff');

menuBtn.addEventListener('click', function() {

  menuBtn.classList.toggle('burger--active')
  menu.classList.toggle('active')
})

menuOff.addEventListener('click', function() {

  menu.classList.remove('active')
})


//поиск

let searchBtn = document.querySelector('.header__search');
let search = document.querySelector('.search-form');
let searchOff = document.querySelector('.search-form__close');


searchBtn.addEventListener('click', function() {
  searchBtn.classList.toggle('active--form')
  search.classList.toggle('active--form')
})

searchOff.addEventListener('click', function() {

  search.classList.remove('active--form')
})

















