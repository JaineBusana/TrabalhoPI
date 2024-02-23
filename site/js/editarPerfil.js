function OPEN_MODAL_EDITAR_PERFIL() {
    modalPerfil.style.display = 'none';
    modalEditarPerfil.style.display = 'flex';
}

function CLOSE_MODAL_EDITAR_PERFIL() {
    modalEditarPerfil.style.display = 'none';
    modalPerfil.style.display = 'flex';
}

// $(() => {
//     $("#saveChangesEP").click((e) => {
//         e.preventDefault();

//         const data = {
//             id 
//         };

//         $.ajax({
//             type: "GET",
//             url: "https://localhost:7249/user",
//             data: JSON.stringify(data),
//             sucess: (result) => {
//                 console.log(result);
//             },
//             contentType: "application/json",
//             dataType: "json",
//         });
//         console.log(data);
//     });
// });

const form = document.getElementById("conteinerEP")
const username = document.getElementById("changeNameEP")
const email = document.getElementById("changeEmailEP")
const password = document.getElementById("changePasswordEP")

email.addEventListener('blur', () => {
    checkInputEmail();
})
username.addEventListener('blur', () => {
    checkInputUsername();
})
password.addEventListener('blur', () => {
    checkInputPassword();
})

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();

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
function checkInputPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {
        erroInput(password, "Preencha a senha.")
    }
    else if (passwordValue.length < 8) {
        erroInput(password, "A senha deve ter mais de 8 digitos.")
    }
    else {
        const formItem = password.parentElement;
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
    var id = localStorage.getItem("id");
    var type = localStorage.getItem("userType");
    var name = localStorage.getItem("userName");
    var email = localStorage.getItem("userEmail");
    var password = localStorage.getItem("userPassword");
    var socialNumber = localStorage.getItem("userSocialNumber");
    var score = localStorage.getItem("userScore");
    console.log(name);
    console.log(email);
    console.log(password);

    $("#saveChangesEP").click((e) => {
        e.preventDefault();

        const data = {
            Id: id,
            Name: $("#changeNameEP").val(),
            Email: $("#changeEmailEP").val(),
            Password: $("#changePasswordEP").val(),
            SocialNumber: socialNumber,
            Type: type,
            Score: score,
        };

        $.ajax({
            type: "PUT",
            url: "https://localhost:7249/user",
            data: JSON.stringify(data),
            success: (result) => {
                console.log(result);
                console.log(data);
                location.href = "index.html";
                alert("Suas alterções foram salvas com sucesso, realize o login novamente!")
                localStorage.clear();
            },
            contentType: "application/json",
            dataType: "json",
        });
    });
});