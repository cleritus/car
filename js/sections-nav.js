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