const form = document.getElementById("form")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm()
})
nome.addEventListener ("blur", () => {
    checkInputNome()
});
email.addEventListener ("blur" , () => {
    checkInputEmail()
});
password.addEventListener ("blur" , () => {
    checkInputPassword()
});
passwordConfirmation.addEventListener ("blur" , () => {
    checkInputPasswordConfirmation()
});

function checkInputNome() {
    const nomeValue = nome.value;

    if (nomeValue === "") {
        //monstrar mensagem de erro 
        erroInput(nome, "O nome é obrigatório")

    } else {
        const formItem = nome.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        erroInput(email, "O email é obrigatório")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        erroInput(password, " A senha e obrigatória")
    } else if (passwordValue.length < 8) {
        erroInput(password, " Precisa ter no mínimo 8 caracteres")
    }
    else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if (passwordConfirmationValue === "") {
        erroInput(passwordConfirmation, "A confirmação de senha é obrigatória");
    } else if (passwordConfirmationValue !== passwordValue) {
        erroInput(passwordConfirmation, "As senhas não são iguais")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"

    }
}

function checkForm() {
    checkInputNome();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItens = form.querySelectorAll(".form-content")
    const isValid = [...formItens].every((item) => {
        return item.className === "form-content"
    });
    if (isValid) {
        alert("CADASTRADO COM SUCESSO")
    }

}

function erroInput(input, mensagem) {
    const formItem = input.parentElement;
    const textMensage = formItem.querySelector("a")

    textMensage.innerText = mensagem

    formItem.className = "form-content error"
}



