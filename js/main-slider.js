// Banner-area slider

const bannerArea = document.querySelector('.banner-area');
const imageList = [
  imgSrc = 'url("../image/bmw2.jpg")',
  imgSrc = 'url("../image/Buggy (3).jpg")',
  imgSrc = 'url("../image/mercedes (14).jpg")',
  imgSrc = 'url("../image/Ford_ranger (16).jpg")',
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