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
