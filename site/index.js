function showModalHeaderMenu() {
    let modal = document.querySelector('.header-modal-menu')
    modal.classList.add(`modal-active`);
}

function showModalHeaderMenuResiduos() {
    let modal = document.querySelector('.header-modal-menu-residuos')
        modal.classList.add(`modal-active`);
}

let openModalMenuResiduos = document.querySelectorAll(".open-modal-menu-residuos");
for (let open of openModalMenuResiduos) {
  open.addEventListener(`click`, showModalHeaderMenuResiduos);
}