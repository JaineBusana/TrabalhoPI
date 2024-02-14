window.addEventListener("load", (event) => {

    const usuario = document.querySelector(`#insertUserLogin`)
    const senha = document.querySelector(`#insertPasswordLogin`)

    const button = document.querySelector(`#login`)


    button.addEventListener(click, (e) => {
        e.preventDefault()

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

                if (!!localStorage.getItem(token)) {
                    location.href = "indexLogado.html";
                }
                $("#login").click((e) => {
                    e.preventDefault();

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
                            localStorage.setItem(token, result.token);
                            localStorage.setItem(userName, result.user.name);
                            localStorage.setItem(userRole, result.user.role);
                            location.href = "indexLogado.html";
                        },
                        contentType: "application/json",
                        dataType: "json",
                    });
                });
            });
        }
   
    })
    localStorage.getItem(userRole);
    if (userRole == "cidadao") {
        var url = "https://www.google.com/?/links";
        openLink(url);
    }
    if (result.user.role == "coletor") {
        var url = "https://www.bing.com/"
        openLink(url);
    }

    function openLink(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
})