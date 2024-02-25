const modalContainerPontoColeta = document.querySelector('.modalContainerPontoColeta');
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta');

let NumberClicks = 0;
const btnLocalPonto = document.getElementById("btnLocalPonto");

function closeModal() {
  document.getElementById('btnCloseModalPontoColeta').addEventListener('click', function () {
    const modalHtml =
      `
    <h1>Mercado Dona Rosa</h1>
      <div id="infoestabelecimento">
        <h3>Endereço</h3>
        <p>${item.street}, N&deg; ${item.number}</p>
        <h3>Bairro</h3>
        <p>${item.bairro}</p>
        <h3>Telefone</h3>
        <p>${item.telefone}</p>
      </div>
      <div class="infoResidue">
        <button id="btnCloseModalPontoColeta" onclick="closeModal()">
          <div class="menuCloseModalPontoColeta">
            <img src="./assets/img/cancelar.png" alt="">
          </div>
        </button>
        <h2>É coletado</h2> <br>
        <section class="owl-carousel infoResiduoColeta">
          <div class="item cardResidue">
            <h3>amper</h3>
            <p>longneck</p>
            <p>garrafa pet</p>
          </div>
          <div class="item cardResidue">
            <h3>Coobev </h3>
            <p>Embalgem</p>
            <p>garrafa pet</p>
          </div>
        </section>
      </div>
    `
    modalHtml.style.display = 'none';
  });
}

function Filtro() {
  NumberClicks++;
  const selectNeighborhoodValue = document.getElementById("selectNeighborhood");
  const selectResidueValue = document.getElementById("selectResidue");

  const selectedNeighborhood = selectNeighborhoodValue.value;
  const selectedResidue = selectResidueValue.value;

  const nameCardElement = document.getElementById("nameCard");
  const addressElement = document.querySelector(".address");
  const obsCardElement = document.querySelector(".obsCard");

  const errorMessageElement = document.getElementById("error-message");

  if (selectedNeighborhood !== "0" || selectedResidue !== "0") {
    let url = "https://localhost:7249/pontoColeta";

    if (selectedNeighborhood !== "0") {
      url += `?neighborhood=${selectedNeighborhood}`;
    }

    if (selectedResidue !== "0") {
      url += (selectedNeighborhood !== "0" ? '&' : '?') + `residue=${selectedResidue}`;
    }

    $.ajax({
      type: "GET",
      url: url,
      success: (result) => {
        //console.log(result, "-----------");
        const allCardsElement = document.getElementById("allCards");
        
        if (NumberClicks > 1) {
          //allCardsElement.innerHTML = '';
        }
        
        result.map(item => {
          const itemHtml =
            `<div class="card ">
              <div id="textcardLocal">
                <div id="openModalPontoColeta">
                  <p id="nameCard" class="card">${item.local}</p>
                </div>
                <p class="titleCard">Bairro </p>
                <p class="obsCard">${item.bairro} </p>
                <p class="titleCard">Residuo: </p>
                <p class="address">${item.name}</p>
              </div>
            </div>`
          allCardsElement.insertAdjacentHTML('beforeend', itemHtml);
        })
        document.getElementById('allCards').addEventListener('click', function (event) {
          if (event.target.id === 'nameCard') {
            const modalHtml =
              `
                        <h1>Mercado Dona Rosa</h1>
                          <div id="infoestabelecimento">
                            <h3>Endereço</h3>
                            <p>${item.street}, N&deg; ${item.number}</p>
                            <h3>Bairro</h3>
                            <p>${item.bairro}</p>
                            <h3>Telefone</h3>
                            <p>${item.telefone}</p>
                          </div>
                          <div class="infoResidue">
                            <button id="btnCloseModalPontoColeta" onclick="closeModal()">
                              <div class="menuCloseModalPontoColeta">
                                <img src="./assets/img/cancelar.png" alt="">
                              </div>
                            </button>
                            <h2>É coletado</h2> <br>
                            <section class="owl-carousel infoResiduoColeta">
                              <div class="item cardResidue">
                                <h3>amper</h3>
                                <p>longneck</p>
                                <p>garrafa pet</p>
                              </div>
                              <div class="item cardResidue">
                                <h3>Coobev </h3>
                                <p>Embalgem</p>
                                <p>garrafa pet</p>
                              </div>
                            </section>
                          </div>
                        `
            const infoLocateElement = document.getElementById("infoLocate");
            infoLocateElement.insertAdjacentHTML('beforeend', modalHtml);
            modalHtml.style.display = 'block';
          }
        });
      }, error: (xhr, status, error) => {
        console.error('Erro ao fazer a solicitação:', error);
        console.log(url, "Erro da requisição");
      },
      contentType: "application/json",
      dataType: "json"
    })
  } else {
    errorMessageElement.textContent = "Favor selecionar algum item em um dos filtros";
    errorMessageElement.style.display = "block";
    errorMessageElement.style.color = "red"; // Adicionando a cor vermelha ao aviso

    nameCardElement.textContent = "";
    addressElement.textContent = "Endereço: ";
    obsCardElement.textContent = "Observação: ";
  }

  document.getElementById("selectNeighborhood").value = "0";
  document.getElementById("selectResidue").value = "0";
};

btnLocalPonto.addEventListener("click", () => Filtro());

document.getElementById("selectNeighborhood").addEventListener("change", checkFiltersSelection);
document.getElementById("selectResidue").addEventListener("change", checkFiltersSelection);

function checkFiltersSelection() {
  const selectNeighborhoodValue = document.getElementById("selectNeighborhood");
  const selectResidueValue = document.getElementById("selectResidue");
  const errorMessageElement = document.getElementById("error-message");

  if (selectNeighborhoodValue.value === "0" && selectResidueValue.value === "0") {
    errorMessageElement.textContent = "Favor selecionar algum item em um dos filtros";
    errorMessageElement.style.display = "block";
    errorMessageElement.style.color = "red"; // Adicionando a cor vermelha ao aviso
  } else {
    errorMessageElement.textContent = "";
    errorMessageElement.style.display = "none";
  }
}