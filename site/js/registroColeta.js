const form = document.getElementById('formHistoric');
const btnAddHistoric = document.getElementById('btnAddHistoric');
const modal = document.querySelector('.containerHistoric')


function openModalHistoric() {
    modal.classList.add('active')
}

function closeModalHistoric() {
    modal.classList.remove('active')
}



btnAddHistoric.addEventListener('click', function (event) {
    event.preventDefault();

    const addInputHistoric = document.createElement('div');

    addInputHistoric.classList.add('formContentHistoric');

    const divHistoric = `
    <div class="addNewHistoric">
    <div class="formContentHistoric">
        <label for="placeNameHistoric">Nome do Produto</label>
        <input type="text" id="placeNameHistoric" placeholder="Digite aqui..." />
        <a>Mensagem de Erro</a>
    </div>

    <div class="formContentHistoric">
        <label for="placeQuantityHistoric">Quantidade</label>
        <input type="text" id="placeQuantityHistoric" placeholder="Digite aqui..." />
        <a>Mensagem de Erro</a>
    </div>
</div>

    `;

    addInputHistoric.innerHTML = divHistoric;

    form.insertBefore(addInputHistoric, form.lastElementChild);
});