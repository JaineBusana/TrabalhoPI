const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu')
const NavHome = document.querySelector('.nav-home')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    NavHome.classList.toggle('ativo')
})
$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel();
   
  });