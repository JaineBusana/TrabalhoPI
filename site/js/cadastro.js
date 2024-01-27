const btnSejaColetor =document.querySelector('.btnSejaColetor')
const campCpf =document.querySelector('.campCpf')
const formCadastreColetor =document.querySelector('.formCadastreColetor')
// Validadores
const form = document.getElementById("formCadastre")
const username = document.getElementById("username")
const email = document.getElementById("email")
const cpf = document.getElementById("cpf")
const cnpj = document.getElementById("cnpj")
const address = document.getElementById("address")
const phone = document.getElementById("phone")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("confirmationPassword")



btnSejaColetor.addEventListener('click',function (event){
    campCpf.classList.toggle('active');
});
btnSejaColetor.addEventListener('click',function (event){
    formCadastreColetor.classList.toggle('active');
});
btnSejaColetor.addEventListener('click',function (event){
    btnSejaColetor.classList.toggle('active');
});

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    checkInputUsername();
    checkInputEmail();
    // checkInputCpf();
    checkInputPassword();
    checkInputpasswordConfirmation()
})

function checkInputUsername(){
    const usernameValue = username.value;
    if(usernameValue ===""){
        erroInput(username, "Preencha o Nome.")
    }else{
        const formItem = username.parentElement;
        formItem.className = "formContent"
    }
    
}
function checkInputEmail(){
    const emailValue = email.value;
    if(emailValue ===""){
        erroInput(email, "Preencha o Email.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "formContent"
    }
    
}

function checkInputCpf(){
    const cpfValue = cpf.value;
    if(cpfValue === ""){
        erroInput(cpf,"Preencha a Senha.")
    }else if(cpfValue.length < 8){
        erroInput(cpf,"Senha precisa ter no minimo 8 caracteres.")
    }else{
        const formItem = cpf.parentElement;
        formItem.className ="formContent"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;
    if(passwordValue === ""){
        erroInput(password,"Preencha a Senha.")
    }else if(passwordValue.length < 8){
        erroInput(password,"Senha precisa ter no minimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className ="formContent"
    }
}

function checkInputpasswordConfirmation(){
    const passwordConfirmationValue = passwordConfirmation.value;
    const passwordValue = password.value;
    if(passwordConfirmationValue === ""){
        erroInput(passwordConfirmation,"Preencha a Senha.")
    }else if(passwordValue !== passwordConfirmationValue){
        erroInput(passwordConfirmation,"As senhas nao são iguais!")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className ="formContent"
    }
}

function erroInput(input, message){
    const formItem = input.parentElement;
    const textMensage = formItem.querySelector("a")

    textMensage.innerText =message;
    formItem.className = "formContent error"

}





// const form = document.getElementById("form")
// const nome = document.getElementById("nome")
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// const passwordConfirmation = document.getElementById("password-confirmation")
// const cpf = document.getElementById("cpf")
// const firstForm = document.querySelector('.firstForm')
// const secondForm = document.querySelector('#second-form')
// const btnProx = document.querySelector('#btnProx')
// const btnCadastro = document.querySelector('.btnCadastro')
// const checkbox = document.querySelector('#btnSejacoletor')
// const sejaColetor = document.querySelector('#sejaColetor')

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     checkForm();
    
// })

// checkbox.addEventListener('click', function (event)  {
//     checkbox.classList.toggle('ativo');
//     btnCadastro.classList.toggle('ativo');
//     btnProx.classList.toggle('ativo'); 
//     sejaColetor.classList.toggle('ativo'); 
// })
// btnProx.addEventListener('click' , function(event){
//     event.preventDefault();
//     checkFormProx();
// })



// nome.addEventListener("blur", () => {
//     checkInputNome()
// });
// email.addEventListener("blur", () => {
//     checkInputEmail()
// });
// cpf.addEventListener("blur", () => {
//     checkInputCpf()
// });
// password.addEventListener("blur", () => {
//     checkInputPassword()
// });
// passwordConfirmation.addEventListener("blur", () => {
//     checkInputPasswordConfirmation()
// });

// function checkInputNome() {
//     const nomeValue = nome.value;

//     if (nomeValue === "") {
//         //monstrar mensagem de erro 
//         erroInput(nome, "O nome é obrigatório")

//     } else {
//         const formItem = nome.parentElement;
//         formItem.className = "form-content"
//     }
// }

// function checkInputEmail() {
//     const emailValue = email.value;

//     if (emailValue === "") {
//         erroInput(email, "O email é obrigatório")
//     } else {
//         const formItem = email.parentElement;
//         formItem.className = "form-content"
//     }
// }
// function checkInputCpf() {
//     const cpfValue = cpf.value;

//     if (cpfValue === "") {
//         erroInput(cpf, " O CPF e obrigatório")
//     }else if (cpfValue.length < 11){
//         erroInput(cpf, " Precisa ter no mínimo 11 caracteres")
//     }
//     else {
//         const formItem = password.parentElement;
//         formItem.className = "form-content"
//     }
// }
// function checkInputPassword() {
//     const passwordValue = password.value;

//     if (passwordValue === "") {
//         erroInput(password, " A senha e obrigatória")
//     } else if (passwordValue.length < 8) {
//         erroInput(password, " Precisa ter no mínimo 8 caracteres")
//     }
//     else {
//         const formItem = password.parentElement;
//         formItem.className = "form-content"
//     }
// }

// function checkInputPasswordConfirmation() {
//     const passwordValue = password.value;
//     const passwordConfirmationValue = passwordConfirmation.value;
//     if (passwordConfirmationValue === "") {
//         erroInput(passwordConfirmation, "A confirmação de senha é obrigatória");
//     } else if (passwordConfirmationValue !== passwordValue) {
//         erroInput(passwordConfirmation, "As senhas não são iguais")
//     } else {
//         const formItem = passwordConfirmation.parentElement;
//         formItem.className = "form-content"

//     }
// }

// function checkForm() {
//     checkInputNome();
//     checkInputEmail();
//     checkInputPassword();
//     checkInputPasswordConfirmation();

//     const formItens = form.querySelectorAll(".form-content")
//     const isValid = [...formItens].every((item) => {
//         return item.className === "form-content"
//     });

//     if (isValid) {
//         window.location = "indexLogado.html"
      
//     }else{
//         console.log("a")
//     }
// }


// function checkFormProx() {
//     checkInputNome();
//     checkInputEmail();
//     checkInputPassword();
//     checkInputPasswordConfirmation();
    

//     const formItens = form.querySelectorAll(".form-content")
//     const isValid = [...formItens].every((item) => {
//         return item.className === "form-content"
//     });

//     if (isValid) {
//         firstForm.classList.toggle('ativo');
//     secondForm.classList.toggle('ativo')

//     }



// }

// function erroInput(input, mensagem) {
//     const formItem = input.parentElement;
//     const textMensage = formItem.querySelector("a")

//     textMensage.innerText = mensagem

//     formItem.className = "form-content error"
// }



