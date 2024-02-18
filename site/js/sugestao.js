const navHome = document.querySelector('.navHome')
const navigationBar = document.querySelector('.navigationBar')
const menuNav = document.querySelector('.menuNav')

navigationBar.addEventListener('click', () => {
    navHome.classList.toggle('ativo');
    navigationBar.classList.toggle('ativo');
    menuNav.classList.toggle('ativo');
  })

