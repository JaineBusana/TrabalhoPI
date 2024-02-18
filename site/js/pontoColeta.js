const modalContainerPontoColeta = document.querySelector('.modalContainerPontoColeta');
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta');

let NumberClicks = 0;
const btnLocalPonto = document.getElementById("btnLocalPonto");
function Filtro() {
  NumberClicks++;
  const selectNeighborhoodValue = document.getElementById("selectNeighborhood");
  const selectResidueValue = document.getElementById("selectResidue");


  btnCloseModalPontoColeta.addEventListener('click', () => {
    modalContainerPontoColeta.classList.remove('ativo');
  });

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
        const filtrados = result.filter(item => {
          console.log(item);
          if (selectedNeighborhood != "0") {
            //console.log("selectedNeighborhood");
            if (item.bairro != selectedNeighborhood) {
              return false;
            }
          }

          if (selectedResidue != "0") {
            console.log("selectedResidue");
            console.log(selectedResidue);
            if (item.name != selectedResidue) {
              return false;
            }
          }
          return true;
        }
        );
        console.log(filtrados, "-----------");
        const allCardsElement = document.getElementById("allCards");

        if (NumberClicks > 1) {
          allCardsElement.innerHTML = '';
        }

        filtrados.map(item => {
          const itemHtml =
            `<div class="card ">
                            <div id="openModalPontoColeta">
                                <p id="nameCard" class="card"> ${item.local}</p>
                            </div>
                            <p class="titleCard">Bairro: ${item.bairro}</span></p>
                            <p class="neighborhood"> </p>
                            <p class="titleCard"> Resíduo: ${item.name}</p>
                            <p class="residue"> </p>
                        </div>`
          allCardsElement.insertAdjacentHTML('beforeend', itemHtml);

          const addressPontoColetaElement = document.getElementById("addressPontoColeta");
          const addressNumberElement = document.getElementById("AddressNumber");
          const phoneNumberElement = document.getElementById("phoneNumber");

          addressPontoColetaElement.innerHTML = `<span>Rua:</span> ${item.street}`;
          addressNumberElement.innerHTML = `<span>Número:</span> ${item.number}`;
          //phoneNumberElement.innerHTML = `<span>Telefone:</span> ${item.telefone}`;
        })

        document.getElementById('allCards').addEventListener('click', function (event) {
          if (event.target.id === 'nameCard') {
            const modal = document.querySelector('.modalContainerPontoColeta');
            modal.style.display = 'block';
          }
        });

        document.getElementById('btnCloseModalPontoColeta').addEventListener('click', function () {
          const modal = document.querySelector('.modalContainerPontoColeta');
          modal.style.display = 'none';
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

function CLOSE_MODAL_PERFIL() {
  modalEditarPerfil.style.display = 'none';
}

function OPEN_MODAL_PERFIL() {
  modalEditarPerfil.style.display = 'flex';
}
