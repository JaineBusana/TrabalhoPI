const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu')
const NavHome = document.querySelector('.nav-home')
const carousel1 = document.querySelector('.carousel1')

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  NavMenu.classList.toggle('ativo');
  NavHome.classList.toggle('ativo')
})
$(document).ready(function () {

  $(".owl-carousel").owlCarousel();

});
$(document).ready(function () {
            $(".carousel1").owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                dots: false,
                center: true,
                items: 1,
            });

        });