const imgList = document.querySelectorAll('.img-mini');
const mainImg = document.querySelector('.info-main-img');
const imgWrap = document.querySelector('.img-mini-wrap');

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const boxMini = document.querySelector('.box-mini');

let number = 0;
const widthImgMini = imgWrap.offsetWidth;
const imgNumber = imgList.length;
const imgActive = 4;
const imgHide = imgNumber - imgActive;

// Preview images in ._product-info

const openImage = (e) => mainImg.src = e.target.src;


// Scroll to the next mini-image

const leftPosition = () => {
  if (Math.abs(number) < Math.abs(widthImgMini * imgHide) && (imgNumber > imgActive)) {
    number -= widthImgMini;
    boxMini.style.left = `${number}px`;
  } else return;
}

const rightPosition = () => {
  if (widthImgMini !== number && number !== 0) {
    number += widthImgMini;
    boxMini.style.left = `${number}px`;
  } else return
}

imgList.forEach(imgItem => imgItem.addEventListener('click', openImage));
arrowRight.addEventListener('click', leftPosition);
arrowLeft.addEventListener('click', rightPosition);