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

// Next / prev product button

const nextBtn = document.querySelector('.nav-right-btn');
const prevBtn = document.querySelector('.nav-left-btn');
const pathProducts = [
  "/products/p1-bmw.html",
  "/products/p2-bugati.html",
  "/products/p3-ford_ranger.html",
  "/products/p4-lexus.html",
  "/products/p5-mesio_cab.html",
  "/products/p6-buggy.html",
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