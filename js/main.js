// jQ - preview to top

$('.back-btn').on('click', function () {
  console.log($('body').offset().top);
  $('body, html').animate({
    scrollTop: $('body').offset().top
  })
})