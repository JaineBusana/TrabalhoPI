$(document).ready(function () {
    $('.placeNameHistoric').select2();
});


const form = document.getElementById('formHistoric');
const btnAddHistoric = document.getElementById('btnAddHistoric');
const modal = document.querySelector('.containerHistoric');
const btnCloseHistoric = document.getElementById('btnCloseHistoric');



// ABRE E FECHA MODAL⬇️
function openModalHistoric() {
    modal.classList.add('active')
}




// DUPLICA OS INPUTS ⬇️  !!!!!! NOMES DOS INPUTS MULTIPLICAM
btnAddHistoric.addEventListener('click', function (event) {

    event.preventDefault();

    const addInputHistoric = document.createElement('div');
    addInputHistoric.classList.add('formContentHistoric');


    const divHistoric = `
    <div class="addNewHistoric">
    <div class="formContentHistoric">
        <label for="placeNameHistoric">Nome do Produto</label>
        <input type="text" class="placeNameHistoric" placeholder="Digite aqui..." />
        <a>Mensagem de Erro</a>
    </div>
    <div class="formContentHistoric">
        <label for="placeQuantityHistoric">Quantidade</label>
        <input type="text" id="placeQuantityHistoric" placeholder="Digite aqui..." />
        <a>Mensagem de Erro</a>
    </div>
</div>`;


    addInputHistoric.innerHTML = divHistoric;
    form.insertBefore(addInputHistoric, form.lastElementChild);
});



// VALIDAÇÃO ⬇️
window.addEventListener("load", (event) => {

    const placeCpfHistoric = document.getElementById("placeCpfHistoric")
    const placeNameHistoric = document.querySelector(".placeNameHistoric");
    const placeQuantityHistoric = document.getElementById("placeQuantityHistoric");


    form.addEventListener("submit", (e) => {

        e.preventDefault();

        checkForm();
    })


    placeCpfHistoric.addEventListener("blur", () => {
        checkInputCPF();
    })


    placeNameHistoric.addEventListener("blur", () => {
        checkInputName();
    })

    placeQuantityHistoric.addEventListener("blur", () => {
        checkInputQuantity();
    })

    function checkInputCPF() {
        const cpfValue = placeCpfHistoric.value;
        if (cpfValue === "") {
            errorInput(placeCpfHistoric, "Não preenchido!")
        } else if (cpfValue.length < 11) {
            errorInput(placeCpfHistoric, "O CPF precisa ter  11 CARACTERES.")
        } else {
            const formItem = placeCpfHistoric.parentElement;
            formItem.className = "formContentHistoric"
        }
    }

    function checkInputName() {
        const nameValue = placeNameHistoric.value;
        if (nameValue === "") {
            errorInput(placeNameHistoric, "Não preenchido!")
        } else {
            const formItem = placeNameHistoric.parentElement;
            formItem.className = "formContentHistoric"
        }
    }

    function checkInputQuantity() {
        const quantityValue = placeQuantityHistoric.value;
        if (quantityValue === "") {
            errorInput(placeQuantityHistoric, "Não preenchida!")
        } else {
            const formItem = placeQuantityHistoric.parentElement;
            formItem.className = "formContentHistoric"
        }
    }

    function checkForm() {

        checkInputCPF();
        checkInputName();
        checkInputQuantity();

        const formItems = form.querySelectorAll(".formContentHistoric")
        const isValid = [...formItems].every((item) => {
            return item.className === "formContentHistoric"
        });

        if (isValid) {

            alert("Registro Salvo!");
            window.location.reload();
        }
    }


    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a")
        textMessage.innerText = message;
        formItem.className = "formContentHistoric error"
    }
});

function removeInput() {
    const inputNew = document.querySelector(".addNewHistoric");
    if (inputNew) {
        inputNew.remove();
    }
}