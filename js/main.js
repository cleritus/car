// jQ - preview to top

$('.back-btn').on('click', function () {
  console.log($('body').offset().top);
  $('body, html').animate({
    scrollTop: $('body').offset().top
  })
})

// Banner-area slider

const bannerArea = document.querySelector('.banner-area');
const imageList = [
  imgSrc = 'url("../image/quad-black.jpg")',
  imgSrc = 'url("../image/bmw-silver.jpg")',
  imgSrc = 'url("../image/alfa-red.jpg")',
  imgSrc = 'url("../image/lexus-blue.jpg")',
];

let number = 0;

const changeSlide = () => {
  number++;
  if (number === imageList.length) {
    number = 0
  }
  bannerArea.style.backgroundImage = imageList[number];
  bannerArea.style.transition = 'background-image 1s';
}

let intervalSlide = setInterval(changeSlide, 5000)