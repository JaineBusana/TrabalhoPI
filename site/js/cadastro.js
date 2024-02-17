const btnSejaColetor = document.querySelector('.btnSejaColetor')
const campSocialNumber = document.querySelector('.campSocialNumber')
const formCadastreColetor = document.querySelector('.formCadastreColetor')
// Validadores
const form = document.getElementById("formCadastre")
const username = document.getElementById("username")
const email = document.getElementById("email")
const userSocialNumber = document.getElementById("userSocialNumber")
const address = document.getElementById("address")
const phone = document.getElementById("phone")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("confirmationPassword")
var coletor = "nao";

btnSejaColetor.addEventListener('click', function (event) {
    campSocialNumber.classList.toggle('active');
    if(coletor == "sim") {
        coletor = "nao"
        return
    }
    coletor = "sim"
});
btnSejaColetor.addEventListener('click', function (event) {
    formCadastreColetor.classList.toggle('active');
});
btnSejaColetor.addEventListener('click', function (event) {
    btnSejaColetor.classList.toggle('active');
});


email.addEventListener('blur', () => {
    checkInputEmail();
})
username.addEventListener('blur', () => {
    checkInputUsername();
})
userSocialNumber.addEventListener('blur', () => {
    checkInputSocialNumber();
})
address.addEventListener('blur', () => {
    checkInputAddress();
})
phone.addEventListener('blur', () => {
    checkInputPhone();
})
password.addEventListener('blur', () => {
    checkInputPassword();
})
passwordConfirmation.addEventListener('blur', () => {
    checkInputpasswordConfirmation();
})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();

})

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputSocialNumber();
    checkInputPhone();
    checkInputAddress();
    checkInputPassword();
    checkInputpasswordConfirmation()

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
function checkInputSocialNumber() {
    const userSocialNumberValue = userSocialNumber.value;
    if (userSocialNumberValue === "") {
        erroInput(userSocialNumber, "Preencha o Número Social.")
    } else if (userSocialNumberValue.length < 11) {
        erroInput(userSocialNumber, "Número Social incorreto.")
    }else if (userSocialNumberValue.length > 14) {
        erroInput(userSocialNumber, "Número Social incorreto.")
    }else if (userSocialNumberValue.length == 12) {
        erroInput(userSocialNumber, "Número Social incorreto.")
    }else if (userSocialNumberValue.length == 13) {
        erroInput(userSocialNumber, "Número Social incorreto.")
    } else {
        const formItem = userSocialNumber.parentElement;
        formItem.className = "formContent"
    }
}
function checkInputPhone() {
    const phoneValue = phone.value;
    if (phoneValue === "") {
        erroInput(phone, "Preencha o Telefone.")
    } else {
        const formItem = phone.parentElement;
        formItem.className = "formContent"
    }

}
function checkInputAddress() {
    const addressValue = address.value;
    if (addressValue === "") {
        erroInput(address, "Preencha o Endereço.")
    } else {
        const formItem = address.parentElement;
        formItem.className = "formContent"
    }

}
function checkInputPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {
        erroInput(password, "Preencha a Senha.")
    } else if (passwordValue.length < 8) {
        erroInput(password, "Senha precisa ter no minimo 8 caracteres.")
    } else {
        const formItem = password.parentElement;
        formItem.className = "formContent"
    }
}
function checkInputpasswordConfirmation() {
    const passwordConfirmationValue = passwordConfirmation.value;
    const passwordValue = password.value;
    if (passwordConfirmationValue === "") {
        erroInput(passwordConfirmation, "Preencha a Senha.")
    } else if (passwordValue !== passwordConfirmationValue) {
        erroInput(passwordConfirmation, "As senhas nao são iguais!")
    } else {
        const formItem = passwordConfirmation.parentElement;
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
    $(".btnCadastro").click((e) => {
        e.preventDefault();
        
        const data = {
            Name: $("#username").val(),
            Email: $("#email").val(),
            SocialNumber: $("#userSocialNumber").val(),
            Password: $("#password").val()
        };

        if(data.SocialNumber.length == 11) {
            data.type = "cidadao"
        };
        if(data.SocialNumber.length == 14) {
            data.type = "coletor"
        };
        if(data.Name == "") {
            data.Name = null
            alert("Prencha o Nome do usuario!")
        };
        if(data.Email == "") {
            data.Email = null
            alert("Prencha o Email do usuario!")
        };
        if(data.Password == "") {
            data.Password = null
            alert("Crie uma senha para o usuario!")
        };
        if(data.Password.length < 8) {
            data.Password = null
            alert("A senha deve ter mais de 8 digitos!")
        };
        if(coletor == "sim" && data.SocialNumber.length == 11) {
            data.type = null
            alert("O seu número social deve ser um CNPJ para poder ser Coletor!")
        };
        if(coletor == "nao" && data.SocialNumber.length == 14) {
            data.type = null
            alert("Um número social de CNPJ não pode ser cadastrado como Cidadão, ultilize seu CPF!")
        };

        $.ajax({
            type: "POST",
            url: "https://localhost:7249/user",
            data: JSON.stringify(data),
            sucess: (result) => {
                console.log(result);
            },
            contentType: "application/json",
            dataType: "json",
        });
    });
});