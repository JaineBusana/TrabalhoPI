const getUserScore = () => { return localStorage.getItem('userScore') }
const modalCoupom = document.querySelector('.modalTrocaCupomContent');
const modalConfirmn = document.querySelector('.modalTrocaConfirmnContent');
const profilePoints = document.querySelectorAll('#divProfilePoint')
const ecoScorePoints = document.querySelectorAll('#ecoScorePoint')

window.addEventListener('load', () => {
  updateScoreOnWindow()
})

function updateScoreOnWindow() {
  profilePoints.forEach((item) => { item.innerText = `${getUserScore()} pontos` })
  ecoScorePoints.forEach((item) => { item.innerText = `${getUserScore()} pontos` })
}

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
  if (getUserScore() >= 50) {
    const user = {
      id: localStorage.getItem('userID'),
      score: (getUserScore() - 50).toString()
    }

    $.ajax({
      type: 'PUT',
      url: 'https://localhost:7249/user/updateScore',
      data: JSON.stringify(user),
      complete: (jqXHR) => {
        if (jqXHR.status == 200) {
          localStorage.setItem('userScore', user.score)
          updateScoreOnWindow()
          modalConfirmnOpen()
        }
        else {
          alert(jqXHR.responseText);
        }
      },
      contentType: "application/json",
      dataType: "json",
    })
  }
  else {
    alert('Você não possui pontos suficientes!')
  }
}

function modalConfirmnOpen() {
  modalCoupom.style.display = 'none';
  modalConfirmn.style.display = 'flex';
}

