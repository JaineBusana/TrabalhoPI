const menu = document.querySelector('#openModalPontoColeta');
const NavHome = document.querySelector('.modalContainerPontoColeta')


menu.addEventListener('click', () => {
  NavHome.classList.toggle('ativo')
})
