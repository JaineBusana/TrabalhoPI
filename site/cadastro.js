window.addEventListener("load", (event) => {

    const form = document.getElementById("form");
    const placeName = document.getElementById("placeName")
    const address = document.getElementById("address")
    const phoneNumber = document.getElementById("phoneNumber")
    const residue = document.getElementById("select-residue");


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        checkForm();
    })

    address.addEventListener("blur", () => {
        checkInputAddress();
    })


    placeName.addEventListener("blur", () => {
        checkInputPlaceName();
    })

    phoneNumber.addEventListener("blur", () => {
        checkInputPhoneNumber();
    })

    residue.addEventListener("blur", () => {
        checkInputResidue();
    })


    function checkInputPlaceName() {
        const placeNameValue = placeName.value;

        if (placeNameValue === "") {
            errorInput(placeName, " NOME do Ponto de Coleta não preenchido!")
        } else {
            const formItem = placeName.parentElement;
            formItem.className = "form-content"
        }

    }

    function checkInputAddress() {
        const addressValue = address.value;

        if (addressValue === "") {
            errorInput(address, "ENDEREÇO não preenchido!")
        } else {
            const formItem = address.parentElement;
            formItem.className = "form-content"
        }


    }


    function checkInputPhoneNumber() {
        const phoneNumberValue = phoneNumber.value;

        if (phoneNumberValue === "") {
            errorInput(phoneNumber, "NÚMERO DE CONTATO não preenchido!")
        } else if (phoneNumberValue.length < 9) {
            errorInput(phoneNumber, "O número de contato precisa ter  8 CARACTERES.")
        } else {
            const formItem = phoneNumber.parentElement;
            formItem.className = "form-content"
        }


    }


    function checkInputResidue() {
        const residueValue = residue.value;

        if (residueValue === "") {
            errorInput(residue, "RESÍDUO não preenchido!")
        } else {
            const formItem = residue.parentElement;
            formItem.className = "form-content"
        }


    }


    function checkForm() {
        checkInputPlaceName();
        checkInputAddress();
        checkInputPhoneNumber();
        checkInputResidue();

        const formItems = form.querySelectorAll(".form-content")

        const isValid = [...formItems].every((item) => {
            return item.className === "form-content"
        });

        if (isValid) {
            alert("PONTO DE COLETA CADASTRADO COM SUCESSO!")
        }

    }


    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a")

        textMessage.innerText = message;

        formItem.className = "form-content error"

    }
});