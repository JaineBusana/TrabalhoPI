const modalContainerPontoColeta = document.querySelector('.modalContainerPontoColeta');
const menu = document.querySelector('#openModalPontoColeta');
const btnCloseModalPontoColeta = document.getElementById('btnCloseModalPontoColeta');

let nome_bairro;
let residuo;
/*
menu.addEventListener('click', () => {
  modalContainerPontoColeta.classList.toggle('ativo');
});

btnCloseModalPontoColeta.addEventListener('click', () => {
  modalContainerPontoColeta.classList.remove('ativo');
});
*/
const neighborhood = {
    0: null,
    1: { nome: "Badenfurt", endereco: "UFSC", observacao: "Fundos" },
    2: { nome: "Fidélis", endereco: "Rua imperatriz leopoldina 123", observacao: "em frente ao mercado" },
    3: { nome: "Itoupava central", endereco: "Itoupava central", observacao: "Farmácia" }
};

const btnLocalPonto = document.getElementById("btnLocalPonto");
function Teste() {
    console.log("Botão Trigger");
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
                    const filtrados = result.filter(item => {
                        console.log(item);
                        if (selectedNeighborhood != "0") {
                            console.log("selectedNeighborhood");
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
                    filtrados.map(item => {
                        const itemHtml =
                         `<div class="card ">
                            <div id="openModalPontoColeta">
                                <p id="nameCard" class="card"> Nome</p>
                            </div>
                            <p class="titleCard">Bairro: ${item.bairro}</span></p>
                            <p class="neighborhood"> </p>
                            <p class="titleCard"> Resíduo: ${item.name}</p>
                            <p class="residue"> </p>
                        </div>`
                        allCardsElement.insertAdjacentHTML('beforeend', itemHtml);
                    })
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
};

btnLocalPonto.addEventListener("click", ()=>Teste());

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
const BotaoTeste = document.getElementById("btnteste");

function Teste() {
    console.log("Botão Trigger");
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
                    //MONTAR FUNÇÃO QUE GERA CARDS  
                    console.log(result, "-----------");
                    const filtrados = result.filter(item => {
                        console.log(item);
                        if (selectedNeighborhood != "0") {
                            console.log("selectedNeighborhood");
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
                   /*const allCardsElement = document.getElementById("allCards");
                    filtrados.map(item => {
                        console.log("Renderizando");
                        const itemHtml = `<h1>${item.bairro}</h1>`
                        allCardsElement.append(itemHtml);
                    })
                    */
                    const allCardsElement = document.getElementById("allCards");
                    filtrados.map(item => {
                        console.log("Renderizando");
                        const itemHtml =
                         `<div class="card ">
                            <div id="openModalPontoColeta">
                                <p id="nameCard" class="card"> Nome</p>
                            </div>
                            <p class="titleCard">Bairro: ${item.bairro}</span></p>
                            <p class="neighborhood"> </p>
                            <p class="titleCard"> Resíduo: ${item.name}</p>
                            <p class="residue"> </p>
                        </div>`
                        allCardsElement.insertAdjacentHTML('beforeend', itemHtml);
                        console.log("Renderizado");
                    })
            },
            error: (xhr, status, error) => { 
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
};

BotaoTeste.addEventListener("click", ()=>Teste());

