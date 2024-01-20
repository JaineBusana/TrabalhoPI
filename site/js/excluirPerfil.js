const modal = document.querySelector('.modalContainerDelete')

function openModalDelete() {
  modal.classList.add('active')
}

function closeModalDelete() {
    modal.classList.remove('active')
  }

function closeModalDeleteHome() {
  modal.classList.remove('active')
  window.location.href = "index.html";
}