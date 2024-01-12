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
  $(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });