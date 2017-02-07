// Slim Header
var header = 0;
function scrollHead(){    
    if ($(document).scrollTop() > 0) {
        if (header == 0) {
            header = 1;
            $('.header').addClass('slim-header');
            $('.quote-button').addClass('slim-quote');
        }
    } else {
        if (header == 1) {
            header = 0;
            $('.header').removeClass('slim-header');
            $('.quote-button').removeClass('slim-quote');
        }
    }
}
scrollHead();
$(window).scroll(scrollHead)



//Mobile Menu


$('.mob-btn').click(function(event){

  $('body').toggleClass('open');
  event.stopPropagation();

})

$('.menu').click(function(event){

  event.stopPropagation();

})
$('.overlay').click(function(){
  if($('body').hasClass('open')){
    $('body').removeClass('open');
  }
});

$('.subnav ul').clone().prependTo('.main-nav');

$('ul.menu li:has(ul)').addClass('submenu');
$('ul.menu li:has(ul)').append( "<i></i>" );

$('ul.menu i').click(function(){
 $(this).parent('li').toggleClass('open');
})


//Slick


$('.bnr-slide').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false
});


$('.banner .slick-dots').prependTo('.banner-text');


$('.tstmnal-otr').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false
});










