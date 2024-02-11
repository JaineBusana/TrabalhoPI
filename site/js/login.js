window.addEventListener("load", (event) => {

    
    $('body').on('click', '#login', (event) => {

        const usuario = document.querySelector(`#insertUserLogin`)
        const senha = document.querySelector(`#insertPasswordLogin`)
        

        event.preventDefault();
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
                    $.get('indexLogado.html', (result) => {
                        $('header').html(result);
                    });

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
                            localStorage.setItem(`token`, result.token);
                            localStorage.setItem(`userName`, result.user.name);
                            localStorage.setItem(`userRole`, result.user.role);
                            $.get('indexLogado.html', (result) => {
                                $('header').html(result);
                            });
                            

                           
                        },
                        contentType: "application/json",
                        dataType: "json",
                    });
                });
            });
        }
    })

})



