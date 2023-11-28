function showModalMenu(classe) {
  let modal = document.querySelector(classe)

  if (modal.classList.contains(`modal-active`)){
    modal.classList.remove(`modal-active`)
  }
  else{
    modal.classList.add(`modal-active`);
  }       
}