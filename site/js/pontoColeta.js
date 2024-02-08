const modalContainerPontoColeta = document.querySelector('.modalContainerPontoColeta');
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta');

menu.addEventListener('click', () => {
  modalContainerPontoColeta.classList.toggle('ativo');
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
        errorMessageElement.style.color = "red"; // Adicionando a cor vermelha ao aviso

        nameCardElement.textContent = "";
        addressElement.textContent = "Endereço: ";
        obsCardElement.textContent = "Observação: ";
    }
});

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

document.addEventListener("DOMContentLoaded", function () {
    const numberOfCards = 5;
    const cardContainer = document.getElementById("cardContainer");

    for (let i = 1; i <= numberOfCards; i++) {
        const card = createCardElement(i);
        cardContainer.appendChild(card);
    }
});

function createCardElement(cardNumber) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "Card " + cardNumber;
    return card;
}
