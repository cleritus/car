// Banner-area slider

const bannerArea = document.querySelector('.banner-area');
const imageList = [
  imgSrc = 'url("image/bmw2.jpg")',
  imgSrc = 'url("image/Ford_ranger (14).jpg")',
  imgSrc = 'url("image/mini_morris (2).jpg")',
  imgSrc = 'url("image/mercedes (2).jpg")',
];

const productName = document.querySelector('.hero-banner-product-name');
const nameList = [
  'bmw x6 240V',
  'ford ranger monster track 4x4',
  'Mini Morris Cooper',
  'mercedes dwuosobowy',
];
const productPrice = document.querySelector('.hero-banner-price');
const priceList = [
  '1799 pln',
  '2149 pln',
  '799 pln',
  '1699 pln'
];

let number = 0;

const changeSlide = () => {
  number++;
  if (number === imageList.length) {
    number = 0
  }
  bannerArea.style.backgroundImage = imageList[number];
  productName.textContent = nameList[number];
  productPrice.textContent = priceList[number];
  bannerArea.style.transition = 'background-image 1s';
}

let intervalSlide = setInterval(changeSlide, 5000);