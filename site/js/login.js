const loginBtn = document.querySelector('#login')

function SHOW_MODAL_LOGIN() {
    let modal = document.querySelector('#modalLogin')
    modal.classList.add(`modalLoginActive`);
}

function CLOSE_MODAL_LOGIN() {
    let modal = document.querySelector('#modalLogin')
    modal.classList.remove(`modalLoginActive`);
}

function enableLoginBtn() {
    loginBtn.classList.remove("disabled")
    loginBtn.disabled = false
}

function disableLoginBtn() {
    loginBtn.classList.add("disabled")
    loginBtn.disabled = true
}

function showNotification(msg) {
    const errorMessage = document.querySelector('.msg')
    errorMessage.innerHTML = msg;
    errorMessage.classList.add("error");
    enableLoginBtn()

    setTimeout(() => {
        errorMessage.innerHTML = "";
        errorMessage.classList.remove("error");
    }, 3000);
}

// teste
window.addEventListener("load", (event) => {
    $('body').on('click', '#login', (event) => {
        disableLoginBtn()
        event.preventDefault()

        const usuario = document.querySelector(`#insertUserLogin`)
        const senha = document.querySelector(`#insertPasswordLogin`)
        const value = {
            usuario: usuario.value,
            senha: senha.value,
        }

        if (value.usuario === '' || value.senha === '') {
            showNotification("Preencha todos os campos")
        }
        else {
            $(() => {
                if (!!localStorage.getItem(`token`)) {
                    location.href = "indexLogado.html";
                }
                else {
                    const data = {
                        email: $("#insertUserLogin").val(),
                        password: $("#insertPasswordLogin").val()
                    };

                    $.ajax({
                        type: "POST",
                        url: "https://localhost:7249/user/login",
                        data: JSON.stringify(data),
                        success: (result) => {
                            localStorage.clear();
                            localStorage.setItem(`token`, result.token);
                            localStorage.setItem(`userEmail`, result.user.email);
                            localStorage.setItem(`userName`, result.user.name);
                            localStorage.setItem(`userType`, result.user.type);
                            location.href = "indexLogado.html";
                        },
                        error: (jqXHR) => {
                            showNotification(jqXHR.responseText)
                        },
                        contentType: "application/json",
                        dataType: "json",
                    });
                }
            });
        }
    })
})