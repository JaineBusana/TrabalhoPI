const placeCpfHistoric = document.getElementById("placeCpfHistoric")
const placeNameHistoric = document.querySelector(".placeNameHistoric");
const placeQuantityHistoric = document.getElementById("placeQuantityHistoric");
const form = document.getElementById('formHistoric');
const btnAddHistoric = document.getElementById('btnAddHistoric');
const modal = document.querySelector('.containerHistoric');
const btnCloseHistoric = document.getElementById('btnCloseHistoric');
const modalConfirmn = document.querySelector('.modalContainerConfirmn')


$(document).ready(function () {
    $('.placeNameHistoric').select2();
});


function openModalConfirmn() {
    modalConfirmn.classList.add('activeConfirmn')
}

function closeModalConfirmn() {
    modalConfirmn.classList.remove('activeConfirmn')
    location. reload();
}





// DUPLICA OS INPUTS ⬇️  !!!!!! NOMES DOS INPUTS MULTIPLICAM
btnAddHistoric.addEventListener('click', function (event) {

    event.preventDefault();

     const div2 = document.querySelector(".addHistoric").cloneNode(true)
     document.querySelector(".addHistoric").after(div2)

});



// VALIDAÇÃO ⬇️
window.addEventListener("load", (event) => {



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
    
        const formItems = form.querySelectorAll(".formContentHistoric");
        const isValid = [...formItems].every((item) => {
            return item.className === "formContentHistoric";
        });
    
        if (isValid) {
            openModalConfirmn();
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
   
    document.querySelector(".addHistoric").remove();
    
}