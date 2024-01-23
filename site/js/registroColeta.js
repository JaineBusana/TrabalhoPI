const modal = document.querySelector('.modalContainerHistoric')

function openModalHistoric() {
    modal.classList.add('active')
}

function closeModalHistoric() {
    modal.classList.remove('active')
}


window.addEventListener("load", (event) => {


    const formHistoric = document.getElementById("formHistoric");
    const placeIdentifier = document.getElementById("placeIdentifier")
    // const address = document.getElementById("address")
    // const phoneNumber = document.getElementById("phoneNumber")
    // const residue = document.getElementById("selectResidue");


    formHistoric.addEventListener("submit", (e) => {
        e.preventDefault();

        checkForm();
    })

    // address.addEventListener("blur", () => {
    //     checkInputAddress();
    // })


    placeIdentifier.addEventListener("blur", () => {
        checkInputPlaceIdentifier();
    })

    // phoneNumber.addEventListener("blur", () => {
    //     checkInputPhoneNumber();
    // })

    // residue.addEventListener("blur", () => {
    //     checkInputResidue();
    // })


    function checkInputPlaceIdentifier() {
        const placeIdentifierValue = placeIdentifier.value;

        if (placeIdentifierValue === "") {
            errorInput(placeIdentifier, " CPF não preenchido!")
        } else {
            const formItem = placeIdentifier.parentElement;
            formItem.className = "formHistoricContent"
        }

    }

    // function checkInputAddress() {
    //     const addressValue = address.value;

    //     if (addressValue === "") {
    //         errorInput(address, "ENDEREÇO não preenchido!")
    //     } else {
    //         const formItem = address.parentElement;
    //         formItem.className = "formHistoricContent"
    //     }


    // }


    // function checkInputPhoneNumber() {
    //     const phoneNumberValue = phoneNumber.value;

    //     if (phoneNumberValue === "") {
    //         errorInput(phoneNumber, "NÚMERO DE CONTATO não preenchido!")
    //     } else if (phoneNumberValue.length < 9) {
    //         errorInput(phoneNumber, "O número de contato precisa ter  9 CARACTERES.")
    //     } else {
    //         const formItem = phoneNumber.parentElement;
    //         formItem.className = "formHistoricContent"
    //     }


    // }


    // function checkInputResidue() {
    //     const residueValue = residue.value;

    //     if (residueValue === "") {
    //         errorInput(residue, "RESÍDUO não preenchido!")
    //     } else {
    //         const formItem = residue.parentElement;
    //         formItem.className = "formHistoricContent"
    //     }


    // }


    function checkForm() {
        checkInputPlaceIdentifier();
        // checkInputAddress();
        // checkInputPhoneNumber();
        // checkInputResidue();
        const sucessMessage = document.querySelector('.msgHistoric')

        const formItems = formHistoric.querySelectorAll(".formHistoricContent")

        const isValid = [...formItems].every((item) => {
            return item.className === "formHistoricContent"
        });

        if (isValid) {

            sucessMessage.innerHTML = "Confirmado!";
            sucessMessage.classList.add("sucess");

            setTimeout(() => {
                sucessMessage.innerHTML = "";
                sucessMessage.classList.remove("sucess");
            }, 5000);
            closeModalHistoric();
        }

    }


    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a")

        textMessage.innerText = message;

        formItem.className = "formHistoricContent error"

    }
});