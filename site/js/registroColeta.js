const placeCpfHistoric = document.getElementById("placeCpfHistoric")
const placeNameHistoric = document.getElementById("placeNameHistoric");
const placeQuantityHistoric = document.getElementById("placeQuantityHistoric");
const placeCollectPointHistoric = document.getElementById("placeCollectPointHistoric");
const form = document.getElementById('formHistoric');
const btnAddHistoric = document.getElementById('btnAddHistoric');
const btnHistoric = document.getElementById('btnHistoric');
const modal = document.querySelector('.containerHistoric');
const btnCloseHistoric = document.getElementById('btnCloseHistoric');
const modalConfirmn = document.querySelector('.modalContainerConfirmn')

// $(document).ready(function () {
//     $('.placeNameHistoric').select2();
// });

$(document).ready(function () {
    $('#placeCpfHistoric').mask('000.000.000-00');

    $.ajax({
        type: "GET",
        url: `https://localhost:7249/pontoColeta/getByUserEmail?email=${localStorage.getItem('userEmail')}`,
        success: (result) => {
            result.forEach(element => {
                placeCollectPointHistoric.appendChild(new Option(element.name, element.id))
            });
        },
        error: (jqXHR) => {
            errorInput(placeCollectPointHistoric, jqXHR.responseText)
        },
        contentType: "application/json",
        dataType: "json",
    });
});

function removeAll(selectBox) {
    while (selectBox.options.length > 1) {
        selectBox.remove(1);
    }
}

placeCollectPointHistoric.addEventListener("change", () => {
    removeAll(placeNameHistoric)

    $.ajax({
        type: "GET",
        url: `https://localhost:7249/residue?email=${localStorage.getItem('userEmail')}&collectionPointId=${placeCollectPointHistoric.value}`,
        success: (result) => {
            result.forEach(element => {
                placeNameHistoric.appendChild(new Option(element.name, element.id))
            });
        },
        error: (jqXHR) => {
            errorInput(placeNameHistoric, jqXHR.responseText)
        },
        contentType: "application/json",
        dataType: "json",
    });
});

function blockCollectPoint() {
    residuos = Array.from(form.querySelectorAll('#placeNameHistoric'))
    return residuos.some((item) => item.value != 0)
}


// ABRE E FECHA MODAL ⬇️ 
function openModalConfirmn() {
    modalConfirmn.classList.add('activeConfirmn')
}

function closeModalConfirmn() {
    modalConfirmn.classList.remove('activeConfirmn')
    location.reload();
}


// DUPLICA OS INPUTS ⬇️ 
btnAddHistoric.addEventListener('click', function (event) {
    event.preventDefault();
    const div2 = document.querySelector(".addHistoric").cloneNode(true)
    document.querySelector(".addHistoric").after(div2)
});

btnCloseHistoric.addEventListener('click', function (event) {
    const divsQuantity = document.querySelector('.formContentHistoric');

    if (divsQuantity.length > 1) {
        document.querySelector(".addHistoric").remove();
    } else {
        location.reload();
    }
});

// function removeInput() {

//     document.querySelector(".addHistoric").remove();

// }


// VALIDAÇÃO ⬇️
window.addEventListener("load", (event) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkForm();

        const formItems = form.querySelectorAll(".formContentHistoric");
        const isValid = [...formItems].every((item) => {
            return item.className === "formContentHistoric";
        });

        if (isValid) {
            let items = [];
            const residuos = form.querySelectorAll('#placeNameHistoric');
            const quantidades = form.querySelectorAll('#placeQuantityHistoric');
            const collectPoint = placeCollectPointHistoric.value;
            const cpf = placeCpfHistoric.value;

            if (residuos.length === quantidades.length) {
                residuos.forEach((item, index) => {
                    items.push({
                        socialNumber: cpf,
                        quantity: quantidades[index].value,
                        user_Id: localStorage.getItem('userID'),
                        collectResidue_CollectionPoint_Id: collectPoint,
                        collectResidue_Residue_Id: item.value
                    })
                })

                $.ajax({
                    type: "POST",
                    url: `https://localhost:7249/registroColeta/addMultiple`,
                    data: JSON.stringify(items),
                    complete: (jqXHR) => {
                        if (jqXHR.status == 200) {
                            openModalConfirmn();
                        }
                        else {
                            alert(jqXHR.responseText);
                        }
                    },
                    contentType: "application/json",
                    dataType: "json",
                })
            }
        }
    });

    placeCpfHistoric.addEventListener("blur", () => {
        checkInputCPF();
    });

    placeNameHistoric.addEventListener("blur", () => {
        checkInputName();
    });

    placeQuantityHistoric.addEventListener("blur", () => {
        checkInputQuantity();
    });

    placeCollectPointHistoric.addEventListener("blur", () => {
        checkInputCollectPoint();
    });

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
        if (nameValue == 0) {
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

    function checkInputCollectPoint() {
        const cpValue = placeCollectPointHistoric.value;
        if (cpValue == 0) {
            errorInput(placeCollectPointHistoric, "Não preenchido!")
        } else {
            const formItem = placeCollectPointHistoric.parentElement;
            formItem.className = "formContentHistoric"
        }
    }

    function checkForm() {
        checkInputCPF();
        checkInputName();
        checkInputQuantity();
        checkInputCollectPoint();
    }
});

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "formContentHistoric error"
}