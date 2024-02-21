const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

function OPEN_MODAL_PERFIL() {
    modalPerfil.style.display = 'flex';
}

function CLOSE_MODAL_PERFIL() {
    modalPerfil.style.display = 'none';
}