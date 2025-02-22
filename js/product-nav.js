const imgList = [...document.querySelectorAll('.img-mini')];
const mainImg = document.querySelector('.info-main-img');
const imgWrap = document.querySelector('.img-mini-wrap');

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const boxMini = document.querySelector('.box-mini');

let number = 0;
const widthImgMini = imgWrap.offsetWidth;
const imgActive = 4;
const imgHide = imgList.length - imgActive;
let imgNumber = 0;

// Preview images in the main box

const openImage = (e) => mainImg.src = e.target.src;


// Scroll to the next mini-image

const leftPosition = () => {
  if (Math.abs(number) < Math.abs(widthImgMini * imgHide) && (imgList.length > imgActive) && (imgList.length > (imgNumber + imgActive))) {
    number -= widthImgMini;
    boxMini.style.left = `${number}px`;

    imgNumber++;
    mainImg.src = imgList[imgNumber].src;
  } else return;
}

const rightPosition = () => {
  if (widthImgMini !== number && number !== 0) {
    number += widthImgMini;
    boxMini.style.left = `${number}px`;

    imgNumber--;
    mainImg.src = imgList[imgNumber].src;
  } else return
}

imgList.forEach(imgItem => imgItem.addEventListener('click', openImage));
arrowRight.addEventListener('click', leftPosition);
arrowLeft.addEventListener('click', rightPosition);

// Next / prev product

const nextBtn = document.querySelector('.nav-right-btn');
const prevBtn = document.querySelector('.nav-left-btn');
const pathProducts = [
  "/products/p1-bmw.html",
  "/products/p2-bugati.html",
  "/products/p3-ford_ranger.html",
  "/products/p4-lexus.html",
  "/products/p5-mesio_cab.html",
  "/products/p6-buggy.html",
  "/products/p7-bmw6gt.html",
  "/products/p8-bmw_new.html",
  "/products/p9-buggy_amort.html",
  "/products/p10-ford_ranger.html",
  "/products/p11-mercedes2.html",
  "/products/p12-mercedesSL.html",
  "/products/p16-beetle.html",
  "/products/p17-volvo90.html",
  "/products/p18-amarok.html",
  "/products/p19-quadsmall.html",
  "/products/p20-morris.html",
  "/products/p21-police.html",
  "/products/p13-bmw1000r.html",
  "/products/p14-bmw1000rr.html",
  "/products/p15-rebel.html",
];

const actualPath = this.location.pathname;
const actualIndex = pathProducts.indexOf(actualPath);

const nextProduct = () => {
  let nextPath = actualIndex + 1;

  if (nextPath === pathProducts.length) {
    nextPath = 0;
    window.location.href = pathProducts[nextPath];
  } else {
    window.location.href = pathProducts[nextPath];
  };
}

const prevProduct = () => {
  let prevPath = actualIndex - 1;

  if (prevPath < 0) {
    prevPath = pathProducts.length - 1;
    window.location.href = pathProducts[prevPath];
  } else {
    window.location.href = pathProducts[prevPath];
  };
}

nextBtn.addEventListener('click', nextProduct);
prevBtn.addEventListener('click', prevProduct);