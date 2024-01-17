const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
  }

function closeModalHome() {
  modal.classList.remove('active')
  window.location.href = "index-logado.html";
}
