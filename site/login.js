function SHOW_MODAL_LOGIN() {
    let modal = document.querySelector('#modal-login')
    modal.classList.add(`modal-login-active`);
}

function CLOSE_MODAL_LOGIN() {
    let modal = document.querySelector('#modal-login')
    modal.classList.remove(`modal-login-active`);
}

window.addEventListener("load", (event) => {
 
    const usuario = document.querySelector(`#insert-usuario`)
    const senha = document.querySelector(`#insert-senha`)
 
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
        