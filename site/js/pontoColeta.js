const modalContainerPontoColeta = document.querySelector('.modalContainerPontoColeta');
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta');

let NumberClicks = 0;

function openModal(local, number, street, bairro, telefone) {
  const addressPontoColetaElement = document.getElementById("addressPontoColeta");
  const neighborhoodPontoColetaElement = document.getElementById("NeiborhoodPontoColeta");
  const AddressTelephoneElement = document.getElementById("AddressTelephone");
  const phoneNumberElement = document.getElementById("phoneNumber");
  const point = document.getElementById("Point");

  addressPontoColetaElement.innerHTML = `${street}, N&deg; ${number}`;
  neighborhoodPontoColetaElement.innerHTML = `${bairro}`;
  //AddressTelephoneElement.innerHTML = `${telefone}`;
  point.innerHTML = `${local}`;
  modalContainerPontoColeta.style.display = 'block';
}
const btnLocalPonto = document.getElementById("btnLocalPonto");
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

        filtrados.map((item, index) => {
          const itemHtml =
            `<div class="card ">
                  <div id="textcardLocal">
                    <div id="openModalPontoColeta">
                       <p class="nameCard" data-index="${index}" data-local="${item.local}" data-number="${item.number}" 
                       data-street="${item.street}" data-bairro="${item.bairro}" data-telefone="${item.telefone}">${item.local}</p>
                    </div>
                    <p class="titleCard">Bairro </p>
                    <p class="obsCard">${item.bairro} </p>
                    <p class="titleCard">Residuo: </p>
                    <p class="address">${item.name}</p>
                  </div>
              </div>`
          allCardsElement.insertAdjacentHTML('beforeend', itemHtml);
          allCardsElement.addEventListener('click', function(event) {
            const target = event.target;
            if (target.classList.contains('nameCard')) {
              const index = parseInt(target.getAttribute('data-index'));
              const local = target.getAttribute('data-local');
              const number = target.getAttribute('data-number');
              const street = target.getAttribute('data-street');
              const bairro = target.getAttribute('data-bairro');
              const telefone = target.getAttribute('data-telefone');
              openModal(local, number, street, bairro, telefone);
            }
          });
        })


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