const navHome = document.querySelector('.navHome')
const navMenu = document.querySelector('.navIndex')
const navigationBar = document.querySelector('.navigationBar')
  
  
  


navigationBar.addEventListener('click', () => {
    navigationBar.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
    navHome.classList.toggle('ativo');
  })