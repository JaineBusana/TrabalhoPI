const modalContainerPontoColeta = document.querySelector('.modalContainerPontoColeta');
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta');

let  NumberClicks=0;
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
                    console.log(result, "-----------");
                    const allCardsElement = document.getElementById("allCards");
                    
                    if (NumberClicks>1){
                        allCardsElement.innerHTML = '';
                    }
                    
                    result.map(item => { 
                      const itemHtml =
                         `<div class="card ">
                            <div id="openModalPontoColeta">
                                <p id="nameCard" class="card"> ${item.local}</p>
                            </div>
                            <p class="titleCard">Bairro: ${selectedNeighborhood}</span></p>
                            <p class="Street">Rua: ${item.street}</p>
                            <p class="Number">Numero: ${item.number}</p>
                            <p class="residue">Resíduo: ${item.name}</p>
                        </div>`
                        allCardsElement.insertAdjacentHTML('beforeend', itemHtml);

                        const addressPontoColetaElement = document.getElementById("addressPontoColeta");
                        const addressNumberElement = document.getElementById("AddressNumber");
                        const phoneNumberElement = document.getElementById("phoneNumber");
                        const point = document.getElementById("Point");

                        addressPontoColetaElement.innerHTML = `<span>Rua:</span> ${item.street}`;
                        addressNumberElement.innerHTML = `<span>Número:</span> ${item.number}`;
                        point.innerHTML = `<h1 id="Point"></h1> ${item.local}`;
                        //phoneNumberElement.innerHTML = `<span>Telefone:</span> ${item.telefone}`;
                    })
                    /* MODAL
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
                    */
            },error: (xhr, status, error) => { 
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

btnLocalPonto.addEventListener("click", ()=>Filtro());

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