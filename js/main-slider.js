// Banner-area slider

const bannerArea = document.querySelector('.banner-area');
const imageList = [
  imgSrc = 'url("image/bmw2.jpg")',
  imgSrc = 'url("image/Buggy (10).jpg")',
  imgSrc = 'url("image/mercedes (2).jpg")',
  imgSrc = 'url("image/Ford_ranger (14).jpg")',
];

const productName = document.querySelector('.hero-banner-product-name');
const nameList = [
  'bmw x6 240V',
  'buggy 4x4 dwuosobowy',
  'mercedes dwuosobowy',
  'ford ranger monster track 4x4'
];
const productPrice = document.querySelector('.hero-banner-price');
const priceList = [
  '1799 pln',
  '1499 pln',
  '1699 pln',
  '2149 pln'
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

// // Open and close modal functions

// const openerList = document.querySelectorAll('.product-image');
// const modal = document.querySelector('.modal-container');
// const modalBtn = document.querySelector('.closeBtn')

// const startModal = () => {
//   modal.style.display = "flex";
// console.log('ok');
//   document.querySelector('.test').textContent = 'ok';
// }

// //  Close modal by 'escape' key on keyboard
// const closeModal = (e) => {
//   if (e.keyCode === 27) modal.style.display = "none";
// }

// // close by button
// openerList.forEach(openerItem => openerItem.addEventListener('click', startModal));

// document.body.addEventListener('keydown', closeModal);
// // modalBtn.addEventListener('click', () => modal.style.display = "none");