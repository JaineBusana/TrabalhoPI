const modalCoupom = document.querySelector('.modalTrocaCupomContent');
const modalConfirmn = document.querySelector('.modalTrocaConfirmnContent');

function modalCoupomOpen() {
  modalCoupom.style.display = 'flex';
}

function modalCoupomClose() {
  modalCoupom.style.display = 'none';
}

function modalConfirmnClose() {
  modalConfirmn.style.display = 'none';
}

function modalConfirmnOpen() {
  modalCoupom.style.display = 'none';
  modalConfirmn.style.display = 'flex';
}