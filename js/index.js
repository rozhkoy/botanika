const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.slider__arrow-left',
        prevEl: '.slider__arrow-right',
    }

});


const navbarBttn = document.querySelector('.hamburger-menu');
const bar = document.querySelector('.bar');
const headerWrap = document.querySelector('.header-wrap');
navbarBttn.addEventListener('click', navbar)

function navbar() {
    bar.classList.toggle('animate');
    headerWrap.classList.toggle('open__nav');
}