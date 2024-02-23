const modalCoupom = document.querySelector('.modalTrocaCupomContent');
const modalConfirmn = document.querySelector('.modalTrocaConfirmnContent');
const profilePoints = document.querySelectorAll('#divProfilePoint')
const ecoScorePoints = document.querySelectorAll('#ecoScorePoint')

window.addEventListener('load', () => {
  const userScore = localStorage.getItem('userScore')
  profilePoints.forEach((item) => { item.innerText = `${userScore} pontos` })
  ecoScorePoints.forEach((item) => { item.innerText = `${userScore} pontos` })
  modalConfirmnOpen()
})

function modalCoupomOpen() {
  modalCoupom.style.display = 'flex';
}

function modalCoupomClose() {
  modalCoupom.style.display = 'none';
}

function modalConfirmnClose() {
  modalConfirmn.style.display = 'none';
}

function useCupom() {
  
}

function modalConfirmnOpen() {
  modalCoupom.style.display = 'none';
  modalConfirmn.style.display = 'flex';
}

