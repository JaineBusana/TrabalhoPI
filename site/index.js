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