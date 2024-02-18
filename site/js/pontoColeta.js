const modalContainerPontoColeta = document.querySelector('.cardMeuPonto')
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta')

menu.addEventListener('click', () => {
  modalContainerPontoColeta.classList.toggle('ativo')
});

btnCloseModalPontoColeta.addEventListener('click', () => {
  modalContainerPontoColeta.classList.remove('ativo');
});

function CLOSE_MODAL_PERFIL() {
  modalEditarPerfil.style.display = 'none';
}

function OPEN_MODAL_PERFIL() {
  modalEditarPerfil.style.display = 'flex';
}