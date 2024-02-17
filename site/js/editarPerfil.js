function modalProfileEditingOpen() {
    modalEditarPerfil.style.display = 'flex';
}

function modalProfileEditingClose() {
    modalEditarPerfil.style.display = 'none';
}

const form = document.getElementById("conteinerEP")
const username = document.getElementById("changeNameEP")
const email = document.getElementById("changeEmailEP")

email.addEventListener('blur', () => {
    checkInputEmail();
})
username.addEventListener('blur', () => {
    checkInputUsername();
})

function checkForm() {
    checkInputUsername();
    checkInputEmail();

    const formItems = form.querySelectorAll(".formContent")
    const isValid = [...formItems].every((item) => {
        return item.className === "formContent"
    })
    if (isValid) {
        window.location = "indexLogado.html"
    }

}

function checkInputUsername() {
    const usernameValue = username.value;
    if (usernameValue === "") {
        erroInput(username, "Preencha o Nome.")
    } else {
        const formItem = username.parentElement;
        formItem.className = "formContent"
    }

}
function checkInputEmail() {
    const emailValue = email.value;
    if (emailValue === "") {
        erroInput(email, "Preencha o Email.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "formContent"
    }

}

function erroInput(input, message) {
    const formItem = input.parentElement;
    const textMensage = formItem.querySelector("a")

    textMensage.innerText = message;
    formItem.className = "formContent error"

}

$(() => {
    $("#saveChangesEP").click((e) => {
        e.preventDefault();
        
        const data = {
            Name: $("#changeNameEP").val(),
            Email: $("#changeEmailEP").val(),
        };

        $.ajax({
            type: "PUT",
            url: "https://localhost:7249/user",
            data: JSON.stringify(data),
            sucess: (result) => {
                console.log(result);
            },
            contentType: "application/json",
            dataType: "json",
        });
        console.log(data);
    });
});