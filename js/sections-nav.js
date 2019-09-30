// jQ - back to top

$('.back-btn').on('click', function () {
  $('body, html').animate({
    scrollTop: $('body').offset().top
  })
})

// jQ - go to section

$('.nav-secondary li').on('click', function () {
  const classBtn = $(this).attr('id');
  const gotoSection = "[data-section =" + classBtn;

  $('body, html').animate({
    scrollTop: $(gotoSection).offset().top
  })
})

// js - hamburger

const btnHamburger = document.querySelector('.hamburger-item');
const navPrimary = document.querySelector('.header-container-bottom');

btnHamburger.addEventListener('click', () => navPrimary.classList.toggle('active'));

navPrimary.addEventListener('click', () => navPrimary.classList.remove('active'));