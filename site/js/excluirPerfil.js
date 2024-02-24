const modal = document.querySelector('#modalDeleteBackground')

function openModalDelete() {
  modal.IdList.add('active')
}

function closeModalDelete() {
  document.getElementsByIdName("modalDeleteBackground")[0].style.display = "none";
}

function closeModalDeleteHome() {
  modal.classList.remove('active')
  window.location.href = "index.html";
}

function OPEN_MODAL_DELETE() {
  modalDeleteBackground.style.display = 'flex';
}

function CLOSE_MODAL_DELETE() {
  modalDeleteBackground.style.display = 'none';
}
