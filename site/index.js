function SHOW_MODAL_LOGIN() {
  let modal = document.querySelector('#modal-login')
  modal.classList.add(`modal-login-active`);
}

function CLOSE_MODAL_LOGIN() {
  let modal = document.querySelector('#modal-login')
  modal.classList.remove(`modal-login-active`);
}

function showModalMenu(classe) {
  let modal = document.querySelector(classe)
  
  if (modal.classList.contains(`modal-active`)){
    modal.classList.remove(`modal-active`)
  }
  else{
    modal.classList.add(`modal-active`);
  }       
  
  }


$(() => {

$(".rodape-sugestoes-btn").click((e) => {
    e.preventDefault();
      let div = $('<div/>').addClass('error').html('Oi tudo bem!').insertAfter($('#modal-login'));      

    const sugestao ={
       textoSugestao: $("#rodape-sugestoes-textarea")[0].value

    }

    if (!sugestao.textoSugestao) {
      
      $("#nome").addClass("invalid");
      return;
  }



    console.log(sugestao);

})




})
