const modal = document.querySelector('.modalContainerHistoric')

function openModalHistoric() {
    modal.classList.add('active')
}

function closeModalHistoric() {
    modal.classList.remove('active')
}

window.addEventListener("load", (event) => {

    const identifier = document.getElementById("placeIdentifier")

    identifier.addEventListener("blur", () => {
        checkIdentifier();
    })

    function checkIdentifier() {
        const identifierValue = identifier.value;

        if (identifierValue === "") {
            errorInput(identifier, "CPF não preenchido!")
        } else if (identifierValue.length < 11) {
            errorInput(identifier, "O CPF precisa ter  11 CARACTERES.")
        } else {
            const formItem = identifier.parentElement;
            formItem.className = "modalHistoric"
        }

    }

    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a")

        textMessage.innerText = message;

        formItem.className = "modalHistoric error"

    }

});
