function SHOW_MODAL_LOGIN() {
    let modal = document.querySelector('#modalLogin')
    modal.classList.add(`modalLoginActive`);
}

function CLOSE_MODAL_LOGIN() {
    let modal = document.querySelector('#modalLogin')
    modal.classList.remove(`modalLoginActive`);
}

window.addEventListener("load", (event) => {
 
    const usuario = document.querySelector(`#insertUserLogin`)
    const senha = document.querySelector(`#insertPasswordLogin`)
 
    const button = document.querySelector(`#login`)
 
 
    button.addEventListener(`click`, (e) => {
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
            },3000);
        }
        else {
            window.location = "index-logado.html"
        }
        
    })
})
        