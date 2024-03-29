window.addEventListener("load", (event) => {

    const form = document.getElementById("form");
    const placeName = document.getElementById("Name");
    const address = document.getElementById("street");
    const phoneNumber = document.getElementById("phoneNumber");
    const residue = document.getElementById("selectResidue");


    form.addEventListener("submit", (e) => {
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
            formItem.className = "formContent"
        }

    }

    function checkInputAddress() {
        const addressValue = address.value;

        if (addressValue === "") {
            errorInput(address, "ENDEREÇO não preenchido!")
        } else {
            const formItem = address.parentElement;
            formItem.className = "formContent"
        }


    }


    function checkInputPhoneNumber() {
        const phoneNumberValue = phoneNumber.value;

        if (phoneNumberValue === "") {
            errorInput(phoneNumber, "NÚMERO DE CONTATO não preenchido!")
        } else if (phoneNumberValue.length < 9) {
            errorInput(phoneNumber, "O número de contato precisa ter  9 CARACTERES.")
        } else {
            const formItem = phoneNumber.parentElement;
            formItem.className = "formContent"
        }


    }


    function checkInputResidue() {
        const residueValue = residue.value;

        if (residueValue === "") {
            errorInput(residue, "RESÍDUO não preenchido!")
        } else {
            const formItem = residue.parentElement;
            formItem.className = "formContent"
        }


    }


    function checkForm() {
        checkInputPlaceName();
        checkInputAddress();
        checkInputPhoneNumber();
        checkInputResidue();
        const sucessMessage = document.querySelector('.msg')

        const formItems = form.querySelectorAll(".formContent")

        const isValid = [...formItems].every((item) => {
            return item.className === "formContent"
        });

        if (isValid) {

            sucessMessage.innerHTML = "Cadastro salvo!";
            sucessMessage.classList.add("sucess");

            setTimeout(() => {
                sucessMessage.innerHTML = "";
                sucessMessage.classList.remove("sucess");
            }, 5000);

        }

    }


    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a")

        textMessage.innerText = message;

        formItem.className = "formContent error"

    }
});


$(() => {

    $("#sendPontoColeta").click((e) => {
        e.preventDefault();


        const data = {
            name: $("#Name").val(),
            street: $("#street").val(),
            number: $("#AddressNumber").val(),
            // phoneNumber: $("#phoneNumber").val(),
            neighborhood_Id: $("#neighborhood").val(),
            // selectResidue: $("#selectResidue").val(),
            user_Id: $("#User").val()
        };
        console.log(data)
        $.ajax({
            type: "POST",
            url: "https://localhost:7249/cadastroponto",
            data: JSON.stringify(data),
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem(`token`)}`,
        //       },
            success: (result) => {
                location.href = "cadastroPonto.html";
            },
            contentType: "application/json",
            dataType: "json",
        });
    });
});