const modal = document.querySelector('.modalContainerDelete')

function openModalDelete() {
  modal.classList.add('active')
}

function closeModalDelete() {
  document.getElementsByClassName("modalDelete")[0].style.display = "none";
}

function closeModalDeleteHome() {
  modal.classList.remove('active')
  window.location.href = "index.html";
}