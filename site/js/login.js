function SHOW_MODAL_LOGIN() {
    let modal = document.querySelector('#modalLogin')
    modal.classList.add(`modalLoginActive`);
}

function CLOSE_MODAL_LOGIN() {
    let modal = document.querySelector('#modalLogin')
    modal.classList.remove(`modalLoginActive`);
}


window.addEventListener("load", (event) => {
    $('body').on('click', '#login', (event) => {
        event.preventDefault()

        const usuario = document.querySelector(`#insertUserLogin`)
        const senha = document.querySelector(`#insertPasswordLogin`)
        const errorMessage = document.querySelector('.msg')
        const value = {
            usuario: usuario.value,
            senha: senha.value,
        }

        if (value.usuario === '' || value.senha === '') {
            errorMessage.innerHTML = "Preencha todos os campos";
            errorMessage.classList.add("error");

            setTimeout(() => {
                errorMessage.innerHTML = "";
                errorMessage.classList.remove("error");
            }, 3000);
        }
        else {
            $(() => {
                if (!!localStorage.getItem(`token`)) {
                    location.href = "index.html";
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
                            console.log(result);
                            localStorage.clear();
                            localStorage.setItem(`token`, result.token);
                            localStorage.setItem(`id`, result.user.id);
                            localStorage.setItem(`userName`, result.user.name);
                            localStorage.setItem('userEmail', result.user.email);
                            localStorage.setItem(`userType`, result.user.type);
                            localStorage.setItem(`userScore`, result.user.score);
                            localStorage.setItem(`userSocialNumber`, result.user.socialNumber);
                            localStorage.setItem(`userEmail`, result.user.email);
                            localStorage.setItem(`userPassword`, result.user.password);
                            console.log(localStorage.getItem('userScore'))
                            location.href = "index.html";
                        },
                        contentType: "application/json",
                        dataType: "json",
                    });
                }
            });
        }
    })

    $('body').on('click', '#exitPerfil', (event) => {
        localStorage.clear();
    })
})