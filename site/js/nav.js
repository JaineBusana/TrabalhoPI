const menu = document.querySelector('.navigationBar');
const NavMenu = document.querySelector('.menuNav')
const NavHome = document.querySelector('.navHome')
const carousel1 = document.querySelector('.carousel1')
const modalProfilePicture = document.querySelector('.modalProfilePicture')
const btnProfilePicture = document.querySelector('.btnProfilePicture')

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  NavMenu.classList.toggle('ativo');
  NavHome.classList.toggle('ativo');
})

btnProfilePicture.addEventListener('click', () =>{
  modalProfilePicture.classList.toggle('ativo');
})