const modalContainerPontoColeta = document.querySelector('.modalContainerPontoColeta')
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta')

menu.addEventListener('click', () => {
  modalContainerPontoColeta.classList.toggle('ativo')
});

btnCloseModalPontoColeta.addEventListener('click', () => {
  modalContainerPontoColeta.classList.remove('ativo');
});

const neighborhood = {
    0: null,
    1: { nome: "Badenfurt", endereco: "UFSC", observacao: "Fundos" },
    2: { nome: "Fidélis", endereco: "Rua imperatriz leopoldina 123", observacao: "em frente ao mercado" },
    3: { nome: "Itoupava central", endereco: "Itoupava central", observacao: "Farmácia" }
};

const selectNeighborhood = () => {

};

const btnLocalPonto = document.getElementById("btnLocalPonto");
btnLocalPonto.addEventListener("click", () => {
    const selectNeighborhoodValue = document.getElementById("selectNeighborhood");
    const selectResidueValue = document.getElementById("selectResidue");

    const selectedNeighborhood = selectNeighborhoodValue.value;
    const selectedResidue = selectResidueValue.value;

    const nameCardElement = document.getElementById("nameCard");
    const addressElement = document.querySelector(".address");
    const obsCardElement = document.querySelector(".obsCard");

    const errorMessageElement = document.getElementById("error-message");

    if (selectedNeighborhood !== "0" || selectedResidue !== "0") {
        errorMessageElement.textContent = "";
        errorMessageElement.style.display = "none";

        if (selectedNeighborhood !== "0") {
            const neighborhoodSelected = neighborhood[selectedNeighborhood];
            if (neighborhoodSelected) {
                nameCardElement.textContent = neighborhoodSelected.nome;
                addressElement.textContent = "Endereço: " + neighborhoodSelected.endereco;
                obsCardElement.textContent = "Observação: " + neighborhoodSelected.observacao;
            }
        } else {
            nameCardElement.textContent = "";
            addressElement.textContent = "Endereço: ";
            obsCardElement.textContent = "Observação: ";
        }
    } else {
        errorMessageElement.textContent = "Favor selecionar algum item em um dos filtros";
        errorMessageElement.style.display = "block";

        nameCardElement.textContent = "";
        addressElement.textContent = "Endereço: ";
        obsCardElement.textContent = "Observação: ";
    }
});

const selectNeighborhoodValue = document.getElementById("selectNeighborhood");
selectNeighborhoodValue.addEventListener("change", selectNeighborhood);

let url = "https://localhost:7249/pontoColeta";

// Adiciona o parâmetro neighborhood se estiver definido
if (selectedNeighborhood !== "0") {
    url += `?neighborhood=${selectedNeighborhood}`;
}

// Adiciona o parâmetro residue se estiver definido e se já houver parâmetros na URL
if (selectedResidue !== "0") {
    url += selectedNeighborhood !== "0" ? `&residue=${selectedResidue}` : `?residue=${selectedResidue}`;
}
$.ajax({
    type: "GET",
    url: url,
    success: (result) => { 
        document.getElementById("nameElement").textContent = result.name;
        document.getElementById("neighborhoodElement").textContent = result.neighborhood;
        document.getElementById("residueElement").textContent = result.residue;
       
       //console.log(result.name);
       //console.log(result.neighborhood);
       //console.log(result.residue);
    },
    contentType: "application/json",
    dataType: "json",
});


document.addEventListener("DOMContentLoaded", function () {
    // Aqui sera a quantidade de retornos do result
    const numberOfCards = 5;

    // Container para os cards
    const cardContainer = document.getElementById("cardContainer");

    // Criar cards dinamicamente
    for (let i = 1; i <= numberOfCards; i++) {
        const card = createCardElement(i);
        cardContainer.appendChild(card);
    }
});

// Função para criar um elemento de card
function createCardElement(cardNumber) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "Card " + cardNumber;
    return card;
}
