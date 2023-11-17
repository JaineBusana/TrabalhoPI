function mostrarModal() {
    let modal = document.querySelector("#modal");
    modal.classList.add(`modal-active`);
}

function fecharModal() {
    let modal = document.querySelector("#modal");
    modal.classList.remove(`modal-active`);
}

let abrirModal = document.querySelectorAll(".abrir-modal");
for (let abrir of abrirModal) {
    abrir.addEventListener(`click`, mostrarModal);
}