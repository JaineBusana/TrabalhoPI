const menu = document.querySelector('.navigationBar');
const NavMenu = document.querySelector('.menuNav')
const NavHome = document.querySelector('.navHome')
const carousel1 = document.querySelector('.carousel1')

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  NavMenu.classList.toggle('ativo');
  NavHome.classList.toggle('ativo')
})